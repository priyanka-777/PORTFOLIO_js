import React from "react";
import pic from "./priya.jpg";
import "../App.css"
import { FaLinkedin } from "react-icons/fa";
import {FaGoogle } from "react-icons/fa";
export default function Header() {
    return (
        <div>
           <img src={pic}  alt ="pic" className="nav--icon"></img>
           <h1 id="head">Priyanka Inagadapu</h1>
           <h4 id="head2">Frontend Developer</h4>
           <div class="button">
            
            <button id="btn-1"> <a  href="o180307@rguktong.ac.in"><FaGoogle/><b class="title">mail</b></a></button>
            <button id="btn-2"><a href="https://www.linkedin.com/in/inagadapu-priyanka/" >
             <FaLinkedin /><b class="title">Linkedin</b></a></button>
           </div>
      </div>
    )
}