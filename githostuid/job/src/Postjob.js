import { React, useState } from 'react'
import './assets/css/main.css'
import axios from "axios"
import {Link} from 'react-router-dom'
// import './assets/bootstrap/css/bootstrap.min.css'
const Postjob = () => {


	const [user, setUser] = useState({
		company: "",
		position: "",
		salary: "",
		workinghours: "",
		location: "",
		phoneno: ""

	})
	const submitdata = (e) => {
		e.preventDefault()
		axios.post('http://localhost:8080/postjob', user)
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
					</header>

			<div id="main" class="alt">
				<div class="login-box">
					<h2>Post for job</h2>
					<form onSubmit={submitdata}>
						<div class="user-box">
							<input type="text" name="company" value={user.company} onChange={(e) => { updateField(e) }} required="" />
							<label>company</label>
						</div>
						<div class="user-box">
							<input type="text" name="position" value={user.position} onChange={(e) => { updateField(e) }} required="" />
							<label>position</label>
						</div>
						<div class="user-box">
							<input type="text" name="salary" value={user.salary} onChange={(e) => { updateField(e) }} required="" />
							<label>salary</label>
						</div>
						<div class="user-box">
							<input type="text" name="workinghours" value={user.workinghours} onChange={(e) => { updateField(e) }} required="" />
							<label>working hours</label>
						</div>
						<div class="user-box">
							<input type="text" name="location" value={user.location} onChange={(e) => { updateField(e) }} required="" />
							<label>location</label>
						</div>
						<div class="user-box">
							<input type="text" name="phoneno" value={user.phoneno} onChange={(e) => { updateField(e) }} required="" />
							<label>phone no</label>
						</div>
						<button >post</button>

					</form>
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
		</div>

	)
}

export default Postjob