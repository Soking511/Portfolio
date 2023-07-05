import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Styles.css';
import Photo from './Photos/Photo.jpg';

const Name = 'Youseef Tareq';
const Department = 'Front-End';

const Header = () => {
  const [selectedId, setSelectedId] = useState('Home');
  const [hoveredId, setHoveredId] = useState('');

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId('');
  };

  const handleClick = (id) => {
    setSelectedId(id);
  };

  return (
    <header className="header" onMouseLeave={handleMouseLeave}>
      <nav className="header-right">
        <a href="#Home"
          id={selectedId === 'Home' ? 'Selected' : hoveredId === 'Home' ? 'Hovered' : ''}
          onMouseEnter={() => handleMouseEnter('Home')}
          onClick={() => handleClick('Home')}
        >
          Home
        </a>

        <a
          href="#Services"
          id={selectedId === 'Services' ? 'Selected' : hoveredId === 'Services' ? 'Hovered' : ''}
          onMouseEnter={() => handleMouseEnter('Services')}
          onClick={() => handleClick('Services')}
        >
          Services
        </a>

        <a
          href="#Portfolio"
          id={selectedId === 'Portfolio' ? 'Selected' : hoveredId === 'Portfolio' ? 'Hovered' : ''}
          onMouseEnter={() => handleMouseEnter('Portfolio')}
          onClick={() => handleClick('Portfolio')}
        >
          Portfolio
        </a>

        <a
          href="#Details"
          id={selectedId === 'Details' ? 'Selected' : hoveredId === 'Details' ? 'Hovered' : ''}
          onMouseEnter={() => handleMouseEnter('Details')}
          onClick={() => handleClick('Details')}
        >
          Details
        </a>
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
      <svg class='sketchOne' width="451" height="819" viewBox="0 0 451 819" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.499939 0H450.536V440.5V819C401.615 801.327 315.017 760.911 246.501 703.374C173.515 642.082 121.048 561.359 156.502 468C171.502 428.5 244.775 277.836 115.966 190.5C-43.3194 82.5 55 74 0.499939 0Z" fill="#008C0D"/>
      </svg>

      <div class='Services'>
        
      </div>

      <div class='Portfolio'>

      </div>

      <div class='Details'>

      </div>
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