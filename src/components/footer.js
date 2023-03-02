import React from "react";
import "../App.css";
import {FaGithub } from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
export default function Footer() {
    return (
        <div class="container-2" >
          <div >
            <a class="icon" href="https://github.com/priyanka-777" ><FaGithub/></a>
            <a class="icon" href="https://www.instagram.com/_sai_priyaaa_/" ><FaInstagram/></a>
            <a class="icon" href="https://www.linkedin.com/in/inagadapu-priyanka/" ><FaLinkedin/></a>
            <a class="icon" href="#" ><FaFacebookF/></a>
            </div>
      </div>
    )
}