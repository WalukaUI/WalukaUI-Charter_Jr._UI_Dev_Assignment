import "./Product.css"

function Product({item, addItemToCart}) {
    return<>
        <div key={item.id} className="itemBox">
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.discription}</p>
            <p>{item.category}</p>
            <button onClick={addItemToCart(item.price)}>Add to cart</button>
        </div>
    </>
}
export default Product