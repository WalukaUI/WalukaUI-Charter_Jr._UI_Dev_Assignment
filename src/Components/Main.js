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
      <h3> List of products</h3>
        <Products products={products} addItemToCart={addItemToCart} />
      </div>
      <div className="pointsAndCart">
        <div className="pointsDiv">
          <h3>Points Balance</h3>
          <p>{pointsBalance.toFixed(2)}</p>
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
