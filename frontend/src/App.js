// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Login from './login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './signup'
import Home from './home'
import SelectLanguage from './selectLanguage'
import CourseContent from './courseContent'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>  
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/selectLanguage' element={<SelectLanguage/>}></Route>
      <Route path="/courseContent/:course_id" element={<CourseContent/>}></Route>
      
    </Routes>
  
  </BrowserRouter>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

  )
}

export default App;
