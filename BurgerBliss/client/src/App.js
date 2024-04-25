import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Cart from "./components/Cart"; // Import your cart component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/cart" element={<Cart />} />
          {/* ... other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
