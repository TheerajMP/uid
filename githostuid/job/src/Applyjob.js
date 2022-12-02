import { React, useState } from 'react'
import './assets/css/main.css'
import axios from "axios"
import {Link} from 'react-router-dom'
// import './assets/bootstrap/css/bootstrap.min.css'
import './applyjob.css'
const Applyjob = () => {

	const [user, setUser] = useState({
		Name: "",
		email: "",
		company: "",
		positionyouwish: "",
		extraskills:""

	})
	const submitdata = (e) => {
		e.preventDefault()
		axios.post('http://localhost:8080/applyjob', user)
			.then(res => {
				alert(res.data)
			})

	}
	const updateField = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}





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
					</header><br/><br/>
			<div id="main" class="alt">
				<div class="login-box">
					<h2>Apply for job</h2>
					<form onSubmit={submitdata}>
						<div class="user-box">
							<input type="text" name="name" value={user.name} onChange={(e) => { updateField(e) }} required="" />
							<label>Name:</label>
						</div>
						<div class="user-box">
							<input type="text" name="email" value={user.email} onChange={(e) => { updateField(e) }} required="" />
							<label>Email:</label>
						</div>
						<div class="user-box">
							<input type="text" name="company" value={user.company} onChange={(e) => { updateField(e) }} required="" />
							<label>company</label>
						</div>
						<div class="user-box">
							<input type="text" name="positionyouwish" value={user.positionyouwish} onChange={(e) => { updateField(e) }} required="" />
							<label>position You wish:</label>
						</div>
						<div class="user-box">
							<input type="text" name="extraskills" value={user.extraskills} onChange={(e) => { updateField(e) }} required="" />
							<label>extra skills</label>
						</div>
						<button class="login-box">Apply Now</button>
					</form>
				</div>
			</div>
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/bootstrap/js/bootstrap.bundle.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

		</div>

	)
}

export default Applyjob