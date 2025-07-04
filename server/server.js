const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const twilio = require("twilio");
const stripeModule = require("stripe");

// Load .env variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4242;
const stripe = stripeModule(process.env.STRIPE_SECRET_KEY);
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// ---------------------- Stripe Route ---------------------- //
app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400).json({ error: "Amount is required" });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // convert to cents
      currency: "cad",
      payment_method_types: ["card"],
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("Stripe Error:", err.message);
    res.status(500).json({ error: "Payment Intent creation failed" });
  }
});

// ---------------------- Twilio Routes ---------------------- //
app.post("/send-otp", async (req, res) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ error: "Phone number is required" });
  }

  try {
    const cleanedPhone = phone.toString().replace(/\D/g, "");
    const fullPhone = `+91${cleanedPhone}`;

    const verification = await twilioClient.verify.v2
      .services(process.env.TWILIO_SERVICE_SID)
      .verifications.create({
        to: fullPhone,
        channel: "sms",
      });

    res.status(200).json({
      status: verification.status,
      sid: verification.sid,
    });
  } catch (err) {
    console.error("Twilio send error:", err.message);
    res.status(500).json({
      error: "OTP send failed",
      details: err.message,
    });
  }
});

app.post("/verify-otp", async (req, res) => {
  const { phone, code } = req.body;

  if (!phone || !code) {
    return res.status(400).json({ error: "Phone and OTP code are required" });
  }

  try {
    const cleanedPhone = phone.toString().replace(/\D/g, "");
    const fullPhone = `+91${cleanedPhone}`;

    const verificationCheck = await twilioClient.verify.v2
      .services(process.env.TWILIO_SERVICE_SID)
      .verificationChecks.create({
        to: fullPhone,
        code,
      });

    if (verificationCheck.status === "approved") {
      res.status(200).json({ status: "approved" });
    } else {
      res.status(400).json({ status: "denied", error: "Invalid OTP" });
    }
  } catch (err) {
    console.error("Twilio verify error:", err.message);
    res.status(500).json({
      error: "Verification failed",
      details: err.message,
    });
  }
});

// Health check
app.get("/", (req, res) => {
  res.send("✅ Server is running");
});

app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});
