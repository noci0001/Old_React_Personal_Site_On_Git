import React from "react"
import "./index.css"
import Header from "./Header.js"
import WhatIDo from "./WhatIDo.js"
import WhoIAM from "./WhoIAM.js"
import MyWork from "./MyWork.js"
import Footer from "./Footer.js"
import VideoJS from "./VideoJS.js"



function App() {

  return (
    <div className="scroll-container"> 
      <Header 
        className="scroll-area"
      />
      <VideoJS
        className="scroll-area"
      />
      <WhoIAM 
      className="scroll-area"
      />
      <WhatIDo 
      className="scroll-area"
      />
      <MyWork
      className="scroll-area"
      />
      <Footer 
      className="scroll-area"
      />
    </div>
  );
}

export default App;
