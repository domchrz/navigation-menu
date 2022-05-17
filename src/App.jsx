import { Switch, Route, Redirect } from 'react-router-dom';
import { SubmenuProvider } from './context/Submenu';
import { Navbar } from './components';
import { About, Category, Home, ProductDetails, Products } from './pages';

export default function App() {
  return (
    <>
      <header>
        <SubmenuProvider>
          <Navbar />
        </SubmenuProvider>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/products/:name">
            <Category />
          </Route>
          <Route path="/products/:name/:id">
            <ProductDetails />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
    </>
  );
}
