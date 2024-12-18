import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./assets/vars.css"
import CommingSoonPage from './react/pages/comming_soon'
import DebugPage from './react/pages/test'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CommingSoonPage/>}/>
        <Route path='/test' element={<DebugPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
