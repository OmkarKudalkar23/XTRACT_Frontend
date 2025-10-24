import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Loader from './components/Loader'
import React, { Suspense, lazy } from 'react';
import Cursor from './components/Cursor';
const Door = lazy(() => import('./components/Door'));
const Welcome = lazy(() => import('./components/Welcome'));
const Login = lazy(() => import('./components/login'));
const Landing_pg = lazy(() => import('./components/Landing_pg'));
const Tracks = lazy(() => import('./components/Tracks'));

function App() {
  return (
    <div className="cursor-none">
      <BrowserRouter>
        <Cursor></Cursor>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Landing_pg />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/door" element={<Door />} />
            <Route path="/login" element={<Login />} />
            <Route path="/track/:trackId" element={<Tracks />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
