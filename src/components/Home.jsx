import '../design/Home.css'; // import the CSS file
import furniture1 from '../assets/furniture1.jpg';
import furniture2 from '../assets/furniture2.jpg';
import furniture3 from '../assets/furniture3.jpg';
// import next from '../assets/next.png';
// import previous from '../assets/previous.png';
import bed from '../assets/bed.jpg';
import chair1 from '../assets/chair1.jpg';
import fan from '../assets/fan.jpg';
import bedroom from '../assets/bedroom.jpg';
import diningroom from '../assets/diningroom.jpg';
import workspace from '../assets/workspace.jpg';
import chair2 from '../assets/chair2.jpg';
import frame1 from '../assets/frame1.jpg';
import frame2 from '../assets/frame9.jpg';
import frame3 from '../assets/frame3.jpg';
import frame4 from '../assets/frame4.jpg';
import frame5 from '../assets/frame5.jpg';
import frame6 from '../assets/frame6.jpg';
import frame7 from '../assets/frame10.jpg';

import { SlTrophy } from 'react-icons/sl';
import { VscVerified } from 'react-icons/vsc';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdSupportAgent } from 'react-icons/md';
import Navbar from './navbar';
import Footbar from './footbar';

const Home = () => {
  return (
    <div>
      
    <div className='container'>
      <div className='container-one'>
        <div style={{position:"absolute", opacity:"0.8"}}>
        <Navbar/>

        </div>
        <div className='overlay'>
          <div className='main-text'>High-Quality Furniture Just For You</div>
          <div className='secondary-text'>
            Our furniture is made from selected and best quality materials that
            are suitable for your dream home
          </div>
          <button className='centered-button'>Shop Now</button>
        </div>
        <div className='image-container'>
          <div className='image'>
            <img src={furniture3} alt='furniture one'></img>
          </div>
        </div>
        {/* <div className='buttons-container'>
          <button className='previous-button' onClick={handlePreviousClick}>
            <img src={previous} alt='next' className='img-btn'></img>
          </button>
          <button className='next-button' onClick={handleNextClick}>
            <img src={next} alt='previous' className='img-btn'></img>
          </button>
        </div> */}
      </div>

      <div className='container-two'>
        <div className='items-container'>
          <div className='item'>
            <SlTrophy className='logo' />
            <div className='item-text'>
              <h3>High Quality</h3>
              <p>Quality materials</p>
            </div>
          </div>
          <div className='item'>
            <VscVerified className='logo' />
            <div className='item-text'>
              <h3>Warranty Protection</h3>
              <p>Over 2 Years</p>
            </div>
          </div>
          <div className='item'>
            <TbTruckDelivery className='logo' />
            <div className='item-text'>
              <h3>Free Shipping</h3>
              <p>Order over 150 $</p>
            </div>
          </div>
          <div className='item'>
            <MdSupportAgent className='logo' />
            <div className='item-text'>
              <h3>24/7 Support</h3>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
        <div className='products'>
          <h2 className='our-product-text'>Our Products</h2>
          <div class='grid-container'>
            <div class='grid-item'>
              <div className='item-part'>
                <img src={chair1} alt='image1'></img>
                <h3 className='product-list'>Syltherine</h3>
                <p className='product-list'>Stylish cafe chair</p>
                <h4 className='product-list'>$ 250.00</h4>
              </div>
            </div>
            <div class='grid-item'>
              {' '}
              <div className='item-part'>
                <img src={fan} alt='image1'></img>
                <h3 className='product-list'>Lolito</h3>
                <p className='product-list'>Luxuray big sofa</p>
                <h4 className='product-list'>$ 700.00</h4>
              </div>
            </div>
            <div class='grid-item'>
              {' '}
              <div className='item-part'>
                <img src={chair1} alt='image1'></img>
                <h3 className='product-list'>Leviosa</h3>
                <p className='product-list'>Stylish cafe chair</p>
                <h4 className='product-list'>$ 250.00</h4>
              </div>
            </div>
            <div class='grid-item'>
              {' '}
              <div className='item-part'>
                <img src={bed} alt='image1'></img>
                <h3 className='product-list'>Respira</h3>
                <p className='product-list'>Minimalist fan</p>
                <h4 className='product-list'>$ 650.00</h4>
              </div>
            </div>
            <div class='grid-item'>
              {' '}
              <div className='item-part'>
                <img src={chair1} alt='image1'></img>
                <h3 className='product-list'>Grifo</h3>
                <p className='product-list'>Night lamp</p>
                <h4 className='product-list'>$ 150.00</h4>
              </div>
            </div>
            <div class='grid-item'>
              {' '}
              <div className='item-part'>
                <img src={fan} alt='image1'></img>
                <h3 className='product-list'>Muggo</h3>
                <p className='product-list'>Small mug</p>
                <h4 className='product-list'>$ 15.00</h4>
              </div>
            </div>
            <div class='grid-item'>
              {' '}
              <div className='item-part'>
                <img src={bed} alt='image1'></img>
                <h3 className='product-list'>Pingky</h3>
                <p className='product-list'>Cute bed set</p>
                <h4 className='product-list'>$ 75.00</h4>
              </div>
            </div>
            <div class='grid-item'>
              {' '}
              <div className='item-part'>
                <img src={chair1} alt='image1'></img>
                <h3 className='product-list'>Potty</h3>
                <p className='product-list'>Minimalist flower pot</p>
                <h4 className='product-list'>$ 50.00</h4>
              </div>
            </div>
          </div>
          <div className='showmore'>
            <button className='showmore-btn'>Show more</button>
          </div>
        </div>
      </div>
      <div className='container-three'>
        <div className='container-three-left'>
          <div className='expore-now'>
            <div>
              <h2 className='explore-now-heading'>50+ Beautiful rooms</h2>
              <h2 className='explore-now-heading2'>Inspiration</h2>
            </div>
            <div>
              {' '}
              <p className='explore-now-text'>
                Our designer already made a lot of beautifull
              </p>
              <p className='explore-now-text'>
                {' '}
                prototype of rooms that inspire you
              </p>
            </div>
            <div>
              <button className='explore-now-btn'>Explore Now</button>
            </div>
          </div>
        </div>
        <div className='container-three-right'>
          <div className='first-image-container'>
            <img src={furniture1} alt='first' className='first-img'></img>
          </div>
          <div className='second-image-container'>
            <img src={furniture2} alt='second' className='second-img'></img>
            {/* <div className='slider-button-container'>
              <button className='slidebar-btn'>previous</button>
              <button className='slidebar-btn'>Next</button>
            </div> */}
          </div>
        </div>
      </div>
      <div className='container-four'>
        <div className='tips-tricks'>
          <h5 className='tips-tricks-text'>Tips & Tricks</h5>
        </div>
        <div className='tips-tricks-content'>
          <div className='tips-tricks-content-item'>
            <div className='tips-tricks-img'>
              <img src={bedroom} alt='furniture'></img>
            </div>
            <div className='tips-tricks-news'>
              <h4 className='tips-tricks-news-text'>
                How to create a living room to love
              </h4>
              <p className='tips-tricks-news-text-para'>10-june-2022</p>
            </div>
          </div>
          <div className='tips-tricks-content-item'>
            <div className='tips-tricks-img'>
              <img src={diningroom} alt='furniture'></img>
            </div>
            <div className='tips-tricks-news'>
              <h4 className='tips-tricks-news-text'>
                Make your dining room more fun
              </h4>
              <p className='tips-tricks-news-text-para'>10-june-2022</p>
            </div>
          </div>
          <div className='tips-tricks-content-item'>
            <div className='tips-tricks-img'>
              {' '}
              <img src={workspace} alt='furniture'></img>
            </div>

            <div className='tips-tricks-news'>
              <h4 className='tips-tricks-news-text'>
                Solution for clean look working space
              </h4>
              <p className='tips-tricks-news-text-para'>10-june-2022</p>
            </div>
          </div>
        </div>
        <div className='funiro-furniture'>
          <div className='funiro-furniture-text'>
            <p className='funiro-furniture-para'>Share your setup with</p>
            <h3 className='funiro-furniture-heading'>#FuniroFurniture</h3>
          </div>
          <div className='furniture-wall'>
            <div className='frame' id='frame1'>
              <img src={frame1} alt='frame1'></img>
            </div>
            <div className='frame' id='frame2'>
              <img src={frame2} alt='frame1'></img>
            </div>
            <div className='frame' id='frame3'>
              <img src={frame3} alt='frame1'></img>
            </div>
            <div className='frame' id='frame4'>
              <img src={frame4} alt='frame1'></img>
            </div>
            <div className='frame' id='frame5'>
              <img src={frame5} alt='frame1'></img>
            </div>
            <div className='frame' id='frame6'>
              <img src={frame6} alt='frame1'></img>
            </div>
            <div className='frame' id='frame7'>
              <img src={frame7} alt='frame1'></img>
            </div>
            <div className='frame' id='frame8'>
              <img src={chair2} alt='frame1'></img>
            </div>
          </div>
        </div>
        <div style={{width:"70%", height:"0.5px",backgroundColor : "grey" , marginTop:"25px", marginLeft:"150px"}}></div>
        <div>
      <Footbar/>
      </div>
      </div>
    
    </div>
    </div>
  );
};
export default Home;
