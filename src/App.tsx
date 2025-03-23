
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'

function App() {
  return (
    <div className="container">
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    </div>
  )
}

export default App
