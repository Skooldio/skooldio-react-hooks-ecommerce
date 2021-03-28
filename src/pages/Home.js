import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';

import useAPI from '../hooks/useAPI';

export const Home = () => {
  const { data, loading } = useAPI('/products');

  return (
    <div>
      <Hero />
      {loading && <div>Loading</div>}
      {!loading && data && <ProductList data={data} />}
    </div>
  );
};

export default Home;
