import { Route, Router, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home.jsx'
import InfoPage from './pages/InfoPage.jsx'
import { BrowserRouter } from 'react-router-dom'
import MTLMap from "./components/Map.jsx"
// import Legend from "./components/Legend.jsx"

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/info" element={<InfoPage />} />
                <Route path="/map" element={<MTLMap />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
