import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';

function CourseContent() {
    const { course_id } = useParams(); // Get course_id from URL
    const [contentDetails, setContentDetails] = useState([]);
    
  useEffect(() => {
    axios.get(`http://localhost:5000/api/LearningDetails?course_id=${course_id}`)
      .then(response => {
        setContentDetails(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching course :', error);
      });
  }, [course_id]);
  
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
        <form>
         <div className="container">
          <h3>Course Details</h3>
           <table className="table table-bordered">
             <thead>
                <tr>
                    <th>S No.</th>
                    <th>Study material</th>
                </tr>
             </thead>
            <tbody>
                {
                  
                contentDetails.map((Course, i) => {
                    return (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <Link to='Course.content_url'><td>{Course.content_url} </td></Link>                       
                        </tr>
                        )
                    })
                }
  
            </tbody>
        </table>
        </div>
        </form>
        </div>      
        </div>
        </div>
        
    );
  }
  


export default CourseContent
