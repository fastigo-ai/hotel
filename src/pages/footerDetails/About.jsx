import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Truck, Wifi, Coffee, Users, Heart } from 'lucide-react';
import comfordable from '../../assets/logo/121.JPG';
import Banner from "../../assets/card Image/no1.png";
import "../../App.css";

const About = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen text-gray-800 font-sans">
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Banner})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.2em] font-bold text-xs text-white/90 mb-4">Established Comfort</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
            <span className="Text">Plains</span> <span className="Text-M">Motor</span> <span className="Text-o">Inn</span> <br />
            About Us
          </h1>
        </div>
      </section>

      {/* A New Chapter Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4BA9A2]">A New Chapter in Stettler</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Plains Motor Inn — Stettler, Alberta's trusted stay, now under new management. We are proud to carry forward a legacy of hospitality while introducing modern standards of service and comfort.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Located in the heart of Stettler, Plains Motor Inn features 40 clean and comfortable rooms, thoughtfully prepared to give every guest a restful experience. Whether you're here for a night or an extended stay, our mission is simple — to offer comfort, care, and real value.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Now under new management, we're making exciting changes throughout the property — upgrading our rooms, enhancing guest services, and creating a fresh, welcoming atmosphere. Every detail is being reimagined to better serve you.
            </p>
          </div>
          <div className="relative">
            {/* Just a stylized placeholder for the complex overlapping image card */}
            <div className="bg-white p-4 rounded-xl shadow-xl">
              <img 
                src={comfordable}
                alt="Comfortable Room" 
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="bg-[#F3F5F4] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4BA9A2] mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the amenities and services that make us your favorite choice in Alberta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#E6EFEA] text-[#4BA9A2] rounded-lg flex items-center justify-center mb-6">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Flexible Stays</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Daily, weekly, and monthly stays at competitive rates tailored for both short-term travelers and long-term workers.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#E6EFEA] text-[#4BA9A2] rounded-lg flex items-center justify-center mb-6">
                <Truck size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Truck Parking</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ample truck and trailer parking space. We provide easy access and peace of mind for professional drivers on the road.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#E6EFEA] text-[#4BA9A2] rounded-lg flex items-center justify-center mb-6">
                <Wifi size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Free WiFi</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Stay connected throughout your stay. We provide fast and reliable complimentary WiFi in every room and common area.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#E6EFEA] text-[#4BA9A2] rounded-lg flex items-center justify-center mb-6">
                <Coffee size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Free Continental Breakfast</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Start your day right with our complimentary continental breakfast served fresh every morning in our guest lounge.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#E6EFEA] text-[#4BA9A2] rounded-lg flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">Friendly Team</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our dedicated local staff is always ready to help. We pride ourselves on personalized service and warm hospitality.
              </p>
            </div>

            {/* Card 6: Experience More (Action Card) */}
            <div className="bg-[#1A4C43] p-8 rounded-xl shadow-md flex flex-col justify-center text-center">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Experience More</h3>
              <p className="text-sm text-white/90 mb-8 leading-relaxed">
                Ready to book your stay with us? We look forward to welcoming you.
              </p>
              <Link to="/hotel-card" className="inline-block bg-[#F39C49] hover:bg-[#e08c3c] text-white font-bold py-3 px-6 rounded-md transition-colors w-full">
                View All Amenities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Your Home on the Road Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="w-16 h-16 bg-[#FFF5EE] text-[#F39C49] rounded-full flex items-center justify-center mx-auto mb-8">
          <Heart size={28} />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4BA9A2] mb-6">Your Home on the Road</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          At <span className="font-bold text-gray-900">Plains Motor Inn</span>, we're more than just a place to rest — we're your home on the road. Whether you're passing through or staying awhile, we look forward to welcoming you with warmth and hospitality.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/hotel-card" className="w-full sm:w-auto bg-[#1A4C43] hover:bg-[#133c35] text-white font-bold py-3 px-8 rounded-md transition-colors">
            Reserve Your Room
          </Link>
          <Link to="/contact" className="w-full sm:w-auto bg-white border border-gray-300 hover:border-gray-400 text-gray-800 font-bold py-3 px-8 rounded-md transition-colors">
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;
