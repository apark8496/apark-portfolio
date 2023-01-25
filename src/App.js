import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Portfolio components 
import Navigation from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Skills from "./components/skills";
import Footer from "./components/footer";


function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
          <Route path='/skills' component={Skills} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;