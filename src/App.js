import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import ShelterPage from './pages/ShelterPage/ShelterPage';
import ShelterDetailPage from './pages/ShelterDetailPage/ShelterDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/shelters" element={<ShelterPage />} />
      <Route path="/shelters/:id" element={<ShelterDetailPage />} />
    </Routes>
  );
}

export default App;
