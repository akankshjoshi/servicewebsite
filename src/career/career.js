import React from 'react';
import './career.css';
function Career() {
  const jobOpenings = [
    {
      title: 'Web Developer Intern',
      location: 'Delhi, New Delhi',
      mode: 'Work from Home',
      description: 'We are looking for a web development intern with a passion for coding and learning.',
    },
    {
      title: 'Marketing Intern',
      location: 'Delhi, New Delhi',
      mode: 'Work from Home',
      description: 'Join our marketing team and gain real-world experience in digital marketing and promotion.',
    },
    {
        title: 'UI/UX Designer Intern',
        location: 'Delhi, New Delhi',
        mode: 'Work from Home',
        description:'Join our web developing team and gain real-world experience in UI/UX Designing'
    },
    {
        title: 'Data Analyst Intern',
        location: 'Delhi, New Delhi',
        mode: 'Work from Home',
        description:'Become part of the data analytics team as an intern.'
    },
    {
      title: 'Data analytics Intern',
      location: 'Delhi, New Delhi',
      mode: 'Work from Home',
      description: 'Gain hands on experience working with big data technologies like Hadoop & Spark.'
    },
    {
        title: 'Product Manager Intern',
        location: 'Delhi, New Delhi',
        mode: 'Work from Home',
        description:'Experience working on product management projects.'
    },
    {
        title: 'Software Engineer Intern',
        location: 'Delhi, New Delhi',
        mode: 'Work from Home',
        description:'Gain hands-on experience by joining our software engineering team.'
    },
    {
      title: 'sales intern',
      location: 'Delhi, New Delhi',
      mode: 'Work from Home',
      description: 'Learn sales skills while working on sales projects.'
    },
    {
        title: 'Digital Marketing Executive',
        location: 'Delhi, New Delhi',
        mode: 'Work from Home',
        description:'Apply if you have a background in digital marketing or social media advertising.'
    },
    {
        title: 'Sales & Business Development Executives',
        location: 'Delhi, New Delhi',
        mode: 'Full Time',
        description:'If you have strong sales skills, we want to hear from you!'
    }
  ];

  return (
    <div className="career-page">
      <h1>Career Opportunities</h1>
      <div className="job-openings">
        {jobOpenings.map((job, index) => (
          <div key={index} className="job-opening">
            <h2>{job.title}</h2>
            <p>{job.location}</p>
            <p>{job.description}</p>
            <button>coming soon</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Career;
