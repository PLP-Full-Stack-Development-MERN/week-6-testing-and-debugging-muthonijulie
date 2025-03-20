import React from 'react'
import BugForm from './components/BugForm'
import BugList from './components/BugList'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'

function App() {
  return (
    <ErrorBoundary>
       <BugForm/>
      <BugList/>
    </ErrorBoundary>
     
  
  )
}

export default App
