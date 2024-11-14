import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function SelectLanguage() {
    const [courseIds, setCourseIds] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [courseDetails, setCourseDetails] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
   // Fetch course details table from backend API
    const fetchData = async () => {
        try {
            const result = await axios("http://localhost:5000/api/selectLanguage");
            //console.log(result.data);
            setCourseDetails(result.data)
        } catch (err) {
            console.log("somthing Wrong");
        }
    }
  
    // Fetch course IDs from backend API
    useEffect(() => {
      axios.get('http://localhost:5000/api/selectLanguage')
        .then(response => {
          setCourseIds(response.data);
        })
        .catch(error => {
          console.error('Error fetching course IDs:', error);
        });
    }, []);
  
    const handleChange = (event) => {
      setSelectedCourse(event.target.value);
    };
    
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page reload on form submission
        console.log('Selected Value:', selectedCourse); // Use selected value as needed
        axios.get(`http://localhost:5000/api/LearningDetails?course_id=${selectedCourse}`)
      .then(res => {
        console.log('Check')
        navigate(`/courseContent/${selectedCourse}`);
        alert("GET READY WITH CONTENT!!");     
      })
      .catch(err => console.log(err));
      };
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
          <h2>Course Details</h2>
           <table className="table table-bordered">
             <thead>
                <tr>
                    <th>S No.</th>
                    <th>Course ID</th>
                    <th>Language</th>
                    <th>Level</th>
                </tr>
             </thead>
            <tbody>
                {
                courseDetails.map((Course, i) => {
                    return (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{Course.course_id} </td>
                            <td>{Course.language} </td>
                            <td>{Course.level} </td>
                        </tr>
                        )
                    })
                }
  
            </tbody>
        </table>
        </div>
        </form>
        <h3>Submit to expore content</h3>
           <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <select value={selectedCourse} onChange={handleChange}>
                    <option value="">Select a course id</option>
                    {courseIds.map(Courses => (
                    <option key={Courses.course_id} value={Courses.course_id}>
                        {Courses.course_id}
                    </option>
                    ))}
                </select>
                <div><button type='submit' className='btn btn-success w-40 rounded-0'>Submit</button></div>
            </div>
           </form>
        </div>
        </div>
        </div>
        
    );
  }
  

export default SelectLanguage;

