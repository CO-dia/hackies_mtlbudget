import { Route, Router, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home.jsx'
import InfoPage from './pages/InfoPage.jsx'
import { BrowserRouter } from 'react-router-dom'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/info" element={<InfoPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
