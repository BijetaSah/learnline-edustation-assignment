import ProductItem from "./ProductItem";

function Products({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:px-40">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Products;
