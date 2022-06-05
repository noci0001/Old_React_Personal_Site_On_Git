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
    <div className="containerSnap"> 
      <Header />
      <VideoJS/>
      <WhoIAM />
      <WhatIDo />
      <MyWork/>
      <Footer />
    </div>
  );
}

export default App;
