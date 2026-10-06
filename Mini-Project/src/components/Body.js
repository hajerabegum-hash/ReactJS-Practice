// import restaurantsArr from "../utils/Mockdata";
import { Restaurantscard } from "./Restaurantscard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { swiggyRestURL } from "../utils/Constants";

const Body = () => {
  const [restaurantArr, setRestaurantsArray] = useState(null);
  

  async function fetchingRestArray() {
    const response = await fetch(swiggyRestURL);
    const data = await response.json();


    setRestaurantsArray(data?.data?.cards?.cards?.gridelements?.);
    console.log("datachecking");
  }

  useEffect(()=>{
    console.log("i m inside a component");
    fetchingRestArray()
    
  },[])

  if (restaurantArr==null){
    return <div><Shimmer/></div>
  }
  return (
    <div>
    

      <div className="rest-container">
        {restaurantArr.map((elem) => {
          return <Restaurantscard resDetails={elem} key={elem.info.id} />;
        })}
      </div>
    </div>
  );
};
export default Body;
