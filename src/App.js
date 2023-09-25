import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";
import Construction from "./pages/Construction.js";
import About from "./pages/About.js";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
