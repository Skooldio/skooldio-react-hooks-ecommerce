import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const App = () => {
  return (
    <>
      <Navbar />
      {true && <Home></Home>}
      {false && <Cart></Cart>}
      {false && <ProductDetail></ProductDetail>}
      <Footer />
    </>
  );
};

export default App;
