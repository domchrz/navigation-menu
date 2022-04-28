import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Category from './pages/Category';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:name">
            <Category />
          </Route>
          <Route path="/products/:name/:id">
            <ProductDetails />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
      <footer>
        {/* <Footer /> */}
      </footer>
    </>
  );
}
