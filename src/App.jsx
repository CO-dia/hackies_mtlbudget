import './App.css'
import Home from './pages/Home.jsx'
import InfoPage from './pages/InfoPage.jsx'
import { BrowserRouter } from 'react-router-dom'
import BudgetPage from './pages/BudgetPage.jsx'
import RoastAIPage from './pages/RoastAIPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/info" element={<InfoPage />} />
                <Route path="/budget" element={<BudgetPage />} />
                <Route path="/buddyai" element={<RoastAIPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
