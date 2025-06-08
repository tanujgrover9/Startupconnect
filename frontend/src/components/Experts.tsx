import React from 'react';
import profile7 from '../assets/jonas-kakaroto-KIPqvvTOC1s-unsplash (1).jpg';
import profile8 from '../assets/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg';
import profile9 from '../assets/nicolas-horn-MTZTGvDsHFY-unsplash.jpg';

const experts = [
  {
    name: 'Jeff Gibson',
    role: 'Investor • Chairman Emeritus, GSR Group',
    image: profile7,
    about: 'Renowned industrialist and investor known for transforming global businesses into powerhouses.',
  },
  {
    name: 'Kiran Mazumdar-Shaw',
    role: 'Entrepreneur • Executive Chairperson, Biocon',
    image: profile8,
    about: 'India’s pioneering biotech entrepreneur with a mission to make healthcare affordable.',
  },
  {
    name: 'Dr. A Velumani',
    role: 'Mentor • Founder, Thyrocare',
    image: profile9,
    about: 'Built one of India’s largest diagnostic chains from scratch and mentors rising startups.',
  },
];

const ExpertsSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16 px-6 mt-6 rounded-xl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
          Top Entrepreneurs, Investors & Mentors
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Learn and get inspired by the best minds in the startup ecosystem who’ve paved the way with experience and vision.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {experts.map((expert, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-24 h-24 object-cover rounded-full border-4 border-purple-500 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-gray-800">{expert.name}</h3>
              <p className="text-sm text-center text-purple-600 font-medium mb-2">{expert.role}</p>
              <p className="text-gray-600 text-sm text-center">{expert.about}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
