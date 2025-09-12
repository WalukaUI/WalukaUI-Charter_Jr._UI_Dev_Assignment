import "./Product.css"

function Product({item, addItemToCart}) {
    function handleclick() {
        addItemToCart(item.price)
    }
    return<>
        <div key={item.id} className="itemBox">
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.discription}</p>
            <p>{item.category}</p>
            <button onClick={handleclick}>Add to cart</button>
        </div>
    </>
}
export default Product