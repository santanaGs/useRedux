// Imports
import React from "react"

// React Router Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Pages
import Login from "./assets/pages/Login"
import Home from "./assets/pages/Home"
import Contact from "./assets/pages/Contact"

// useRedux
import { Provider } from 'react-redux'

// Store
import { store } from "./store"

// Functional Components
function App() {

  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Provider>
    </>
  )
}

export default App
