import ProductItem from "./ProductItem";

export const ProductList = ({ data = [] }) => (
  <div>
    {data.map((product) => (
      <ProductItem data={product} />
    ))}
  </div>
);

export default ProductList;
