import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    useEffect( () => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.406498&lng=78.47724389999999&str=hyderabad&trackingId=d0de832d-bb0a-75dc-dd39-d9a7f6f8b28a&submitAction=ENTER&queryUniqueId=196a0cf2-7c60-2c43-7db6-500e2dc9f6c1"
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data)
    };
    if(resInfo === null) return <Shimmer />;
    const {name, cuisines , costForTwoMessage } = resInfo?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[0]?.card?.card?.info;

    // const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    // console.log(itemCards);

  return  (
    <div>
        <h1>{name}</h1>
        <h2>{cuisines.join(",")}</h2>
        <h2>{costForTwoMessage}</h2>
        <h1>RestaurantMenu</h1>
        <ul>
            <li>Burgers</li>
            <li>Pizza</li>
            <li>Biryani</li>
        </ul>
      
    </div>
  )
}

export default RestaurantMenu
