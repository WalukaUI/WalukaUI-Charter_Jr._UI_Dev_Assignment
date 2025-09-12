import React, { useEffect, useState } from "react";
import "./Main.css"
import Products from "./Products/ProductsPage";
import Cart from "./Cart/Cart";

function Main() {



let obj = [{id: 10, title: 'Gucci Bloom Eau de', description: "Gucci Bloom by Gucci is a floral and captivating f…angoon creeper. It's a modern and romantic scent.", category: 'fragrances', price: 79.99},
{id: 11, title: 'Annibale Colombo Bed', description: 'The Annibale Colombo Bed is a luxurious and elegan… materials for a comfortable and stylish bedroom.', category: 'furniture', price: 162.00},
{id: 12, title: 'Annibale Colombo Sofa', description: 'The Annibale Colombo Sofa is a sophisticated and c…sign and premium upholstery for your living room.', category: 'furniture', price: 9.99},
{id: 13, title: 'Bedside Table African Cherry', description: 'The Bedside Table in African Cherry is a stylish a…convenient storage space and a touch of elegance.', category: 'furniture', price: 69.99},
{id: 14, title: 'Knoll Saarinen Executive Conference Chair', description: 'The Knoll Saarinen Executive Conference Chair is a…fice or conference room with its timeless design.', category: 'furniture', price: 40.00},
{id: 15, title: 'Wooden Bathroom Sink With Mirror', description: 'The Wooden Bathroom Sink with Mirror is a unique a…g a wooden sink countertop and a matching mirror.', category: 'furniture', price: 192.00},
{id: 16, title: 'Apple', description: 'Fresh and crisp apples, perfect for snacking or incorporating into various recipes.', category: 'groceries', price: 1.99},
{id: 17, title: 'Beef Steak', description: 'High-quality beef steak, great for grilling or cooking to your preferred level of doneness.', category: 'groceries', price: 12.99}]

    const [pointsBalance, setPointsBalance]=useState(0)
    const [totalPrice, setTotalPrice]=useState(0)
    const [products, setProducts]=useState(obj)
 
    // useEffect(()=>{
    //     fetch('https://dummyjson.com/products',{
    //         method: "GET",
    //         headers: { "Content-Type": "application/json"},
    //     }).then((res)=>{
    //         if(res.ok){
    //             res.json().then((items)=>{
    //                 console.log(items.products);
    //                 setProducts(items.products);     
    //             })
    //         }
    //     })
    // },[])


    function addItemToCart(e) {
        setTotalPrice(count => count + e)
    }

    function removeItems(){
        setTotalPrice(0)
    }

    function calculatePoints(e) {
        let points = 0
        if(totalPrice > 100){
            points = (totalPrice - 100)*2
        }else if(totalPrice > 50){
            points = (totalPrice - 50)
        }
        return points
        
    }

    function purchaseItems() {
        let pointsofCurrentTranscation = calculatePoints(totalPrice)
        setPointsBalance(pointsBalance => pointsBalance + pointsofCurrentTranscation)
        setTotalPrice(0)

    }

    return <div className="main">
        <div>
        <h3>Points Balance</h3>
        <p>{pointsBalance.toFixed(2)}</p>
        </div>
        <div>
        <Cart totalPrice={totalPrice} removeItems={removeItems} purchaseItems={purchaseItems}/>
        <Products products={products} addItemToCart={addItemToCart}/>
        </div>
    </div>
}

export default Main