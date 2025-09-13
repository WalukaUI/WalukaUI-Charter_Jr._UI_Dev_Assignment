import "./Cart.css"
function Cart({ totalPrice, removeItems, purchaseItems }) {
  return (
    <>
      <div>
        <h2>Cart Total</h2>
        <h3>{totalPrice.toFixed(2)}</h3>
        <hr/>
        <p>Click Remove Button to remove items from the cart</p>
        <br />
        <button className="removebtn" onClick={removeItems}>Remove</button>
        <br />
        <hr/>
        <p>Click Purchase Button to purchase the items in the cart</p>
        <br />
        <button className="purchasebtn" onClick={purchaseItems}>Purchase</button>
      </div>
    </>
  );
}

export default Cart;
