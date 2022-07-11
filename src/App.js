import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Portfolio components 
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
        <Route path='/skills' component={Skills} />
      </Switch>
    </Router>
  );
}
  
export default App;