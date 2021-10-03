import {useState} from "react"
import SearchBar from "./SearchBar"
import {NavLink,useHistory} from "react-router-dom";
import { getAuth,signOut} from "firebase/auth";
import fire from "../config/fire";
import UseAnimation from "react-useanimations"
import MenuIcon from "react-useanimations/lib/menu"
import "./Nav.css";
const Navigation=()=>{
  const [checked,setChecked] = useState(false)
 const history=useHistory()
  const LogOut=()=>{
    const confirmation=window.confirm("Are You Sure?");
    if(confirmation){
    const auth = getAuth(fire);
    signOut(auth).then(() => {
      history.push("/MtvHub/auth");
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
          <NavLink exact activeClassName="ActiveNav" className="nav-link" aria-current="page" to="/MtvHub/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="ActiveNav" className="nav-link" to="/MtvHub/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="ActiveNav" className="nav-link" to="/MtvHub/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="ActiveNav" className="nav-link" to="/MtvHub/watch">Watch</NavLink>
        </li>
        <li className="nav-item">
          <NavLink onClick={LogOut} exact activeClassName="ActiveNav" className="nav-link" to="/MtvHub/">LogOut</NavLink>
        </li>
      </ul>
      <SearchBar/>
    </div>
  </div>
</nav>

  </>)
}
export default Navigation;