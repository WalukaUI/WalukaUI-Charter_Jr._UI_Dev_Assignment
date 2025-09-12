function Cart({ totalPrice, removeItems, purchaseItems }) {
  return (
    <>
      <div>
        <h4>Cart Total</h4>
        <h3>{totalPrice.toFixed(2)}</h3>
        <p>click Remove Button to remove items from the cart</p>
        <br />
        <button onClick={removeItems}>Remove</button>
        <br />
        <p>click Purchase Button to purchase the items in the cart</p>
        <br />
        <button onClick={purchaseItems}>Purchase</button>
      </div>
    </>
  );
}

export default Cart;
