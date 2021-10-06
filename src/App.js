import React, {Component} from 'react';

// Imports For Routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Imports For Styling
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

// Imports For Components
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';

class App extends Component 
{
  render() {
    return (
      <Router>
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/footer">Footer</Nav.Link>
            <Nav.Link href="/header">Header</Nav.Link>
          </Nav>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/" exact><Content></Content></Route>
          <Route path="/header" exact><Header></Header></Route>
          <Route path="/footer" exact><Footer></Footer></Route>
        </Switch>
      </div>
      </Router>
    );
  };
}

export default App;
