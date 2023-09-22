import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div>
        <MainHeader />
        <main>
          <Switch>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/contactus">
              <ContactUs />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
