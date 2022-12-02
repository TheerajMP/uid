import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './display.css'
const Displayjob = () => {
    const[data,setData]=useState([])
    let datas = []
    const displaydata=()=>{
    axios.get("http://localhost:8080/display")
    .then(res=>{
        datas = res.data
        setData(datas)
    })
    }

useEffect(()=>{
    displaydata()
    
},[])

  return (
    
    <div>
        <header id="header" class="alt">
						<a href="index.html" class="logo"><strong>Job PORTAL</strong> <span>Website</span></a>
						<nav>
						<ul class="links">
							<li > <Link  className='link' to="/"><span>HOME</span></Link> </li>
							<li> <Link className='link' to="/Signup"><span>SIGNUP</span></Link></li>
							<li> <Link className='link' to="/Login"><span>LOGIN</span></Link></li>
							<li> <Link className='link' to="/Postjob"><span>POST JOB</span></Link></li>
							<li> <Link className='link' to="/displayjob"><span>DISPLAY JOBS</span></Link></li>
							
						</ul>
						</nav>
					</header><br/><br/><br/><br/>
                    <br/><br/>        <table className='table'>
            <thead>
                <tr>
                    <th>COMPANY</th>
                    <th>POSITION</th>
                    <th>SALARY</th>
                    <th>WORKING TIME</th>
                    <th>LOCATION</th>
                    <th>PHONE NO</th>

                </tr>
            </thead>
            <tbody>
            {
                data.map(job=>(
                    <tr>
                        <td>{job.company}</td>
                        <td>{job.position}</td>
                        <td>{job.salary}</td>
                        <td>{job.workinghours}</td>
                        <td>{job.location}</td>
                        <td>{job.phoneno}</td>
                       <td><Link to="/applyjob"><button > APPLY</button></Link></td> 
                    </tr>
                ))
            }
            </tbody>
           
        </table>

    </div>


  )
}

export default Displayjob