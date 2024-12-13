import React from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Portfolio from './Component/Portfolio';
import Experience from './Component/Experience';
import Footer from './Component/Footer';
import Contact from './Component/contact';

import { Toaster } from 'react-hot-toast';

function App() {
  return (
    
      <>
      <div>
      <Navbar/>
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact></Contact>
      <Footer></Footer>
      </div>
      <Toaster />
      

      </>
    
  );
}

export default App;
