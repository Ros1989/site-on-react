import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts.js';
import Blog from './pages/Blog.js';

const App = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/contacts" exact>
          <Contacts />
        </Route>

        <Route path="/blog" exact>
          <Blog />
        </Route>

        {/* <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/blog" component={Blog} /> */}
      </Switch>
    </>
  );
};

export default App;
