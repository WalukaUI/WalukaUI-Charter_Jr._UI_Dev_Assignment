import "./ProductsPage.css";
import Product from "./Product";

function Products({ products, addItemToCart }) {
  return (
    <div className="products">
      <h3> List of products</h3>
      {products.map((item) => (
        <Product key={item.id} item={item} addItemToCart={addItemToCart} />
      ))}
    </div>
  );
}

export default Products;
