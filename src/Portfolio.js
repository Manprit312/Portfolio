import React from "react";
import Portfolio from "./data";
import './Index.css';
import { Card } from "react-bootstrap";
export default function Portfolios() {
  return (<div  className="Portfoliodata">
    
    <Card className="Weather">
      
      <h6>{Portfolio[0].title} </h6>
      <p>{Portfolio[0].desc}</p>
      <a href={Portfolio[0].link}><button className="Apibut">CLICK HERE</button></a>
    </Card>
    <Card className="Weather">
      
      <h6>{Portfolio[1].title} </h6>
      <p>{Portfolio[1].desc}</p>
      <a href={Portfolio[1].link}><button className="Apibut">CLICK HERE</button></a>
    </Card>
    <Card className="Weather">
      
      <h6>{Portfolio[2].title} </h6>
      <p>{Portfolio[2].desc}</p>
      <a href={Portfolio[2].link}><button className="Apibut">CLICK HERE</button></a>
    </Card>
    <Card className="Weather">
      
      <h6>{Portfolio[3].title} </h6>
      <p>{Portfolio[3].desc}</p>
      <a href={Portfolio[3].link}><button className="Apibut">CLICK HERE</button></a>
    </Card>
    <Card className="Weather">
      
      <h6>{Portfolio[4].title} </h6>
      <p>{Portfolio[4].desc}</p>
      <a href={Portfolio[4].link}><button className="Apibut">CLICK HERE</button></a>
    </Card>
    </div>
  );
}
