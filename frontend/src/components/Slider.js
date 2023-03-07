import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Slider() {
  AOS.init();
  const images = [
    { url: "https://res.cloudinary.com/dlbenbmke/image/upload/v1676652372/image1_hge4c3.jpg" },
    { url: "https://res.cloudinary.com/dlbenbmke/image/upload/w_712,h_400/v1677532787/priscilla-du-preez-XkKCui44iM0-unsplash_dcuczx.jpg" },
    { url: "https://res.cloudinary.com/dlbenbmke/image/upload/w_712,h_400/v1677532753/element5-digital-jCIMcOpFHig-unsplash_wb8o9o.jpg"},
  ];


  return ( <div className = 'row mt-5' data-aos="fade-down">
    <div className = 'col' >
    <Carousel autoPlay={true}
    interval={4000}
    controls={false}
    
    infiniteLoop={true}>
      {images.map((image) => (
        <div key={image.url}>
          <img src={image.url} alt="sliderimg"  />
        </div>
      ))}
    </Carousel>
    </div>
    </div>
  );
}








 


export default Slider;
