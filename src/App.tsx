import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import {firebase_app} from './data/firebase';
import {Home} from './pages/Home';
import {Login} from './pages/Login';
import {NoPage} from './pages/NoPage';
import {Signup} from './pages/Signup';
import {Course} from "./pages/Course";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/course/:name/:block/:lesson' element={<Course />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='*' element={<NoPage />} />
            </Routes>
        </Router>
    );
}

export default App;
