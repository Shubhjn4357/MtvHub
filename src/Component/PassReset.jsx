import Loader from "../Functions/Loader";
import {useState} from "react"
import fire from "../config/fire"
import { getAuth,sendPasswordResetEmail} from "firebase/auth";
import {useHistory} from "react-router-dom"

const PassReset=()=>{
  const history=useHistory()
  const [loading,setLoading]=useState(false)
  const [state,setState]= useState({
    email:"",
  })
  const HandleChange=(e)=>{
    if(e.target.value){
        setState({...state,[e.target.name]:e.target.value})
    }
    else{
    setState({...state,[e.target.name]:""})
    }
   }
   const Submit=async(e)=>{
     if(state.email){
    setLoading(true)
     e.preventDefault();
     e.stopPropagation()
     const auth = getAuth(fire);
sendPasswordResetEmail(auth, state.email)
  .then(() => {
    setLoading(false)
    // Password reset email sent!
    // ..
    history.push("/auth")
    window.alert("welcome please sigin to continue")

  })
  .catch((error) => {
    setLoading(false)
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorCode,errorMessage);
    window.alert(errorMessage)

  });
     }
     else{
      window.alert("pls fill all fields")
    }
     }
  return(
    <>
        <div id="main" className="container-fluid main-container rounded-3">
 <div className="row">
  <div className="col-12 center">
      <div className="Sorry For Inconvenience p-2">
    <h3 className="m-2 text-light">Reset Password</h3>

    <h4 className="text-light">welcome</h4>
<form className="text-center row">
<div className="form-floating mb-3 col">
  <input name="email" onChange={HandleChange} type="email" className="form-control   w-100" id="floatingInput" placeholder="name@example.com" value={state.email} required/>
  <label htmlFor="floatingInput">Email address<span className="text-danger">*</span></label>
</div>
<div className="form-btn">
<button onClick={Submit} type="submit" className=" btn btn-danger rounded-pill my-2 p-2 px-4 float-md-none float-start">{loading?<Loader/>:"Submit"}</button>
 </div>
    </form>
   </div>
  </div>
 </div>
</div>
    </>
    )
}
export default PassReset;