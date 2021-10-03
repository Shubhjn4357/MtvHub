import {useState} from "react"
import {NavLink} from "react-router-dom";
import UseAnimation from "react-useanimations"
import MenuIcon from "react-useanimations/lib/menu"

import "./Nav.css";
const Navout=()=>{
  const [checked,setChecked] = useState(false)
  
  return(<>
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/MtvHub/">MTVHub</NavLink>
    <div className="rounded-circle navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="">
      <UseAnimation
        reverse={checked}
        onClick={() => {
          setChecked(!checked);
        }}
        size={30}
        strokeColor={checked?"#00ccff":"#ffffff"}
        animation={MenuIcon}
      />
      </span>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto my-auto mb-2 mb-lg-0 order-md-3 order-2">
        <li className="nav-item">
          <NavLink exact activeClassName="ActiveNav" className="nav-link" to="/MtvHub/Auth">SignUp/SignIn</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

  </>)
}
export default Navout;