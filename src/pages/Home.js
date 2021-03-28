import Hero from '../components/Hero';
import ProductList from '../components/ProductList';

import { products } from '../data';

export const Home = () => (
  <div>
    <Hero />
    <ProductList data={products} />
  </div>
);

export default Home;
