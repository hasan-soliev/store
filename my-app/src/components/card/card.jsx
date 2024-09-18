import React from "react";
import './card.css'
export default function Card({product,addToCart}) {
  const {name,price,description,id,model,img} = product
  return (
    <div className="card">
    <img src={img} className="img" />
    <p className="text name">Company: {name}</p>
    <p className="text model">Model :{model}</p>
      </div>
  );
}
