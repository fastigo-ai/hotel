import React from "react";

const ComparisonTable = () => {
  return (
    <div className="bg-gray-100 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          🛏️ Motel vs. Vacation Rental: What to Choose?
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-300 text-left bg-white rounded-lg overflow-hidden shadow">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Feature</th>
                <th className="px-4 py-3 font-semibold">Vacation Rental</th>
                <th className="px-4 py-3 font-semibold">Plains Motor Inn (Motel)</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="border-t">
                <td className="px-4 py-3">Price Transparency</td>
                <td className="px-4 py-3">Varies + Fees</td>
                <td className="px-4 py-3">Flat daily/weekly/monthly rates</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Check-in Flexibility</td>
                <td className="px-4 py-3">Owner-dependent</td>
                <td className="px-4 py-3">24/7 front desk</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">On-Site Staff</td>
                <td className="px-4 py-3">Usually None</td>
                <td className="px-4 py-3">Always Available</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Cleaning & Housekeeping</td>
                <td className="px-4 py-3">Self-managed</td>
                <td className="px-4 py-3">Done for You Daily/Weekly</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Good for 1-Night Stays</td>
                <td className="px-4 py-3">Often Not</td>
                <td className="px-4 py-3">Yes</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Parking for Trucks/Trailers</td>
                <td className="px-4 py-3">Rare</td>
                <td className="px-4 py-3 text-green-600 font-semibold">✅ Yes</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Ideal for Work Crews</td>
                <td className="px-4 py-3">Limited</td>
                <td className="px-4 py-3 text-green-600 font-semibold">✅ Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
