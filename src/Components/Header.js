import React from 'react';
import logo from '../assets/logo.png'

const Header = ({currentUser}) => {
  return (

    <div id="header" className="nav-bar">
      {currentUser.name !== "" ? <h1>Welcome {currentUser.name}</h1> : ""}
        <img src={logo} class="center"/>
    </div>
  );
}

export default Header;
