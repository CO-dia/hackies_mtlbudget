import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import InfoPage from './pages/InfoPage'
import BudgetPage from './pages/BudgetPage'
import RoastAIPage from './pages/RoastAIPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

    return (
        <>
            <Home />
        </>
    )
}

export default App
