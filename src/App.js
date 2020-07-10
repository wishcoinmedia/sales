import React from "react";

import "./tailwind.output.css";
import Signin from "./components/signin";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Signin />
    </div>
  );
}

export default App;
