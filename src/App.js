import React, { useContext } from "react";
import {Navbar} from "./Components/Navbar/Navbar";
import '../src/App.css'
import Intro from "./Components/Intro/Intro";
import Service from "./Components/Service/Service";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Works/Work";
import Port from "./Components/Port/Port";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";


function App() {
  const them =useContext(themeContext);
  const darkMode=them.state.darkMode;
  return (
    <div className="App"
    style={{background:darkMode?'black':'',
           color: darkMode?'white':'' }}
    >
     <Navbar/>
     <Intro/>
     <Service/>
     <Experience/>
     <Work/>
     <Port/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
