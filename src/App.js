import "./App.css";

import React, { Component } from "react";

import Home from "./pages/Home/Home.js";
import { config } from "./config.js";

const App = () => <Home settings={config} />;

export default App;
