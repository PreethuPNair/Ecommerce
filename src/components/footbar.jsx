import React from "react";
import "../design/footbar.css"
import { AiOutlineHeatMap, AiFillPhone, AiOutlineSend } from "react-icons/ai";


function Footbar() {
    return (
        <div className="containerfoot">
            <div className="f-section">
                <div className="f-section1">Funiro.</div>
                <div className="f-section7">worldwide furniture section store since 2020. we sell over 1000+ branded products on our website</div>
                <div className="f-section2"><AiOutlineHeatMap /></div>
                <div className="f-section3">Sawojajar Malag , indonesia</div>
                <div className="f-section4"><AiFillPhone /></div>
                <div className="f-section5">+34567890</div>
                <div className="f-section6">ww.jhbubv.com</div>
            </div>
            <div className="s-section">
                <div className="s-section1">Menu</div>
                <div className="s-section2">Products</div>
                <div className="s-section3">Rooms</div>
                <div className="s-section4">Inspirations</div>
                <div className="s-section5">About Us</div>
                <div className="s-section6">Terms & policy</div>
            </div>
            <div className="t-section">
                <div className="t-section1">Account</div>
                <div className="t-section2">My account</div>
                <div className="t-section3">Checkout</div>
                <div className="t-section4">My cart</div>
                <div className="t-section5">My catalog</div>
            </div>
            <div className="fo-section">
                <div className="fo-section1">Stay Connected</div>
                <div className="fo-section2">Facebook</div>
                <div className="fo-section3">Instagram</div>
                <div className="fo-section4">Twitter</div>
            </div>
            <div className="fi-section">
                <div className="fi-section1">Stay Updated</div>
                <div className="fi-section2"><input type="text" placeholder="Enter your email" /></div>
                <div className="fi-section3"><AiOutlineSend style={{ marginLeft: "7px", height: "65px", width: "20px", marginTop: "-14.5px" }} /></div>
            </div>
        </div>
    );
}
export default Footbar