import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Portfolio components 
import Navbar from './components/navbar';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Skills from './pages/skills';
import Footer from './components/footer';


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;