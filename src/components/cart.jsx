import React from 'react';
import '../design/cart.css';
import { AiOutlineClose, AiOutlineArrowRight } from 'react-icons/ai';
import Navbar from './navbar';
import Footbar from './footbar';

function Cart() {
  return (
    <div>
      <Navbar />
      <div className='cart-main'>
        <div className='cart1'>
          <div className='shopping-cart'>
            <div
              className='shopping-cart-heading'
              style={{ marginLeft: '-96px' }}
            >
              Shopping Cart
            </div>
            <div className='shopping-car-items'>
              <div className='wrap'>
                <div className='shopping-car-items-img'></div>
                <div className='shopping-car-items-details'>
                  <div className='shopping-car-items-name'>Potty</div>
                  <div className='shopping-car-items-description'>
                    Minimalist flower pot
                  </div>
                  <div className='shopping-car-items-price'>$50</div>
                  <div className='shopping-car-items-stock'>In stock</div>
                  <div className='shopping-cart-select'>
                    <select style={{ backgroundColor: 'white' }}>
                      <option selected disabled>
                        1
                      </option>
                    </select>
                  </div>
                  <div className='star'>
                    <AiOutlineClose />
                  </div>
                </div>
              </div>

              <div className='wrap'>
                <div className='shopping-car-items-img'></div>
                <div className='shopping-car-items-details'>
                  <div className='shopping-car-items-name'>Sofa</div>
                  <div className='shopping-car-items-description'>
                    Cream leather
                  </div>
                  <div className='shopping-car-items-price'>$520</div>
                  <div className='shopping-car-items-stock'>In stock</div>
                  <div className='shopping-cart-select'>
                    <select style={{ backgroundColor: 'white' }}>
                      <option selected disabled>
                        1
                      </option>
                    </select>
                  </div>
                  <div className='star'>
                    <AiOutlineClose />
                  </div>
                </div>
              </div>

              <div className='wrap'>
                <div className='shopping-car-items-img'></div>
                <div className='shopping-car-items-details'>
                  <div className='shopping-car-items-name'>Chair</div>
                  <div className='shopping-car-items-description'>
                    Brick leather
                  </div>
                  <div className='shopping-car-items-price'>$89</div>
                  <div className='shopping-car-items-stock'>
                    Shops in 3 days
                  </div>
                  <div className='shopping-cart-select'>
                    <select style={{backgroundColor:"white"}}>
                      <option selected disabled>
                        1
                      </option>
                    </select>
                  </div>
                  <div className='star'>
                    <AiOutlineClose />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='order-summary'>
            <div className='order-summary-heading'>Order summary</div>
            <div className='order-summary-subtotal'>Subtotal</div>
            <div className='a'>$45</div>
            <div className='line6'></div>
            <div className='order-summary-shipping'>Shipping estimat</div>
            <div className='b'>$00</div>
            <div className='line6'></div>
            <div className='order-summary-tax'>Tax extimate</div>
            <div className='c'>$00</div>
            <div className='line6'></div>
            <div className='order-summary-ordertotal'>Order Total</div>
            <div
              className='d'
              style={{ marginTop: '-36px', fontWeight: '700' }}
            >
              $45
            </div>
            <div className='order-summary-button'>
              <button>Checkout</button>
            </div>
          </div>
        </div>

        {/* //////////////////////////// */}
        <div className='cart2'>
          <div className='cart2-main-heading'>You may also like</div>
          <div className='cart2-absolute'>See all</div>
          <div className='cart2-main-absolute-icon'>
            <AiOutlineArrowRight />
          </div>
          <div className='line4' style={{ width: '1013px' }}></div>
          <div className='cart2-img'>
            <div className='cart2-img-list'>
              <div className='cart2-img-list-image'></div>
              <div className='cart2-img-list-detail'>Detail</div>
              <div className='cart2-img-list-sofa'>Sofa</div>
              <div className='cart2-img-list-price'>$520</div>
              <div className='cart2-img-list-color'>
                <div className='cart2-img-list-color1'></div>
                <div className='cart2-img-list-color1'></div>
                <div className='cart2-img-list-color1'></div>
              </div>
            </div>
            <div className='cart2-img-list'>
              <div className='cart2-img-list-image'></div>
              <div className='cart2-img-list-detail'>Detail</div>
              <div className='cart2-img-list-sofa'>Sofa</div>
              <div className='cart2-img-list-price'>$520</div>
              <div className='cart2-img-list-color'>
                <div className='cart2-img-list-color1'></div>
                <div className='cart2-img-list-color1'></div>
                <div className='cart2-img-list-color1'></div>
              </div>
            </div>
            <div className='cart2-img-list'>
              <div className='cart2-img-list-image'></div>
              <div className='cart2-img-list-detail'>Detail</div>
              <div className='cart2-img-list-sofa'>Sofa</div>
              <div className='cart2-img-list-price'>$520</div>
              <div className='cart2-img-list-color'>
                <div className='cart2-img-list-color1'></div>
                <div className='cart2-img-list-color1'></div>
                <div className='cart2-img-list-color1'></div>
              </div>
            </div>
            <div className='cart2-img-list'>
              <div className='cart2-img-list-image'></div>
              <div className='cart2-img-list-detail'>Detail</div>
              <div className='cart2-img-list-sofa'>Sofa</div>
              <div className='cart2-img-list-price'>$520</div>
              <div className='cart2-img-list-color'>
                <div className='cart2-img-list-color1'></div>
                <div className='cart2-img-list-color1'></div>
                <div className='cart2-img-list-color1'></div>
              </div>
            </div>
          </div>
          <div className='line5' style={{ width: '1015px' }}></div>
        </div>
      </div>
      <Footbar />
    </div>
  );
}
export default Cart;
