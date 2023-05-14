import React from "react";
import "../design/navbar.css"
import {AiOutlineHeart,AiOutlineShoppingCart,AiOutlineSearch} from "react-icons/ai";
function Navbar(){
    return(
        <div>
            <div className="nav-container" id="nav-container-id">
                <div className="nav-name" id="nav-name-id">Funiro.</div>
                <div className="nav-pro" id="nav-pro-id">
                    <select>
                        <option selected disabled>Products</option>
                    </select>
                </div>
                <div className="nav-room" id="nav-room-id">
                <select>
                        <option selected disabled>Rooms</option>
                    </select>
                </div>
                <div className="nav-contact" id="nav-contact-id">Contact Us</div>
                <div className="nav-search" id="nav-search-id">
                    <div className="nav-search-sub">
                        <div className="nav-search-sub-icon"><AiOutlineSearch/></div>
                        <input type="text" placeholder="Search for minimalist chair"/>
                    </div>
                </div>
                <div className="nav-fav" id="nav-fav-id">
                <AiOutlineHeart/>
                </div>
                <div className="nav-cart" id="nav-cart-id">
                    <AiOutlineShoppingCart/>
                    </div>  
                <div className="nav-img" id="nav-img-id"></div>
            </div>
        </div>
    );
}
export default Navbar