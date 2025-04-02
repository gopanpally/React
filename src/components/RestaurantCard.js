const RestaurantCard = ({resData}) => {
    return (
        <div className="res-card" style= {{backgroundColor:"fofofo"}}>

            <img 
            className="res-logo"
            alt="res-logo"
            src={resData.info.image.url}
            />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisine.map(c => c.name).join(", ")}</h4>
            <h4>Rating: {resData.info.rating.aggregate_rating}</h4>
            <h4>38 mins ETA</h4>
        </div>
    );
};

export default RestaurantCard;