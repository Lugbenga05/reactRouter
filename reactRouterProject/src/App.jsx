import NavBar from "./components/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Setting from "./pages/setting/Setting"
import LoginForm from "./components/LoginForm"




function App() {
  

  return (
    <>
          {/* <LoginForm/> */}

      <BrowserRouter>
        <NavBar/>
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/setting" element={<Setting/>} />
          <Route path="*" element={<LoginForm/>} />

        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
