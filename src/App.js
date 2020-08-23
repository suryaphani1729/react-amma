import React from "react";
import "./style.css";

export default function App() {
  const ar = ["అ","ఆ","ఇ","ఈ","ఉ","ఊ"];
  return (
    <div className="parentDiv">
       {
         ar.map((item,index) => {
           return <div key={index} className='letter'>
           <span className='chars'>{item}</span>
           </div>;
         })
       }
    </div>
  );
}
