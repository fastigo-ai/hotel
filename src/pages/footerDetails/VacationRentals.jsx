import React from "react";

const VacationRentals = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">
          🏡 Vacation Rentals in Canada
        </h1>
        <p className="text-lg mb-8 text-center">
          <strong>The Rise of Home-Stays, Cabins, and Unique Local Experiences</strong>
        </p>
        <p className="text-lg mb-10 text-center">
          Canada offers more than just hotels and motels — vacation rentals have become increasingly popular for travelers seeking flexibility, space, and unique stays. But are they right for you?
        </p>

        {/* What Are Vacation Rentals */}
        <div className="bg-blue-50 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold text-black mb-4">🌟 What Are Vacation Rentals?</h2>
          <p className="text-lg mb-4">Vacation rentals in Canada include:</p>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>Homes, condos, or apartments rented short-term</li>
            <li>Cabins and cottages (often lakeside or in mountains)</li>
            <li>Basement suites or private rooms in someone’s house</li>
            <li>Unique stays like yurts, domes, treehouses, and off-grid cabins</li>
          </ul>
          <p className="mt-4 text-lg">
            These are commonly found on platforms like: <strong>Airbnb, VRBO, CanadaStays</strong>
          </p>
        </div>

        {/* Pros */}
        <div className="bg-green-50 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">✅ Pros of Vacation Rentals</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>More space — great for families or groups</li>
            <li>Kitchen access for self-catering</li>
            <li>Unique or scenic properties</li>
            <li>Can be cost-effective for long stays</li>
            <li>Often located in residential or remote areas</li>
          </ul>
        </div>

        {/* Cons */}
        <div className="bg-red-50 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold text-red-700 mb-4">⚠️ Things to Watch For</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>Cleaning fees and service charges can add up</li>
            <li>Availability is limited in rural towns</li>
            <li>No front desk or on-site support</li>
            <li>Inconsistent standards (each property is different)</li>
            <li>Some listings cancel last-minute or have unclear rules</li>
            <li>Not ideal for 1-night stays or work crews</li>
          </ul>
        </div>

        {/* Comparison Table */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold text-yellow-700 mb-4">🛏️ Motel vs. Vacation Rental: What to Choose?</h2>
          <div className="overflow-auto">
            <table className="w-full table-auto text-left border-collapse">
              <thead>
                <tr className="bg-yellow-100">
                  <th className="p-2 font-medium">Feature</th>
                  <th className="p-2 font-medium">Vacation Rental</th>
                  <th className="p-2 font-medium">Plains Motor Inn</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-2">Price Transparency</td>
                  <td className="p-2">Varies + Fees</td>
                  <td className="p-2">Flat daily/weekly/monthly rates</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">Check-in Flexibility</td>
                  <td className="p-2">Owner-dependent</td>
                  <td className="p-2">24/7 front desk</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">On-Site Staff</td>
                  <td className="p-2">Usually None</td>
                  <td className="p-2">Always Available</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">Cleaning & Housekeeping</td>
                  <td className="p-2">Self-managed</td>
                  <td className="p-2">Done for You</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">Good for 1-Night Stays</td>
                  <td className="p-2">Often Not</td>
                  <td className="p-2">✅ Yes</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">Truck/Trailer Parking</td>
                  <td className="p-2">Rare</td>
                  <td className="p-2">✅ Yes</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">Ideal for Work Crews</td>
                  <td className="p-2">Limited</td>
                  <td className="p-2">✅ Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Work Travel */}
        <div className="bg-blue-100 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold text-black mb-4">💼 Traveling for Work or Long Stay?</h2>
          <p className="text-lg">
            Vacation rentals can feel like home, but motels like <strong>Plains Motor Inn</strong> offer more stability, service, and convenience — especially if you're staying for work, have irregular hours, or need easy parking and walk-up access.
          </p>
        </div>

        {/* When to Choose What */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-800 mb-2">🧭 When to Choose a Vacation Rental:</h3>
            <ul className="list-disc pl-6 text-lg space-y-2">
              <li>You're booking for a week or more with family</li>
              <li>You want a private, scenic escape</li>
              <li>You're traveling in a group and can split costs</li>
              <li>You don’t need services like daily cleaning</li>
            </ul>
          </div>
          <div className="bg-orange-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-orange-800 mb-2">🏨 When a Motel is the Better Choice:</h3>
            <ul className="list-disc pl-6 text-lg space-y-2">
              <li>You need flexible booking for 1–30 days</li>
              <li>You're a contractor, crew, or solo traveler</li>
              <li>You're passing through rural Alberta</li>
              <li>You need reliable Wi-Fi, parking, and front desk access</li>
              <li>You don’t want to deal with chores at check-out</li>
            </ul>
          </div>
        </div>

        {/* Final Word */}
        <div className="bg-white border-l-4 border-blue-600 p-6 shadow">
          <h2 className="text-2xl font-semibold text-black mb-2">Final Word</h2>
          <p className="text-lg mb-4">
            Canada has amazing vacation rentals — but they’re not for everyone, and they’re not always as easy as they seem.
          </p>
          <p className="text-lg">
            For a worry-free, clean, and straightforward stay, you can always count on <strong>Plains Motor Inn</strong> in Stettler, Alberta. Whether you're here for a night, a week, or longer — we'll be ready.
          </p>
          <div className="mt-4 text-lg">
            📍 <strong>Address:</strong> 4812 - 61 Street, Stettler, AB<br />
            📞 <strong>Phone:</strong>{" "}
            <a href="tel:4037423491" className="text-black underline">403-742-3491</a><br />
            ✉️ <strong>Email:</strong>{" "}
            <a href="mailto:plainsmotorinnn@gmail.com" className="text-black underline">plainsmotorinnn@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacationRentals;
