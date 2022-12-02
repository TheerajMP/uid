import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup'; 
import Login from './Login';
import Applyjob from './Applyjob'
import Postjob from './Postjob'
import Displayjob from './displayjob';
function App() {
  return (
    <div>
    
     <BrowserRouter>
     {/* <Home/> */}
     <Routes>
     <Route path="/" element={<Home/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Applyjob" element={<Applyjob/>}/>
      <Route path="/Postjob" element={<Postjob/>}/>
      <Route path="/displayjob" element={<Displayjob/>}/>
     </Routes>
     </BrowserRouter>
    </div> 
  )
}

export default App;
