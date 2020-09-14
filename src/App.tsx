import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ListMains from './components/ListMains/ListMains';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import './App.css';

function App() {

  return (
    <Router>
      <main>
        <div className="app">
          <Header items={['Home','Mains','Cart']} />
        </div>
        <Route path="/cart" component={Cart}/>
        <Route path="/mains" component={ListMains}/>
        <Route path="/home" component={Home}/>
        
      </main>
    </Router>
  
  );
}

export default App;
