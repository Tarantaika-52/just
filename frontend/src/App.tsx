import './App.css'
import "./assets/vars.css"

function App() {

  const bg_array = [
    'https://i.pinimg.com/originals/11/f3/f3/11f3f352a9fc8c297f02cfc993fe06b3.gif',
    "https://i.pinimg.com/originals/50/53/5c/50535c6c1c6c76f3719d975a272945c7.gif",
    "https://i.pinimg.com/originals/d3/5c/cd/d35ccd51f367825006f3534751e87154.gif",
    "https://i.pinimg.com/originals/66/e8/49/66e8498d24c8e5b03ffd6647cd8e6076.gif"
  ]

  function getRandomInt(max:Number) {
    return Math.floor(Math.random() * Number(max));
  }

  return (
    <>
      <div className="title">
        <h1 className='comming_soon_title'>{"Coming soon"}</h1>
      </div>

      <div className="sub">
        <a className='subtitle' href='https://github.com/Tarantaika-52/just'>{"github"}</a>
        <h4 className='subtitle'>{"/"}</h4>
      </div>

      {/* <img className='background' src='https://i.pinimg.com/originals/11/f3/f3/11f3f352a9fc8c297f02cfc993fe06b3.gif'/> */}
      <img className='background' src={bg_array[getRandomInt(bg_array.length)]}/>
    </>
  )
}

export default App
