import "./App.css";
import Login from "./auth/Login";
import { Signup } from "./auth/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import Data from "./components/Data";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import UserForm from "./components/UserForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/data" element={<Data />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
