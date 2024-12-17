import './App.css'
import "./assets/vars.css"

function App() {

  return (
    <>
      <div className="title">
        <h1 className='comming_soon_title'>{"Coming soon"}</h1>
      </div>

      <div className="sub">
        <h4 className='subtitle'>{"in-dev"}</h4>
        <h4 className='subtitle'>{" | "}</h4>
        <a className='subtitle' href='https://github.com/Tarantaika-52/just'>{"git"}</a>
      </div>

      <img className='background' src='https://i.pinimg.com/originals/11/f3/f3/11f3f352a9fc8c297f02cfc993fe06b3.gif'/>
    </>
  )
}

export default App
