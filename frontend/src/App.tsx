import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./app/styles/vars.css"
import ComingSoonPage from './react/pages/coming_soon.tsx'
import DebugPage from './react/pages/test'
import PhotoPage from "./react/pages/photo.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<ComingSoonPage/>}/>
          <Route path='/test' element={<DebugPage/>}/>
          <Route path='/im' element={<PhotoPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
