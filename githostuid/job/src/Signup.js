import {React,useState} from 'react'
import {Link} from 'react-router-dom'
import './assets/css/main.css'
import axios from "axios"
// import './assets/bootstrap/css/bootstrap.min.css'
const Signup = () => {

const [user,setUser]=useState({
	username:"",
	password:"",
	confirmpassword:""
})
const submitdata=(e)=>{
	e.preventDefault()
	axios.post('http://localhost:8080/signup',user)
	.then(res=>{
		alert(res.data)
	})

}
const updateField=(e)=>{
	setUser({...user,[e.target.name]:e.target.value})
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
					<h2>Signup</h2>
					<form onSubmit={submitdata}>
						<div class="user-box">
							<input type="text" name="username" value={user.username} onChange={(e)=>{updateField(e)}} required="" />
							<label>Username</label>
						</div>
						<div class="user-box">
							<input type="password" name="password" value={user.password} onChange={(e)=>{updateField(e)}}  required="" />
							<label>Password</label>
						</div>
						<div class="user-box">
							<input type="password" name="confirmpassword" value={user.confirmpassword} onChange={(e)=>{updateField(e)}} required="" />
							<label>Confirm Password</label>
						</div>
					<button >signup</button>
					
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

export default Signup