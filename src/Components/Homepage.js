import React from "react";

import { Link } from "react-router-dom";

const Homepage = () => {
  return ( 
    <div>
      <Link to="/shop"className="nav-shop">Shop</Link>
      <h1>Recipes</h1>
      <h1>Plant Care</h1>
    </div>
   );
}
 
export default Homepage;