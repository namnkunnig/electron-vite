import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Controls from '../Controls/Controls'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Controls />} />
      </Routes>
    </Router>
  )
}
