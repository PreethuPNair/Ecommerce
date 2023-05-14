import React, { useState } from "react";
import "../design/productPage.css"
import { StarRating } from "./starRating";
import { AiOutlineHeart, AiOutlinePlus, AiOutlineArrowRight } from "react-icons/ai";
import Navbar from "./navbar";
import Footbar from "./footbar";

function Product() {
    return (
        <div>
            <Navbar/>
            <div className="product1">

                <div className="product-nav-head">
                    <div className="pro-des">Product / <a style={{ color: "rgb(121, 113, 113)" }}>Sofas</a></div>
                    <div className="sort">
                        <select style={{backgroundColor:"white"}}>
                            <option selected disabled>Sort</option>
                        </select>
                    </div>
                    <div className="filter">
                        <select style={{backgroundColor:"white"}}>
                            <option selected disabled>Filter</option>
                        </select>
                    </div>
                </div>
                <div className="sofa"><b>Sofa</b></div>
                <div className="product-second-head">

                    <div className="product-images">
                        <div className="product-big-image"></div>
                        <div className="product-small-images">
                            <div className="product-small-image"></div>
                            <div className="product-small-image"></div>
                            <div className="product-small-image"></div>
                            <div className="product-small-image"></div>
                        </div>
                    </div>

                    <div className="product-info">
                        <div className="product-name"><b>Sofa</b></div>
                        <div className="product-price"><b>$520</b></div>
                        <div className="star-rating" style={{marginLeft:"-262px"}}><StarRating /></div>
                        <div className="product-description">
                            As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all we have. Then we lose family over time. What else could rust the heart more over time? Blackgold.
                        </div>
                        <div className="product-color"><b>Color</b></div>
                        <div className="color-tickbox">
                            <div className="color-tick"></div>
                            <div className="color-tick"></div>
                            <div className="color-tick"></div>

                        </div>

                        <div className="product-selection">
                            <div className="add-to-cart"><button>Add to cart</button></div>
                            <div className="love-icon"><AiOutlineHeart style={{ height: "25px", width: "25px" }} /></div>
                        </div>
                        <div className="line"></div>
                        <div className="product-features-heading">
                            <p className="product-feature-list1"><b>Features</b></p>
                            <p className="product-feature-list"><b>-</b> One type of service</p>
                            <p className="product-feature-list"><b>-</b> One type of service</p>
                            <p className="product-feature-list"><b>-</b> One type of service</p>
                        </div>
                        <div className="line"></div>
                        <div className="feature-list">
                            <div className="descrpition">Product care</div>
                            <div className="icon"><AiOutlinePlus /></div>
                        </div>
                        <div className="feature-list">
                            <div className="descrpition" style={{ marginTop: "-15px" }}>Shipping</div>
                            <div className="icon" style={{ marginTop: "-11px", marginLeft: "464.3px" }}><AiOutlinePlus /></div>
                        </div>
                        <div className="feature-list">
                            <div className="descrpition" style={{ marginTop: "-11px" }}>Return</div>
                            <div className="icon" style={{ marginTop: "-8px", marginLeft: "480px" }}><AiOutlinePlus /></div>
                        </div>
                    </div>
                </div>

            </div>

            {/* /////////////// */}

            <div className="product2">
                <div className="product2-main-heading">Product Features</div>
                <div className="product2-description">
                    Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out.
                </div>
                <div className="product2-sub-heading">
                    <div className="material">Material</div>
                    <div className="function">Function</div>
                    <div className="warranty">Warranty</div>
                    <div className="instructions">Instructions</div>
                </div>
                <div className="line2"></div>
                <div className="line2-line"></div>
                <div className="product2-last">
                    <div className="product2-last1">
                        <div className="product2-last1-heading">Product Characteristic</div>
                        <div className="product2-last1-description">
                            The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it?
                        </div>

                    </div>
                    <div className="product2-last2-img"></div>

                </div>

            </div>

            {/* ////////////////////// */}


            <div className="product3">
                <div className="product3-main-heading">Reviews</div>
                <div className="absolute">See all</div>
                <div className="absolute-icon"><AiOutlineArrowRight /></div>
                <div className="line31"></div>

                <div className="product3-profile-main">
                    <div className="product3-profile">
                        <div className="product3-img1"></div>
                        <div className="product3-info">
                            <div className="name">Alexa Liras</div>
                            <div className="date">03 March 2022</div>

                        </div>
                    </div>
                    <div className="product3-starRating"></div>
                    <div className="product3-description">If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.</div>


                </div>
                <div className="line32"></div>
                <div className="product3-profile-main">
                    <div className="product3-profile">
                        <div className="product3-img2"></div>
                        <div className="product3-info">
                            <div className="name">Laurent Perrier</div>
                            <div className="date">04 May 2022</div>

                        </div>
                    </div>
                    <div className="product3-starRating33"></div>
                    <div className="product3-description">
                        If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.
                    </div>

                </div>
                <div className="line33"></div>
                <div className="product3-profile">
                    <div className="product3-profile" style={{ marginLeft: "0px" }}>
                        <div className="product3-img3"></div>
                        <div className="product3-info" style={{ width: "50px", }}>
                            <div className="name" style={{ position: "absolute" }}>Michael Lavi</div>
                            <div className="date " style={{ position: "absolute", marginTop: "22px" }}>04 April 2022</div>

                        </div>
                    </div>
                    <div className="product3-starRating" style={{ marginTop: "73px", marginLeft: "-115px" }}></div>
                    <div className="product3-description" style={{ marginTop: "120px", marginLeft: "-96px" }}>If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.</div>


                </div>

            </div>


            {/* ///////////////////////////// */}


            <div className="product4">
                <div className="product4-main-heading">Recently viewed</div>
                <div className="product4-absolute">See all</div>
                <div className="product4-main-absolute-icon"><AiOutlineArrowRight /></div>
                <div className="line4"></div>
                <div className="product4-img">
                    <div className="product4-img-list">
                        <div className="product4-img-list-image"></div>
                        <div className="product4-img-list-detail">Detail</div>
                        <div className="product4-img-list-sofa">Sofa</div>
                        <div className="product4-img-list-price">$520</div>
                        <div className="product4-img-list-color">
                            <div className="product4-img-list-color1"></div>
                            <div className="product4-img-list-color1"></div>
                            <div className="product4-img-list-color1"></div>
                        </div>
                    </div>
                    <div className="product4-img-list">
                        <div className="product4-img-list-image"></div>
                        <div className="product4-img-list-detail">Detail</div>
                        <div className="product4-img-list-sofa">Sofa</div>
                        <div className="product4-img-list-price">$520</div>
                        <div className="product4-img-list-color">
                            <div className="product4-img-list-color1"></div>
                            <div className="product4-img-list-color1"></div>
                            <div className="product4-img-list-color1"></div>
                        </div>
                    </div>
                    <div className="product4-img-list">
                        <div className="product4-img-list-image"></div>
                        <div className="product4-img-list-detail">Detail</div>
                        <div className="product4-img-list-sofa">Sofa</div>
                        <div className="product4-img-list-price">$520</div>
                        <div className="product4-img-list-color">
                            <div className="product4-img-list-color1"></div>
                            <div className="product4-img-list-color1"></div>
                            <div className="product4-img-list-color1"></div>
                        </div>
                    </div>
                    <div className="product4-img-list">
                        <div className="product4-img-list-image"></div>
                        <div className="product4-img-list-detail">Detail</div>
                        <div className="product4-img-list-sofa">Sofa</div>
                        <div className="product4-img-list-price">$520</div>
                        <div className="product4-img-list-color">
                            <div className="product4-img-list-color1"></div>
                            <div className="product4-img-list-color1"></div>
                            <div className="product4-img-list-color1"></div>
                        </div>
                    </div>


                </div>
                <div className="line5"></div>


            </div>
            <div style={{width:"80%", height:"0.5px",backgroundColor : "grey" , marginTop:"25px", marginLeft:"100px"}}></div>
            <Footbar/>

        </div>
    )
}
export default Product