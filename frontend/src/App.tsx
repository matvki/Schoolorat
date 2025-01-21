// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Header  from './Components/Header';
import  Home  from './Pages/Home'
import  Vitrine from './Pages/Vitrine';
import { AuthProvider } from './Context/authContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vitrine" element={<Vitrine />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
