import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listofRestaurants , setListOfRestaurants] = useState(resList);

    useEffect(()=> {
        fetchData();
    }, []);
    const fetchData = async () => {
            const data = await fetch("https://corsproxy.io/?url=https://www.zomato.com/webroutes/search/home");
        
            const json1 = await data.json();
            console.log(json1);

        };
    return (
        <div className="body">
            <div className="filter"> 
                <button className ="filter-btn" 
                    onClick ={() => {
                        const filteredList = listofRestaurants.filter(
                            (res) => res.info.rating.aggregate_rating>=4
                        );
                        setListOfRestaurants(filteredList);
                    }}
                    >
                    Top Rated Restaurants
                    </button>
                    </div>
            <div className="res-container">
               {
                listofRestaurants.map((restaurant) => (
                    <RestaurantCard 
                    key={restaurant.info.resId}
                    resData={restaurant}/>
                ))
               }

            </div>
        </div>

    );
};

export default Body;