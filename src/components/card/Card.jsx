import React from "react";

const Card = (props) => {
  const {id, name, image} = props.char;
  console.log(name);

  return (
    <div className="card w-25 g-0 m-2">
      <img src={image} className="card-img-top" alt={name}/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  )
}

export default Card;