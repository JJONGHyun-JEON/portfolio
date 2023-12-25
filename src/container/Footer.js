import React from 'react';
import '../App.css'

function Footer() {
  //현재 년도
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();

  return (
    <div>
      <div className='Footer-div'>
        <div className='Footer-icon-div'>
          <a className="emoji-github" href="https://github.com/JJONGHyun-JEON" target="_blank" rel="noopener noreferrer"></a>
          <a className='emoji-tistory' href="https://jjong-page.tistory.com/" target="_blank" rel="noopener noreferrer"></a>
          <a className='emoji-instagram' href="https://www.instagram.com/_jjonghyn/" target="_blank" rel="noopener noreferrer"></a>
        </div>
        <div> ©{currentYear} JongHyun Portfolio</div>
      </div>
    </div>
  );
}

export default Footer;
