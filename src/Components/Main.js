import React, { useEffect, useState } from "react";
import "./Main.css"
import Products from "./Products/ProductsPage";
import Cart from "./Cart/Cart";

function Main() {
    const [pointsBalance, setPointsBalance]=useState(0)
    const [totalPrice, setTotalPrice]=useState(0)
    const [products, setProducts]=useState({})

    useEffect(()=>{
        fetch('https://dummyjson.com/products',{
            method: "GET",
            headers: { "Content-Type": "application/json"},
        }).then((res)=>{
            if(res.ok){
                res.json().then((items)=>{
                    console.log(items.products);
                    setProducts(items.products);
                    
                })
                
            }
        })
    },[])

    function addToCart(e) {
        // setTotalPrice=totalPrice+e
    }
    return <div className="main">
        <div>
        <h3>Points Balance</h3>
        <p>{pointsBalance}</p>
        </div>
        <div>
        <Cart totalPrice={totalPrice}/>
        <Products products={products} addToCart={addToCart}/>
        </div>
    </div>
}

export default Main