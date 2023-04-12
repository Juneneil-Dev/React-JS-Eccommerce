import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <div className="Header">
      <div className="topnav" id="myTopnav">
        <a href="Home.js" className="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#about">Login</a>
        <a href="#about">My Cart</a>
        <input type="text" className="search_bar" placeholder="Search"></input>
        <a href="javascript:void(0);" className="icon" onclick="myFunction()">
            <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
}


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
export default Header;
