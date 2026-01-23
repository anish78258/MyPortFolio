import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import { Helmet } from 'react-helmet';



function App() {
  return (
    <div >
      <Helmet>
        <title>Mohd Anish Portfolio</title>
        <meta name="description" content="Mohd Anish's Portfolio showcasing projects and skills in data analytics and machine learning." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Helmet>
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
