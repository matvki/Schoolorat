// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Header  from './Components/Header';
import  Home  from './Pages/Home'
import  Vitrine from './Pages/Vitrine';

import { AuthProvider } from './Context/authContext';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import AccountManagement from './Pages/AccountManagement';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Vitrine/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<AccountManagement />} /> {/* Route ajoutée */}
       
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
