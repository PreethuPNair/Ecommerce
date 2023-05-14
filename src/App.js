import logo from './logo.svg';
import './App.css';
import { Route,Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Footbar from './components/footbar';
import Product from './components/productPage';
import Cart from './components/cart';
import ProductList from './components/ProductList';
import Home from './components/Home';

function App() {
  return <Routes>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/footbar' element={<Footbar/>}/>
        <Route path='/product-details' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<ProductList/>}/>


      </Routes>
  

}

export default App;
