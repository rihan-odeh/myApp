
import React, {useState, useEffect} from "react"; 
import { Routes, Route } from "react-router-dom";
import './App.css';
import {Home, About, Events, Contact} from "./Components/pages"

function App() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div> 
 <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/events" element={<Events/>}/>
  </Routes>
    </div>

  )};
    

  

export default App;
