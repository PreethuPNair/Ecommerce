import React, { useState, useEffect } from 'react';
import '../design/ProductList.css';
import productImage1 from '../assets/dark-img1.jpg';
import productImage2 from '../assets/dark-img2.jpg';
import productImage3 from '../assets/dark-img4.jpg';
import chair2 from '../assets/chair2.jpg';
import frame1 from '../assets/frame1.jpg';
import frame2 from '../assets/frame9.jpg';
import frame3 from '../assets/frame3.jpg';
import frame4 from '../assets/frame4.jpg';
import frame5 from '../assets/frame5.jpg';
import frame6 from '../assets/frame6.jpg';
import frame7 from '../assets/frame10.jpg';

import { RiShoppingCartLine } from 'react-icons/ri';
import Navbar from './navbar';
import Footbar from './footbar';

const ProductGrid = ({img,name,price}) => {
  return (
    <>
      {/* Product container */}
      <div className='product-container'>
        <div className='product-image'>
          <img src={`${ img }`} alt='Product' />
        </div>
        <div className='product-details'>
          <h3>{ name}</h3>
          <p>Price: { price}</p>
          <div className='product-overlay'>
            <span className='add-to-cart-text'>Add to Cart</span>
            <RiShoppingCartLine className='cart-icon' />
          </div>
        </div>
      </div>
      {/* Repeat the above product container for each product */}
      {/* ... */}
    </>
  );
};

const ProductList = () => {
  const [featuredImage, setFeaturedImage] = useState(productImage1);

  useEffect(() => {
    const images = [productImage1, productImage2, productImage3];
    let index = 0;

    const intervalId = setInterval(() => {
      index = (index + 1) % images.length;
      setFeaturedImage(images[index]);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
    <div className='furniture-products'>
    
      {/* First section with full image and "Featured Furnitures" heading */}
      <div className='featured-section'>
      <div style={{position:"absolute", opacity:"0.8"}}>
        <Navbar/>

        </div>
        <div
          className='featured-image'
          style={{ backgroundImage: `url(${featuredImage})` }}
        />
        <div className='featured-text'>
          <h2>
            <span>Enjoy Our</span>
            <br />
            <span>Featured Furnitures</span>
          </h2>
          <button>Explore Now</button>
        </div>
      </div>

      {/* Second section with "Handcrafted with spirit in wood" heading and product categories */}
      <div className='handcrafted-section'>
        <div className='handcrafted-heading'>
          <h2>
            <span>Handcrafted with</span>
            <br />
            <span>Spirit in Wood</span>
          </h2>
        </div>
        <div className='product-categories'>
          <button>Desk</button>
          <button>Chair</button>
          <button>Sofa</button>
          <button>Tables</button>
          <button>Work Space</button>
        </div>
      </div>
      <div className='product-grid'>
        <ProductGrid img={productImage1} name="Table" price="$ 80.50" />
        <ProductGrid img={frame1} name="Cubboard" price="$ 150.00"/>
        <ProductGrid img={chair2} name="Chair" price="$ 50.00"/>
        <ProductGrid img={frame3} name="Flower pot" price="$ 70.00"/>
        <ProductGrid img={frame4} name="Sofa" price="$ 250.00"/>
        <ProductGrid img={frame6} name="Bed" price="$ 300.00"/>
        <ProductGrid img={frame7} name="Sofa" price="$ 20.00"/>
        <ProductGrid img={frame2} name="Work space" price="$ 300.00"/>
      </div>

      {/* "Show More" button */}
      <div className='show-more'>
        <button>Show More</button>
      </div>
      </div>
        <div style={{width:"70%", height:"0.5px",backgroundColor : "grey" , marginTop:"17px", marginLeft:"150px"}}></div>
        <div>
    </div>
    <Footbar/>
    </div>

  );
};

export default ProductList;
