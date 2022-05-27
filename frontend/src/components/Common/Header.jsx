import React from 'react'
import mainbanner from "../../assets/img/background.png";
import logo from "../../assets/img/icon.png";
const Header = () => {
  return (
    <div> 
        <header>
            <div class="bg">
                <img src={mainbanner} alt=""/>
                <div class="logo">
                    <img src={logo} alt=""/>
                </div>
                <div class="text">
                    <p>Good Food is The <br/>Foundation of <br/> <span>Genuine Happiness</span></p>
                </div>
            </div>
        </header>
      
    </div>
  )
};

export default Header;
