//import {useState} from "react"
import SearchBar from "./SearchBar"
import {Link,useNavigate} from "react-router-dom";
import { getAuth,signOut} from "firebase/auth";
import fire from "../config/fire";
import {useState} from "react";
import "./Nav.css";
const Navigation=()=>{
  const [open,setOpen]=useState(false)
 const navigate=useNavigate()
  const LogOut=()=>{
    const confirmation=window.confirm("Are You Sure?");
    if(confirmation){
    const auth = getAuth(fire);
    signOut(auth).then(() => {
      navigate("/auth");
    }).catch((error) => {
  // An error happened.
  console.log(error)
    });
    
   }
   else{
     console.log(confirmation);
   }
  }
  return(<>
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">MTVHub</Link>
    <div onClick={()=>setOpen(!open)}  className=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     
      <span className="material-icons menu-icon">
        {open?"menu_open":"menu"}
       </span>
      
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto my-auto mb-2 mb-lg-0 order-md-3 order-2">
        <li className="nav-item">
          <Link  className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/watch">Watch</Link>
        </li>
        <li className="nav-item" onClick={LogOut} >
          <Link  className="nav-link" to="/">LogOut</Link>
        </li>
      </ul>
      <SearchBar/>
    </div>
  </div>
</nav>

  </>)
}
export default Navigation;