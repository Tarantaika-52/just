import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./app/styles/vars.css"
import ComingSoonPage from './react/pages/coming_soon.tsx'
import DebugPage from './react/pages/test'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<ComingSoonPage/>}/>
          <Route path='/quote' element={<DebugPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
