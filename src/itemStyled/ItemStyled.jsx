import React from "react";

const ItemStyled = ({ image, name }) => {
  return (
    <div>
      <img src={image} alt="image" style={{ width: "200px" }} />
      <h3>Name: {name}</h3>
    </div>
  );
};

export default ItemStyled;
