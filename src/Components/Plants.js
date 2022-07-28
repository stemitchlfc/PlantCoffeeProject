import React from "react";


const Plants = ({ plants }) => {

  return (
    <div>
      
      {plants.map((plant) => (
        <div className="plant-preview" key={plant.id}>
          <h2>{plant.name}</h2>
          <img src={plant.image}/>
          <h4>{plant.description}</h4>
          {/* <h4>{plant.tag}</h4> */}
          <h2>{plant.price}</h2>
        </div>
      ))}
    </div>
  );
}

export default Plants;