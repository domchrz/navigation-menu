import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';

// import styles from './App.module.scss';

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
          <Route path="/products">
            <Products />
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
