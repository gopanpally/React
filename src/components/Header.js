import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="flex justify-between bg-pink-50 shadow-2xl m-2">
            <div className="logo-container">
                <img className="w-40" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                       <Link to="/"> Home</Link>
                        </li>
                    <li className="px-4">
                        <Link to="/about"> About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to= "/contact">Contact Us</Link>
                        </li>
                    <li className="px-4">Cart</li>
                </ul>

            </div>
        </div>
    );
};

export default Header;
