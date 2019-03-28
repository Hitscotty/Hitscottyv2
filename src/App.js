import React from "react";
import "./App.css";
import Home from "./pages/Home/Home.js";
import { ConfigProvider } from "./config";

const App = () => (
  <ConfigProvider>
    <Home />
  </ConfigProvider>
);

export default App;
