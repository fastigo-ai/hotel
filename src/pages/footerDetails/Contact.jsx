import React from 'react'

const Contact = () => {
  return (
    <div className="bg-white text-gray-800  max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-black mb-4 ">
          Contact at <span className="Text">P</span>lans <span className="Text-M">M</span>otor <span className="Text-o">I</span>nn
        </h1>
      <div className="bg-blue-50 p-6 rounded-lg shadow">
          <p className="text-lg font-medium mb-2">📍 Address:</p>
          <p className="mb-4">Plains Motor Inn<br />4812 - 61 Street<br />Stettler, AB T0C 2L1</p>

          <p className="text-gray-800">
          📩 Email us at <a href="mailto:plainsmotorinnn@gmail.com" className="text-blue-700 font-semibold">plainsmotorinnn@gmail.com</a><br />
          📞 Call <a href="tel:4037423491" className="text-blue-700 font-semibold">403-742-3491</a>
        </p>
        </div>
    </div>
  )
}

export default Contact
