
import React, {useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  // arr of nav links
  const [navLinks] = useState([
    "About Me", 
    "My Projects",
    "Contact Me", 
    "My Resume"
  ]);

  // set current display based on nav link selection
  const [currentDisplay, setCurrentDisplay] = useState(navLinks[0]);

  return (
    <div>
        {/* passing nav links and current display settings on to header as props */}
        <Header
          navLinks={navLinks}
          currentDisplay={currentDisplay}
          setCurrentDisplay={setCurrentDisplay}
        ></Header>

        {/* passing current display settings on to main section as props */}
        <Main
          currentDisplay={currentDisplay}
        ></Main>

        <Footer></Footer>
    </div>
  );
}

export default App;