import {useState} from "react"
  
 // import {NavLink,useHistory} from "react-router-dom"
import {db} from "../config/fire"
import {collection, addDoc } from "firebase/firestore"
import Loader from "../Functions/Loader";
const Contact=()=>{
  const [loading,setLoading]=useState(false)
  const [state,setState]= useState({
    email:"",
    msg:"",
    name:"",
  })
 /* useEffect(()=>{

 
    if(auth.currentUser){
      setState({...state,['email']:auth.currentUser.email})
      console.log(auth.currentUser.email)
      console.log(auth)
    }
  },[])*/
  const HandleChange=(e)=>{
    if(e.target.value){
        setState({...state,[e.target.name]:e.target.value})
    }
    else{
    setState({...state,[e.target.name]:""})
    }
   }
   const Submit=async(e)=>{
     if(state.msg){
    setLoading(true)
     e.preventDefault();
     e.stopPropagation()
     try {
        const docRef = await addDoc(collection(db, "users"),state);
setLoading(false)
setState({
    email:"",
    msg:"",
    name:"",})
        window.alert("Msg set succesfully: ", docRef.id);
      } catch (e) {
setLoading(false)
        window.alert("Error adding document: ", e);
      }
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
      <div className="contact p-2">
    <h3 className="m-2 text-light">Contact Us</h3>

    <h4 className="text-light">Please Give A Feeback</h4>
<form className="text-center row">
<div className="form-floating mb-3 col-md-6">
  <input name="name" onChange={HandleChange} type="text" className="form-control  w-100" id="floatingName" placeholder="Name..." value={state.name} required/>
  <label htmlFor="floatingName">Name</label>
</div>
<div className="form-floating mb-3 col-md-6">
  <input name="email" onChange={HandleChange} type="email" className="form-control   w-100" id="floatingInput" placeholder="name@example.com" value={state.email} required/>
  <label htmlFor="floatingInput">Email address<span className="text-danger">*</span></label>
</div>

<div className="form-floating col-12">
  <textarea name="msg" onChange={HandleChange} style={{"height":"8rem"}}  type="text" className="form-control w-100" id="floatingMsg" placeholder="Type Here" value={state.Msg} required/>
  <label htmlFor="floatingMsg">Type Here...</label>
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
export default Contact;