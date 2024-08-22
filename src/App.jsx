import React from 'react';
import Login from './components/login';
import ForgotPassword from './components/forgot';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function App() {
 
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" Component={ForgotPassword} />
        </Routes>

       
    </Router>
  );
}

export default App;