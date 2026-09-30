import restaurantsArr from "../utils/Mockdata";
import { Restaurantscard } from "./Restaurantscard";

const Body = () => {
  return (
    <div className="rest-container">
      {restaurantsArr.map((elem) => {
        return <Restaurantscard resDetails={elem} key={elem.id} />;
      })}
    </div>
  );
};
export default Body;
