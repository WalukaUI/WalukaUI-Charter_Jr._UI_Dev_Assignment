import React, { useEffect, useState } from "react";
import "./Main.css"
import Products from "./Products/ProductsPage";

function Main() {
    const [pointsBalance, setPointsBalance]=useState(0)
    const [products, setProducts]=useState({})

    useEffect(()=>{
        fetch('https://dummyjson.com/products',{
            method: "GET",
            headers: { "Content-Type": "application/json"},
        }).then((res)=>{
            if(res.ok){
                res.json().then((items)=>{
                    setProducts(items.products);
                    
                })
                
            }
        })
    })

    return <div className="main">
        <div>
        <h3>Points Balance</h3>
        <p>{pointsBalance}</p>
        </div>
        <div>
        <Products products={products}/>
        </div>
    </div>
}

export default Main