import React,{useEffect} from 'react';
import '../../App.css';
import './HeroSection.css';

function HeroSection() {
  
    
        useEffect(() => {
            var slideIndex = 0;
    showSlides();
    
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 4000); // Change image every 2 seconds
    }
        }, [])
        return (
            <div>
            {/* Slideshow container */}
            {/* <div className="slideshow-container"> */}
              {/* Full-width images with number and caption text */}
              <div className="mySlides fade">
                
                <img  className="image" src="./images/vetement4.png"  />
               
              </div>
              <div className="mySlides fade">
                
                <img className="image" src="./images/1.jpg"  />
               
              </div>
              
              <div className="mySlides fade">
                
                <img className="image" src="./images/electro1.jpg"  />
               
              </div>
              <div className="mySlides fade">
                
                <img className="image" src="./images/info1.jpg" />
                
              </div>
              <div className="mySlides fade">
                
                <img className="image" src="./images/voiture1.jpg" />
                
              </div>
              {/* Next and previous buttons */}
              <a className="prev" onclick="plusSlides(-1)">❮</a>
              <a className="next" onclick="plusSlides(1)">❯</a>
            {/* </div> */}
            
            {/* The dots/circles */}
            {/* <div style={{textAlign: 'center'}}>
              <span className="dot" onclick="currentSlide(1)" />
              <span className="dot" onclick="currentSlide(2)" />
              <span className="dot" onclick="currentSlide(3)" />
              <span className="dot" onclick="currentSlide(2)" />
              <span className="dot" onclick="currentSlide(3)" />
            </div> */}
            </div>
            
        
        );
    }
    
  
export default HeroSection;