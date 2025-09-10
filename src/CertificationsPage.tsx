import React from 'react';

const CertificationsPage = () => {
  const certifications = [
    { title: 'CS50: Introduction to Computer Science', issuer: 'Harvard University' },
    { title: 'Full Stack Software Developer', issuer: 'IBM' },
    { title: 'Data Science Professional', issuer: 'IBM' },
    { title: 'UX Design Professional', issuer: 'Google' },
    { title: 'Advanced React', issuer: 'Meta' },
    { title: 'AWS Fundamentals Specialization', issuer: 'Amazon Web Services' },
    { title: 'Machine Learning with Python (with honors)', issuer: 'FreeCodeCamp' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">All Certifications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-purple-900/20 rounded-xl p-6 backdrop-blur-sm"
            >
              <div
                className="w-full h-48 bg-gray-700 rounded-lg mb-4"
                aria-label={`Placeholder for ${cert.title}`}
              />
              <h3 className="text-xl font-bold text-purple-400">{cert.title}</h3>
              <p className="text-gray-400">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;