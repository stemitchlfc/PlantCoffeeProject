import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import Plants from './Plants'

const Shop = () => {

  const {data: plants, isLoading, error} = useFetch('http://localhost:8080/plant')

  // useEffect(() => {
  //   fetch('http://localhost:8080/plant')
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then((data) => {
  //       console.log(data)
  //       setPlants(data)
  //     })
  // }, [])

  return (  
    <div>
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {plants && <Plants plants={plants} title="Plant Items" />}
 
    </div>
  );
}
 
export default Shop;