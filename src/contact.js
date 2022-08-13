import React from "react";
import { Instagram } from "react-bootstrap-icons";
import { GeoAltFill } from "react-bootstrap-icons";
import { TelephoneFill } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";
export default function Contact() {
  return (
    <div>
      <h5 style={{ borderBottom: "2px solid white" }}><PersonFill/> CONTACT</h5>

      <span>
        <p>
          <Instagram /> Manprit_312
        </p>
        <p>
        
          <GeoAltFill /> Jalandhar,Nangal Shama
        </p>
        <p>
        
          <TelephoneFill /> +918264874761
        </p>
        <p>
          
          <Linkedin /> Manprit Kaur
        </p>
        <p>
          <Github /> Manprit312
        </p>
      </span>
    </div>
  );
}
