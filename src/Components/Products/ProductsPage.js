
function Products({products}) {
    return <div className="products">
        <h3> List of products</h3>
        {products.map((item)=> <a>{item.price}</a>)}
    </div>
}

export default Products