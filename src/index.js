import React from 'react'
import ReactDOM from 'react-dom'
import './Styles.css';
import Photo from './Photos/Photo.jpg';

const Name = 'Youseef Tareq';
const Department = 'Front-End'

const Header = () => {
  return (
    <header class='header'>
    <nav class="header-right">
      {/* <label class="Title">Health Scanner</label> */}
      {/* <img class='profilePhoto' src={Photo} width="45" height="45"></img> */}
      <a href="#Home">Home</a>
      <a href="#Services">Services</a>
      <a href="#Portfolio">Portfolio</a>
      <a href="#Details">Details</a>
    </nav>
    </header>
  );
};

const Body = () => {
  return (
    <div class='IntroductoryText'>
      <span id='firstSpan'> Hello, <br></br> My Name is: {Name} </span>
      <br></br><br></br>
      <span id='secondSpan'>
        i have worked as a web {Department} developer for over three <br></br>
        years, with extensive experience in designing and<br></br>
        developing attractive and responsive user interfaces using<br></br>
        HTML, CSS, JavaScript, and popular frameworks such as<br></br>
        Bootstrap, jQuery, and React.
      </span>
    </div>
  );
};



const app = (
  <div>
  {<Header/>}
  {<Body/>}
  </div>
)

ReactDOM.render(app, document.getElementById('root'))