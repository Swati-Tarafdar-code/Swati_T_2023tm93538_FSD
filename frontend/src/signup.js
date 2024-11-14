import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Validation from './signUpValidation'
import './HorizontalMenu.css'
import axios from 'axios'

function Signup() {
  const [values,setValues] = useState({
    name:'',
    email:'',
    password:''
})

const navigate = useNavigate();
const [errors,setErrors] = useState({})
const handleInput = (event)=>{
    setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
}

const handleSubmit =(event)=>{
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.name==="" && errors.email ==="" && errors.password===""){
      axios.post('http://localhost:5000/api/users/signup', values)
      .then(res => {
        console.log('Check')
        navigate('/login');
        alert("Successfully Registered");     
      })
      .catch(err => console.log(err));
    }
}
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
    <div className='bg-white p-3 rounded w-35 large-div'>
      <h2>Sign Up</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className='mb-3'>
                <label htmlFor="name"><strong>Name</strong></label>
                <input type="text" placeholder='Enter Name' name='name'
                onChange={handleInput} className=' form-control rounded-0'/>
                 {errors.name && <span className='text-danger'>{errors.name}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder='Enter Email' name='email'
                onChange={handleInput} className=' form-control rounded-0'/>
                 {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" placeholder='Enter Password' name='password'
                onChange={handleInput} className='form-control rounded-0'/>
                 {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0'>Sign Up</button>
            <p>You are agree to a our terms and policies</p>
            <Link to='/login' className='btn btn-default border w-100 bg-1ight rounded-0 text-decoration-none'>Log in</Link>
        </form>
    </div>
</div>
</div>
  )
}
export default Signup




// import React, {useState} from 'react'

// import { Link, useNavigate } from 'react-router-dom'

// import Validation from './signUpValidation';

// import axios from 'axios'


// function Signup() {
//     const [values, setValues] = useState({        
//       name: '',        
//       email: '',        
//       password: ''    
//     })    
//     const navigate = useNavigate();    
//     const [errors, setErrors] = useState({})    
//     const handleInput = (event) => {        
//       setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))    
//     }    
//     const handleSubmit = (event) => {        
//       event.preventDefault();        
//       const err = Validation(values);  
//       setErrors(err);         
//       if(err.name === "" && err.email === "" && err.password === "") {            
//         axios.post('http://localhost:5000/signup', values)            
//         .then(res => {                
//           navigate('/');            
//         })            
//         .catch(err => console.log(err));        }    }
//   return (    
//   <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>        
//   <div className='bg-white p-3 rounded w-25'>            
//     <h2>Sign-Up</h2>            
//     <form action="" onSubmit={handleSubmit}>                
//       <div className='mb-3'>                    
//         <label htmlFor="name"><strong>Name</strong></label>                    
//         <input type="text" placeholder='Enter Name' name='name'                   
//          onChange={handleInput} className='form-control rounded-0'/>                    
//          {errors.name && <span className='text-danger'> {errors.name}</span>}                
//          </div>                
//          <div className='mb-3'>                   
//            <label htmlFor="email"><strong>Email</strong></label>                    
//            <input type="email" placeholder='Enter Email' name='email'                    
//            onChange={handleInput} className='form-control rounded-0'/>                    
//            {errors.email && <span className='text-danger'> {errors.email}</span>}                
//            </div>                
//            <div className='mb-3'>                    
//             <label htmlFor="password"><strong>Password</strong></label>                    
//             <input type="password" placeholder='Enter Password' name='password'                    
//             onChange={handleInput} className='form-control rounded-0'/>                    
//             {errors.password && <span className='text-danger'> {errors.password}</span>}                
//             </div>                
//             <button type='submit' className='btn btn-success w-100 rounded-0'> Sign up</button>               
//              <p>You are agree to aour terms and policies</p>                
//              <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>           
//               </form>        
//               </div>    
//               </div>  
//               )}
// export default Signup
