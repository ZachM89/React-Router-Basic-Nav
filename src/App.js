import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
    
  <div>
    <Navigation />
    <Route path="/" component={Home}/>
    <Route path="/" component={About}/>
    <Route path="/" component={Contact}/>
  </div>
);

export default App;


{/* <Route path="/" component={Home}/>
    <Route path="/" component={About}/>
    <Route path="/" component={Contact}/> */}