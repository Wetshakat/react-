import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCounter] = useState(0);

  const setCounterValue = () => {
    setCounter(count+1);
  }
  // function AppTwo() {
  //   const [count, setCounter] = useState(0);
  const deValue = () => {
    setCounter(count-1);
  }

  const title ='Racy Exchange';
  const services ='We Pick We Buy & We Exchange';
  const whatsappLink = 'https://wa.me/qr/EJTFC3NQX6SSK1';
  const xLink = 'https://x.com/racy_Ex';
  const facebookLink ='https://www.facebook.com/ishaku.dyelshak.7'

  return (
    <>
     <div className='whole'>
     <div className="app"> 
    <div className="content">
      <h1>{ title }</h1>
      <p>{ services }</p>
      <div className='btn'>
        <a href={whatsappLink}><button>WhatsApp</button></a>
        <a href={facebookLink}><button>Facebook</button></a>
        <a href={xLink}><button>X</button></a>
        <a onClick={setCounterValue}><button>{count}+</button></a>
        <a onClick={deValue}><button>{count}-</button></a>
      </div>
    </div>
     </div>
     </div>
    </>
  )
}

export default App
import './App.css'