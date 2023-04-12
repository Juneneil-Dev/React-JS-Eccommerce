import pic1 from './pic1.jpg';
import './App.css';

function Section2() {
  return (
    <div className="Section2">

    <div className="slideshow-container">

    <div className="mySlides fade">
      <div className="numbertext">1 / 3</div>
      <img src={pic1} className="App-cosmos-logo" alt="logo" />
      <div className="text">Caption Text</div>
    </div>

    <div className="mySlides fade">
      <div className="numbertext">2 / 3</div>
      <img src={pic1} className="App-cosmos-logo" alt="logo" />
      <div className="text">Caption Two</div>
    </div>

    <div className="mySlides fade">
      <div className="numbertext">3 / 3</div>
      <img src={pic1} className="App-cosmos-logo" alt="logo" />
      <div className="text">Caption Three</div>
    </div>

    </div>

    <div>
      <span className="dot"></span> 
      <span className="dot"></span> 
      <span className="dot"></span> 
    </div>
      
    </div>
  );
}

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000);
// }

export default Section2;
