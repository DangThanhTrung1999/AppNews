import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DieuHuongURL from "./routers/DieuHuongURL";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <DieuHuongURL className='giua' />
      <Footer/>
    </Router>
  );
}

export default App;
