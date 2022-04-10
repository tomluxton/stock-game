import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
//import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Portfolio,
  //Contact,
  //Blog,
  //Posts,
  //Post,
} from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
    <Footer />
  </Router>,  
);

//serviceWorker.unregister();