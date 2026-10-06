import { imgURL } from "../utils/Constants";

export const Restaurantscard = ({ resDetails }) => {
  // const {
  //   id,
  //   resName,
  //   cuisine,
  //   avgRating,
  //   delieveryTime,
  //   costForTwo,
  //   imgId,
  //   location,
  // } = resDetails;
  return (
    <div className="rest-card">
      <img className="rest-logo" src={imgURL + resDetails.info.imgId} alt="rest-logo" />
      <h1>{resDetails.info.name}</h1>
      <h4>{resDetails.info.cuisine}</h4>

      <h2> Rating ⭐ {resDetails.info.avgRating} Stars</h2>
      <h3>
        {resDetails.info.sla.delieveryTime} mins | ₹{resDetails.info.costForTwo} for two
      </h3>
      <h5>{resDetails.info.location}</h5>
    </div>
  );
};
