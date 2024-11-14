import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './HorizontalMenu.css'


export default function Home() {
  return (
    <div>
      <nav class="nav navbar-nav">
        <ul class="horizontal-menu">
          <li><a href="">Home</a></li>
          <li><a href="">Course</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Content</a></li>
        </ul>  
      </nav>
   
  <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded w-25'>           
     <h2>Wellcome to language Learning Portal!!</h2>                      
          <form>                             
            <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Register now</Link>                   
            <p>Want to register</p>            
            <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Sign in</Link>  
            <p>Existing User </p>          
          </form>        
     </div>   
  </div> 
 </div>
                )}

