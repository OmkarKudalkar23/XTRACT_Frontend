import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Door from './components/Door'
import Welcome from './components/Welcome'
import Login from './components/login'
import Landing_pg from './components/Landing_pg'
import Tracks from './components/Tracks'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_pg />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/door" element={<Door />} />
        <Route path="/login" element={<Login />} />
        <Route path="/track/:trackId" element={<Tracks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
