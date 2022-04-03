import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
//Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
