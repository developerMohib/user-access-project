
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
// import Home from './Pages/Home'

function App() {

  return (
    <>
      <Navbar> </Navbar>
      <Outlet> </Outlet>
      <Footer> </Footer>
    </>
  )
}

export default App
