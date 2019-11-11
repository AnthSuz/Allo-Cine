import React from "react";
import "./App.css";
// IMPORT DES COMPONENTS
import Header from "./components/Header";
// IMPORT DES IMAGES
import Logo from "./images/logo.svg";

function App() {
  return (
    <>
      <Header photo={Logo} />
      <body>
        <div className="tab">
          <p>Popular Movies</p>
          <p>Upcoming Movies</p>
          <p>Top Rated Movies</p>
        </div>
      </body>
    </>
  );
}

export default App;
