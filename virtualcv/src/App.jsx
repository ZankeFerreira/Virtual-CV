import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import CV from "./Components/CV";

function App() {
  return (
    <>
      <div>
        <Header />

        <About />

        <CV />
      </div>
    </>
  );
}

export default App;
