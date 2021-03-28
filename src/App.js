import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './contexts/cart';

export const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/products/:productId" exact>
            <ProductDetail />
          </Route>
          <Route path="/my-cart" exact>
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
