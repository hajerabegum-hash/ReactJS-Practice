export const Restaurantscard = ({ resDetails }) => {
  const {
    id,
    resName,
    cuisine,
    avgRating,
    delieveryTime,
    costForTwo,
    imgId,
    location,
  } = resDetails;
  return (
    <div className="rest-card">
      <img
        className="rest-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          imgId
        }
        alt="rest-logo"
      />
      <h1>{resName}</h1>
      <h4>{cuisine}</h4>

      <h2> Rating ⭐ {avgRating} Stars</h2>
      <h3>
        {delieveryTime} mins | ₹{costForTwo} for two
      </h3>
      <h5>{location}</h5>
    </div>
  );
};
