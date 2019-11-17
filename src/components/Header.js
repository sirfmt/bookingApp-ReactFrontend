import React from "react";
//import {Router} from "react-router";
import  '../nav.css';

export class Header extends React.Component {

    render(){
        return(
            <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#register">Schedule Appointment</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            </div>
        );

    }
}
export default Header;
