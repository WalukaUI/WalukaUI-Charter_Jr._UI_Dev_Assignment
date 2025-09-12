function Cart({totalPrice, removeItems, purchaseItems}) {

    return <>
        <div>
        <h3>{totalPrice.toFixed(2)}</h3>
        <a>click Remove Button to remove items from the cart</a><br/>
        <button onClick={removeItems}>Remove</button><br/>
        <a>click Purchase Button to purchase the items in the cart</a><br/>
        <button onClick={purchaseItems}>Purchase</button>
    </div>
    </>
}

export default Cart