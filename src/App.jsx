import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';

// Chamar SCORM Provider

// Components
import Navbar from './components/Navbar';

// Rotas
import Home from './pages/Home'
import GooglePage from './pages/GooglePage'

// Import SCORM Hook
import useScorm from './hooks/useScorm'


function App() {
  const { scorm } = useScorm()

  useEffect(() => {
    (async function () {
      await scorm.init()
    })()

    scorm.setScore('100')
  }, [scorm])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/*' element={<GooglePage />} />
      </Routes>
    </div>
  )
}

export default App;
