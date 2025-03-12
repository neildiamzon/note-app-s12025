import React from 'react';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/*<Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />*/}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
