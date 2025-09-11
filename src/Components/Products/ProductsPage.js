import "./ProductsPage.css"
function Products({products}) {
    function showProducts(products) {
        return products.map((item)=> <div id={item.id} className="itemBox">
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.discription}</p>
            <p>{item.category}</p>
            <button>Add to cart</button>
        </div>)
    }
    return <div className="products">
        <h3> List of products</h3>
        {showProducts(products)}
    </div>
}

export default Products