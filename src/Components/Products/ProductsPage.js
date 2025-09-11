import "./ProductsPage.css"
import Product from "./Product"

function Products({products, addToCart}) {
    function addItemToCart(e) {
        e.preventDefault()
        addToCart(e)
    }
    return <div className="products">
        <h3> List of products</h3>
        {products.map((item)=> <Product key={item.id} item={item} addItemToCart={addItemToCart}/>)}
    </div>
}

export default Products