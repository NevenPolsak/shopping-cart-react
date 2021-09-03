import React, { useState } from "react";
import data from "./components/Data";
import "./App.css";


function App() {
  const { productItems } = data;
  const [cart, setCart] = useState([]);
  const [page,setPage] = useState("products")

  const addToCart = (products) => {
    console.log("fuck you");
    setCart([...cart, products]);
  };

  return (
    <div>
  
      <div className="header">
        <div className="logo">
          <h1>Products</h1>
        </div>
        <ul>
          <li>
            <a href="">Cart <i className="fas fa-shopping-cart">({cart.length})</i></a>
          </li>
        </ul>
      </div>
      
      <div className="products">
        {productItems.map((products) => (
          <div className="card" key={products.id}>
            <img src={products.image} alt={products.title} />
            <div className="box">
              <h3>{products.title}</h3>
              <p>{products.desc}</p>
              <h4>$ {products.price}</h4>
              <button onClick={() => addToCart(products)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
