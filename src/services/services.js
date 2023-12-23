import React from 'react';
import './services.css';

function Services() {
  const servicesData = [
    {
      title: 'Web Development',
      description: 'Professional, responsive websites tailored to your unique needs.',
    },
    {
      title: 'Branding',
      description: 'Let us create a brand that reflects you and your business.',
    },
    {
      title: 'Digital Marketing',
      description: "We'll help you reach the right audience at the right time.",
    },
    {
        title:'SEO & SEM',
        description:"Get found online with our expert SEO strategies.",
    },
    {
        title:'Content Creation',
        description:'from blog posts to social media content, we’ve got you covered.',
    },
    {
        title:'Social Media Management',
        description:'Manage your social media accounts for maximum impact.',
    },
    {
        title:'Graphic Designing',
        description:'From brochures to website designs, we can handle it all.',
    },
    {
        title: 'Ecommerce Solution',
        description: 'Turn your website into eCommerce powerhouse',
    }
  ];

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
