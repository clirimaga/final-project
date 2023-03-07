import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './components.css';
import AOS from "aos";
import "aos/dist/aos.css";


export default function Stats() {
  AOS.init();
  return (
    <div className="row m-5 " data-aos="fade-up">
      <div className="stat-bg col-md-4 border px-5 py-5  ">
        <p>
          Over 100 million people worldwide are currently learning German. There
          are over 1,000 online communities and groups dedicated to learning
          German.
        </p>
      </div>
      <div className="stat-bg col-md-4 border px-5 py-5 soft-yellow">
        <p>
          In the past year, 50 language exchange events have been organized in
          our local area.
        </p>
      </div>
      <div className="stat-bg col-md-4 border px-5 py-5 ">
        <p>
          Join the global community of German learners, connect with others
          online, and attend language exchange events in your area to improve
          your skills and have fun!
        </p>
      </div>
    </div>
  );
}
