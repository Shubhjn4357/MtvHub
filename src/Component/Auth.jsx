
import {useState} from "react"
  import {signInWithPopup,GoogleAuthProvider ,FacebookAuthProvider,TwitterAuthProvider, getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword} from "firebase/auth";
  import {set,ref} from 'firebase/database';
  import {NavLink,useHistory} from "react-router-dom"
import fire,{database} from "../config/fire"
import "./Auth.css";
import Loader from "../Functions/Loader";


const Auth=()=>{
  const [state,setState]= useState({
    email:"",
    password:"",
    name:"",
    number:""
  })
   const history=useHistory()
  const [Toggle,setToggle]=useState(true)
  const [Loading,setLoading]=useState(false)
const TwitterLog=()=>{
  const auth = getAuth(fire);
  const provider = new TwitterAuthProvider();
   setLoading(true)

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const secret = credential.secret;
    // The signed-in user info.
    const user = result.user;
    // ...
    console.log(user,secret,token, credential)
    setLoading(false)
    history.push("/MtvHub/")
    window.alert("welcome")
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    setState({email:"",
    password:"",
    name:"",
    number:""})
setLoading(false)
    console.log(errorCode,errorMessage,email,credential)
   window.alert(errorCode,errorMessage,email,credential)
  setToggle(!Toggle);
  });
}  
const FacebookLog=()=>{
const auth = getAuth(fire);
  auth.languageCode = 'it';
  const provider = new FacebookAuthProvider();
   setLoading(true)
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
    console.log(user,token, credential)
    setLoading(false)
    history.push("/MtvHub/")
    window.alert("welcome ")
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    setState({email:"",
    password:"",
    name:"",
    number:""})
setLoading(false)
    console.log(errorCode,errorMessage,email,credential)
   window.alert(errorCode,errorMessage,email,credential)
  setToggle(!Toggle);
  });
}  
const GoogleLog=()=>{
const auth = getAuth(fire);
auth.languageCode = 'it';
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
     setLoading(true)

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
    console.log(user,token, credential)
    setLoading(false)
    history.push("/MtvHub/")
    window.alert("welcome")
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    setState({email:"",
    password:"",
    name:"",
    number:""})
setLoading(false)
    console.log(errorCode,errorMessage,email,credential)
   window.alert(errorCode,errorMessage,email,credential)
  setToggle(!Toggle);
  });
}
function signin(e){
     e.preventDefault();
     e.stopPropagation()
     setLoading(true)
const auth = getAuth(fire);
signInWithEmailAndPassword(auth,state.email, state.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user)
    setLoading(false)
    history.push("/MtvHub/")
    window.alert("welcome Back")
  })
  .catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    setState({email:"",
    password:"",
    name:"",
    number:""})
setLoading(false)
    console.log(errorCode,errorMessage)
   window.alert(errorCode,errorMessage)
  setToggle(!Toggle);
  });
  }
