import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Slider() {
  AOS.init();
  const images = [
    { url: "https://res.cloudinary.com/dlbenbmke/image/upload/v1676652372/image1_hge4c3.jpg" },
    { url: "https://res.cloudinary.com/dlbenbmke/image/upload/v1676652372/image2_m4d3v0.jpg" },
    { url: "https://res.cloudinary.com/dlbenbmke/image/upload/v1676652375/image3_niftz9.png"},
  ];


  return ( <div className = 'row' data-aos="fade-down">
    <div className = 'col' >
    <Carousel autoPlay={true}
    interval={4000}
    controls={false}
    indicators={false}
    infiniteLoop={true}>
      {images.map((image) => (
        <div key={image.url}>
          <img src={image.url} alt=""  />
        </div>
      ))}
    </Carousel>
    </div>
    </div>
  );
}








 


export default Slider;
