import "./ProductsPage.css";
import Product from "./Product";

function Products({ products, addItemToCart }) {
  return (
    <div className="products">
      {products.map((item) => (
        <Product key={item.id} item={item} addItemToCart={addItemToCart} />
      ))}
    </div>
  );
}

export default Products;
