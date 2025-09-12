function Cart({totalPrice, removeitems}) {

    return <>
        <div>
        <h3>{totalPrice.toFixed(2)}</h3>
        <a>click Remove Button to remove items from the cart</a><br/>
        <button onClick={removeitems}>Remove</button>
    </div>
    </>
}

export default Cart