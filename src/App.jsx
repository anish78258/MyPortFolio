import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'



function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<  Home />} />
          <Route path='*' element={< NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
