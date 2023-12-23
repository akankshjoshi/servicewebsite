import React from 'react';
import './landingpage.css';
import Aboutus from '../aboutus/aboutus';
import Pricing from '../pricing/pricing';
function Landingpage() {
  return (

        <div className="landing-page">
      <header>
        <h1>CodeCanvasStudio</h1>
        <p>Your One-Stop Solution for Digital Success</p>
      </header>
     
      <section>
        <h2>Why Choose Us?</h2>
        <div className="benefits">
          <div className="benefit-card">
            <img src="https://teamxp.in/wp-content/uploads/2023/04/happy-team.png" alt="Experienced Team" />
            <h3>Experienced Team</h3>
            <p>We have a dedicated team of experts with years of experience.</p>
          </div>
          <div className="benefit-card">
            <img src="https://saigontechnology.com/assets/media/custom-made-software-solution.png" alt="Customized Solutions" />
            <h3>Customized Solutions</h3>
            <p>We tailor our services to meet your specific needs and goals.</p>
          </div>
          <div className="benefit-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaddibTOZ7ilT5O6MS6vYeN8j2r70wt37nKw&usqp=CAU" alt="Proven Results" />
            <h3>Proven Results</h3>
            <p>We have a track record of delivering successful outcomes for clients.</p>
          </div>
          <div className="benefit-card">
            <img src="https://pharpoint.com/wp-content/uploads/2021/08/experienced-1.png" alt="Client-Centric Approach" />
            <h3>Client-Centric Approach</h3>
            <p>Your satisfaction and success are at the center of everything we do.</p>
          </div>
          </div>
      </section>
      <footer>
        <Pricing />
        <Aboutus />
      </footer>
    </div>
  );
}
export default Landingpage;
