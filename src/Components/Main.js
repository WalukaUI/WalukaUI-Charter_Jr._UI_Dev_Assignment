import React, { useEffect, useState } from "react";
import "./Main.css";
import Products from "./Products/ProductsPage";
import Cart from "./Cart/Cart";

function Main() {
  const [pointsBalance, setPointsBalance] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        res.json().then((items) => {
          setProducts(items.products);
        });
      }
    });
  }, []);

  function addItemToCart(e) {
    setTotalPrice((count) => count + e);
  }

  function removeItems() {
    setTotalPrice(0);
  }

  function calculatePoints(e) {
    let points = 0;
    if (totalPrice > 100) {
      points = (totalPrice - 100) * 2 + 50;
    } else if (totalPrice > 50) {
      points = totalPrice - 50;
    }
    return points;
  }

  function purchaseItems() {
    let pointsofCurrentTranscation = calculatePoints(totalPrice);
    setPointsBalance(
      (pointsBalance) => pointsBalance + pointsofCurrentTranscation
    );
    setTotalPrice(0);
  }

  return (
    <div className="main">
      
      <div className="productsList">

       <div className="button-container">
      <button className="my-button">Question</button>
      <div className="hover-box">
      <p>
                Jr UI Developer Assignment
A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.
A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent between $50 and $100 in each transaction.<br/>
<br/>
(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).<br/>
Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.<br/>
<br/>
Use React JS (do not use TypeScript)<br/><br/>

Simulate an asynchronous API call to fetch data<br/><br/>

No redux<br/><br/>

Make up a data set to best demonstrate your solution<br/><br/>

Check solution into GitHub<br/><br/>
      </p>
      </div>
    </div>
        <hr />
        <h3 className="listH1"> List of products</h3>
        <hr />
        <Products products={products} addItemToCart={addItemToCart} />
      </div>
      <div className="pointsAndCart">
        <div className="pointsDiv">
          <h2>Points Balance</h2>
          <b><p style={{color: "#FF0066"}}>{pointsBalance.toFixed(2)}</p></b>
        </div>
        <div className="cartDiv">
          <Cart
            totalPrice={totalPrice}
            removeItems={removeItems}
            purchaseItems={purchaseItems}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
