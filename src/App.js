import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import RecipeId from './components/RecipeId'
import Category from './components/Category'
import SearchElements from './components/SearchElements'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={ <Home />} />

        <Route path='/:idMeal' element={ <RecipeId />} />
        <Route path='/category/:name' element={ <Category />} />
        <Route path='/search/:searchTerm' element={ <SearchElements />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App