import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import InfoPage from './pages/InfoPage'
import BudgetPage from './pages/BudgetPage'
import RoastAIPage from './pages/RoastAIPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/info" element={<InfoPage />} />
                <Route path="/budget" element={<BudgetPage />} />
                <Route path="/buddyai" element={<RoastAIPage />} />
            </Routes>
        </Router>
    )
}

export default App
