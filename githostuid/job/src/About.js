import React from 'react'
import './assets/css/main.css'
import Applyjob from './Applyjob'
// import './assets/bootstrap/css/bootstrap.min.css'
// import './assets/css/noscript.css'
// import './images/about-fullscreen-1-1920x700.jpg'
import images from './images/about-fullscreen-1-1920x700.jpg'
const About= () => {
  return (
    <div>
      <body class="is-preload">
  <div id="wrapper">
    <header id="header" class="alt">
      <a href="index.html" class="logo"><strong>Job Agency</strong> <span>Website</span></a>
      <nav>
        <a href="#menu">Menu</a>
      </nav>
    </header>
    <nav id="menu">
      <ul class="links">
        <li class="active"> <a href="index.html">Home </a> </li>

        <li> <a href="signup.html">SIGN UP</a> </li>

        <li> <a href="login.html">LOGIN</a> </li>

        <li> <a href="postjob.html">POST A JOB </a> </li>

        <li><a href="applyjob.html">APPLY FOR JOB</a></li>

        <li><a href="jobdisp.html">Job display</a></li>
        
        <li><a href="team.html">Contact Us</a></li>
      </ul>
    </nav>
      <div id="main" class="alt">
          <section id="one">
            <div class="inner">
              <header class="major">
                <h1>About Us</h1>
              </header>
              <span class="image main"><img src={images} alt="" /></span>
              <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
              <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>
            </div>
          </section>
      </div>
    <footer id="footer">
      <div class="inner">
        <ul class="icons">
          <li><a href="#" class="icon alt fa-twitter"><span class="label">Twitter</span></a></li>
          <li><a href="#" class="icon alt fa-facebook"><span class="label">Facebook</span></a></li>
          <li><a href="#" class="icon alt fa-instagram"><span class="label">Instagram</span></a></li>
          <li><a href="#" class="icon alt fa-linkedin"><span class="label">LinkedIn</span></a></li>
        </ul>
        <ul class="copyright">
          <li>Copyright © 2020 Company Name - Template by:</li>
          <li> <a href="https://www.phpjabbers.com/">PHPJabbers.com</a></li>
        </ul>
      </div>
    </footer>

  </div>

  <script src="assets/js/jquery.min.js"></script>
  <script src="assets/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/jquery.scrolly.min.js"></script>
  <script src="assets/js/jquery.scrollex.min.js"></script>
  <script src="assets/js/browser.min.js"></script>
  <script src="assets/js/breakpoints.min.js"></script>
  <script src="assets/js/util.js"></script>
  <script src="assets/js/main.js"></script>
    </body>
    </div>
  )
}

export default About