//import {useState} from "react"
import {Link} from "react-router-dom";
import {useState} from "react";

import "./Nav.css";
const Navout=()=>{
  const [open,setOpen]=useState(false)
  
  return(<>
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">MTVHub</Link>
    <div onClick={()=>setOpen(!open)} className=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="material-icons menu-icon">
        {open?"menu_open":"menu"}
       </span>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto my-auto mb-2 mb-lg-0 order-md-3 order-2">
        <li className="nav-item">
          <Link className="nav-link" to="/Auth">SignUp/SignIn</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

  </>)
}
export default Navout;