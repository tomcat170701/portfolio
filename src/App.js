

//components
import Home from "./Home";
import About from "./About";
import MyJourney from "./MyJourney";
import Skills from "./Skills";
import Contact from "./Contact";
import NavBar from "./extras/NavBar";
import Missing from "./extras/Missing";
/* import Footer from "./Footer"; */
//libraries
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'








function App() {
  return (
    <>
    <Router>
    <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/journey" element={<MyJourney/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Missing/>}/>
          </Routes>
          {/* <Footer/> */}
    </div>
    </Router>
    </>
  );
}

export default App;
