import React, { useRef } from 'react';
import About from './container/About';
import Skill from './container/Skill';
import './App.css';

function App() {

  const aboutRef = useRef(); 
  const skillRef = useRef();


  // 페이지 스크롤을 위한 REF 함수
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  

  return (
    <div className='App'>

      {/* 네비바 start */}
      <div className='black-nav'>
          {/* 네비바 버튼 start */}
        <div style={{float : 'right'}}>
        <button className='nav-button' onClick={() => scrollToRef(aboutRef)}>About Me</button>
        <button className='nav-button' onClick={() => scrollToRef(skillRef)}>Skills</button>
        <button className='nav-button' onClick={() => scrollToRef(skillRef)}>Career</button>
        <button className='nav-button' onClick={() => scrollToRef(skillRef)}>Project</button>
        <button className='nav-button' onClick={() => scrollToRef(skillRef)}>Education</button>
        </div>
        {/* 네비바 버튼 end */}
      </div>
      {/* 네비바 end */}
      
      {/* About 페이지 start */}
      <div style={{paddingTop : '9vh'}}  ref={aboutRef}>
        <About/>
      </div>
      {/* About 페이지 end */}

      {/* Skills 페이지 start */}
      <div style={{paddingTop : '9vh'}}  ref={skillRef}>
      <Skill/>
      </div>
      {/* Skills 페이지 end */}
    </div>
  );
}

export default App;
  