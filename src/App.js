import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Card from "./card";
import Cart from "./cart";
import Topbar from "./topbar";
import Header from "./header";

function App() {
  
  const Products = [
    {
      id: 1,
      name: "iphone xr",
      price: 20000,
      img: "https://tse3.mm.bing.net/th?id=OIP.gNvH8cGVOOtFNYnSwS8MqAHaHa&pid=Api&P=0",
    },
    {
      id: 2,
      name: "iphone xs",
      price: 30000,
      img: "https://tse3.mm.bing.net/th?id=OIP.ZTr0rq42L3gkcqtGhhF6VgHaHa&pid=Api&P=0",
    },
    {
      id: 3,
      name: "iphone 11 ",
      price: 25000,
      img: "https://tse3.mm.bing.net/th?id=OIP.RT9QNuTk7eEbP8m8YVIqnQHaHa&pid=Api&P=0",
    },
    {
      id: 4,
      name: "iphone 12",
      price: 80000,
      img: "https://tse2.mm.bing.net/th?id=OIP.A0G3jK7RfqlRrp9EawwnIgHaHa&pid=Api&P=0",
    },
    {
      id: 5,
      name: "iphone 13",
      price: 100000,
      img: "https://tse2.mm.bing.net/th?id=OIP.GADafLPEaobF4-IjDGJhyAHaHa&pid=Api&P=0",
    },
    {
      id: 6,
      name: "iphone 14",
      price: 150000,
      img: "https://tse2.mm.bing.net/th?id=OIP.sO9TDT4nHbPbN5xcMDlg1QHaHa&pid=Api&P=0",
    }]
    const [products, setProducts] = useState([])

  const [cartItems, setCartItems] = useState([]);

  let addToCart = (Product) => {
    setCartItems([...cartItems, Product]);
  };

  let removeFromCart = (Product) => {
    const indexval = cartItems.findIndex((obj) => obj.id === Product.id);
    cartItems.splice(indexval, 1);
    setCartItems([...cartItems]);
  };  

  return (
    <>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                 <Topbar/>          
            </div>
            </nav>
            <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
             <Header/>
            </div>
            </header>
          
    <div className="container">
      <div className="row">
        <div className="col-lg-8 ">
          <div className="row">
            {Products.map((Product) => {
              return <Card Product={Product} addToCart={addToCart} cartItems={cartItems}/>;
            })}
          </div>
        </div>
        <div className="col-lg-4 py-2">
          <h3>Cart</h3>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
    
    </>
  );
}

export default App;
