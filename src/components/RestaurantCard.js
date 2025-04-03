const RestaurantCard = ({resData}) => {
    return (
        <div className="m-6 p6 w-[200px] my-6 bg-gray-100 rounded-lg hover:bg-gray-400" >

            <img 
            className="rounded-2xl my-2 px-2"
            alt="res-logo"
            src={resData.info.image.url}
            />
            <h3 className="font-bold py-2 text-lg">{resData.info.name}</h3>
            <h4>{resData.info.cuisine.map(c => c.name).join(", ")}</h4>
            <h4>Rating: {resData.info.rating.aggregate_rating}</h4>
            <h4>38 mins ETA</h4>
        </div>
    );
};

export default RestaurantCard;