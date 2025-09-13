import "./Product.css";

function Product({ item, addItemToCart }) {
  function handleclick() {
    addItemToCart(item.price);
  }
  return (
    <>
      <div key={item.id} className="productDiv button">
        <label>
          Name<p>{item.title}</p>
        </label>
        <b><p>{`Price: ${item.price}`}</p></b>
        <p>{`Category: ${item.category}`}</p>
        <button className="butn" onClick={handleclick}>Add to cart</button>
      </div>
    </>
  );
}
export default Product;
