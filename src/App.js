import React, { useState, useEffect } from 'react';
import './App.css';
// import Nayok from './old-component/Nayok';
// import Header from './component/Header';
import Header from './component/Header';
import Shop from './component/Shop';


function App() {
  return (  
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}
export default App;
