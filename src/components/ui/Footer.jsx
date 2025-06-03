import React from 'react';

const Footer = () => {
  const sections = [
    {
      title: 'Support',
      links: [
        'COVID-19 FAQs',
        'Manage your trips',
        'Contact Customer Service',
        'Safety resource centre',
      ],
    },
    {
      title: 'Discover',
      links: [
        'Loyalty programme',
        'Holiday deals',
        'Travel articles',
        'Business Services',
        'Review Awards',
        'Car hire',
        'Flight finder',
        'Restaurant bookings',
        'Travel Agents',
      ],
    },
    {
      title: 'Terms and settings',
      links: [
        'Privacy & cookies',
        'Terms and conditions',
        'Grievance officer',
        'Slavery Statement',
        'Human Rights Statement',
      ],
    },
    {
      title: 'Partners',
      links: [
        'Partner login',
        'Partner help',
        'List your property',
        'Become an affiliate',
      ],
    },
    {
      title: 'About',
      links: [
        'About Plains Motor',
        'How we work',
        'Sustainability',
        'Press centre',
        'Careers',
        'Investor relations',
        'Corporate contact',
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 text-sm text-gray-700 border-t">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h4 className="font-semibold mb-2">{section.title}</h4>
            <ul className="space-y-1">
              {section.links.map((link, i) => (
                <li key={i} className="hover:underline cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

        
      <div className="max-w-7xl mx-auto px-4 py-6 border-t flex items-center justify-center flex-wrap gap-4">
        <p className="text-xs text-gray-500 text-center  md:w-auto">
          Plains Motor is part of Plains Group, the leader in modern travel and mobility services.<br />
          Copyright © {new Date().getFullYear()} Plains Motor™. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