function signup(e){
setLoading(true)
     e.preventDefault();
     e.stopPropagation()
const auth = getAuth(fire);

createUserWithEmailAndPassword(auth,state.email, state.password)
  .then((userCredential) => {
    
    // Signed in 
    const user = userCredential.user;
    // ...
  const CreateUser=()=>{ 
    set(ref(database, '/User'), {
     state
  });
  }
CreateUser();
    console.log(user)
    setLoading(false)
    history.push("/MtvHub/")
    window.alert("ThankYou for Joining Us")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setLoading(false)
    setState({email:"",
    password:"",
    name:"",
    number:""})
    console.log(errorCode,errorMessage)
    window.alert(errorCode,errorMessage)
    setToggle(!Toggle);
  });
  }  
  const HandleChange=(e)=>{
    if(e.target.value){
    e.target.classList.remove(".is-invalid")
    e.target.classList.add(".is-valid")
    
    setState({...state,[e.target.name]:e.target.value})
    }
    else{
    e.target.classList.add(".is-invalid")
    e.target.classList.remove(".is-valid")
    setState({...state,[e.target.name]:""})
    }
   }
   const Toggler=()=>{
     setToggle(!Toggle);
   }
  return(
    <>
<div id="main" className={Toggle?"container-fluid main-container rounded-3":"container-fluid main-container right-active rounded-3"}>
 <div className="row">
  <div className="col-6">
   <div className="signup">
    <h3 className="m-2">Sign Up</h3>
    <div className="Social">
     <NavLink className="ic" to="#" onClick={FacebookLog}><i className="fab sc-ic fa-facebook"></i></NavLink>
     <NavLink className="ic" to="#" onClick={GoogleLog}><i className="fab sc-ic fa-google"></i></NavLink>
     <NavLink className="ic" to="#" onClick={TwitterLog}><i className="fab sc-ic fa-twitter"></i></NavLink>
    </div>
    <h4>or use your Account</h4>
<form className="form-floating text-center ">
<div className="form-floating has-validation mb-3">
  <input name="name" onChange={HandleChange} type="text" className="form-control w-100" id="floatingName" placeholder="Name..." value={state.Name} required/>
  <label htmlFor="floatingName">Name...<span className="text-danger">*</span></label>
</div>
<div className="form-floating has-validation mb-3">
  <input name="number" onChange={HandleChange} type="number" className="form-control w-100" id="floatingNum" placeholder="+00000000000" value={state.Num} required/>
  <label htmlFor="floatingNum">Number...<span className="text-danger">*</span></label>
</div>
<div className="form-floating has-validation mb-3">
  <input name="email" state="outev" onChange={HandleChange} type="email" className="form-control w-100" id="floatingInput" placeholder="name@example.com" value={state.email} required/>
  <label htmlFor="floatingInput">Email address<span className="text-danger">*</span></label>
</div>
<div className="form-floating has-validation">
  <input name="password" state="outpv" onChange={HandleChange} type="password" className="form-control w-100"   id="floatingPassword" placeholder="Password" value={state.password} required/>
  <label htmlFor="floatingPassword">Password<span className="text-danger">*</span></label>
</div>
<div className="line-container my-2"><div className="fw bg-dark text-light p-2">OR</div><hr/></div>
<div className="w-100" onClick={Toggler}><span><NavLink to="#" className="text-decoration-none text-danger">Already Have Account?</NavLink></span></div>

<button onClick={signup} type="submit" className="btn btn-danger rounded-pill my-1 p-2 px-4">{Loading?<Loader/>:"Sign Up"}</button>
    </form>
   </div>
  </div>
  <div className="col-6 center">
      <div className="signin">
    <h3 className="m-2">Sign in</h3>
    <div className="Social">
     <NavLink className="ic" to="#" onClick={FacebookLog}><i className="fab sc-ic fa-facebook"></i></NavLink>
     <NavLink className="ic" to="#" onClick={GoogleLog}><i className="fab sc-ic fa-google"></i></NavLink>
     <NavLink className="ic" to="#" onClick={TwitterLog}><i className="fab sc-ic fa-twitter"></i></NavLink>
    </div>
    <h4>or use your Account</h4>
<form className="form-floating text-center">
<div className="form-floating has-validation mb-3">
  <input name="email" state="inev" onChange={HandleChange} type="email" className="form-control  w-100" id="floatingInput" placeholder="name@example.com" value={state.email} required/>
  <label htmlFor="floatingInput">Email address<span className="text-danger">*</span></label>
</div>
<div className="form-floating has-validation">
  <input name="password" state="inpv" onChange={HandleChange}  type="password" className="form-control w-100" id="floatingPassword" placeholder="Password" value={state.password} required/>
  <label htmlFor="floatingPassword">Password <span className="text-danger">*</span></label>
</div>
<div className="w-100"><span><NavLink to="/MtvHub/passreset" className="text-decoration-none text-danger my-2">Forget Your Password?</NavLink></span></div>
<div className=" line-container my-2"><div className="fw bg-dark text-light p-2">OR</div><hr/></div>
<div className="w-100" onClick={Toggler}><span><NavLink to="#" className="text-decoration-none text-danger my-2">Or Create Account</NavLink></span></div>
<button onClick={signin} type="submit" className=" btn btn-danger rounded-pill my-1 p-2 px-4">Sign In</button>
    </form>
   </div>
  </div>
  
  <div className="overlay-panel">
  <div id="overlay" className=" overlay overlay-left">
   <h1 className="text-light">Welcome Back</h1>
   <p className="t-6 text-light"> To keep connected with us please login with your info   </p>

   <button onClick={Toggler} id="signin" className=" btn btn-outline-light rounded-pill ghost">Sign Up</button>
   
  </div>
  <div id="overlay" className=" overlay overlay-right">
 <h1 className="text-light">Hello Friends</h1>
   <p className="t-6 text-light">Enter Details and start Journey with us</p>

  <button onClick={Toggler} id="signup" className=" btn btn-outline-light rounded-pill ghost">{Loading?<Loader/>:"Sign In"}</button>

    </div>
 </div>
 </div>
</div>
    </>
    )
}
export default Auth;