import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {firebase_app} from './data/firebase';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NoPage } from './pages/NoPage';
import { Signup } from './pages/Signup';

function App() {
  console.log('!!! app', firebase_app);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='*' element={<NoPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
