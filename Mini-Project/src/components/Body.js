import restaurantsArr from "../utils/Mockdata";
import { Restaurantscard } from "./Restaurantscard";
import { useState } from "react";

const Body = () => {
  const [filteredArray, setFilteredArray] = useState(restaurantsArr);

  return (
    <div>
      <button
        onClick={() => {
          const NewArry = restaurantsArr.filter((elem) => {
            if (elem.avgRating > 4.3) {
              return true;
            } else {
              return false;
            }
          });
          setFilteredArray(NewArry);
        }}
      >
        FILTERED ARRAY{" "}
      </button>

      <div className="rest-container">
        {filteredArray.map((elem) => {
          return <Restaurantscard resDetails={elem} key={elem.id} />;
        })}
      </div>
    </div>
  );
};
export default Body;
