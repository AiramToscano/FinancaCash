import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Main from './Main';
import HistoricTransactions from './HistoricTransactions';

function App() {
  return (
    <Routes>
      <Route path="/transactions" element={<HistoricTransactions />} />
      <Route path="/home" element={<Main />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
