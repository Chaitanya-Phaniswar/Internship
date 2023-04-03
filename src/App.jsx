import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Topbar from './components/Topbar' 
import Home from './components/Home'
import Offerings from './components/Offerings'
import OurMembers from './components/OurMembers'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import Form from './components/Form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [active,setActive]=useState('home')
  return (
    <>
    <Topbar state={active} setState={setActive}/>
    <div className='main'>
    <Home />
    <Offerings />
    <OurMembers />
    <Blogs />
    <Form />
    </div>
    <Footer state={active} setState={setActive}/>
    </>
  )
}

export default App
