import React from 'react';

// Portfolio components 
import Portfolio from "./pages/portfolio";
import Footer from "./components/Footer";


function App() {
  return (
<div>
    <header className="header">
      <h1 class="AP-logo">AP</h1>
    </header>
    <Portfolio />
    <Footer />
  </div>
);
}
  
export default App;