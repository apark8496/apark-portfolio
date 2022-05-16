import React, {useState} from 'react';
// Portfolio components 
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';


function App() {
  // arr of nav links
  const [navLinks] = useState([
    "About", 
    "Projects",
    "Contact", 
    "Resume"
  ]);

  // set current display based on nav link selection
  const [currentDisplay, setCurrentDisplay] = useState(navLinks[0]);
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
        {/* passing nav links and current display settings on to header as props */}
        <Header
          navLinks={navLinks}
          currentDisplay={currentDisplay}
          setCurrentDisplay={setCurrentDisplay}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Header>

        {/* passing current display settings on to main section as props */}
        <Portfolio
          currentDisplay={currentDisplay}
        ></Portfolio>

        <Footer></Footer>
    </div>
  );
}

export default App;