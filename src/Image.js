import React from "react";
import pic from "../src/images/pic.jpg";
import "./Index.css"
export default function Image() {
  return (
    <div className="image">
      <img src={pic} className="pic" alt="pic" />
    </div>
  );
}
