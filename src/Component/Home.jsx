import Animate from "../Animate"
import Loader from "../Functions/Loader";
import {useEffect} from "react"
import Card from "../Functions/card-container";
import useCustomFetch from "../useCustomFetch";
import animation from "../animations/astronaout.json"
import Err from "../Functions/Err";
import {Link} from "react-router-dom"
import { getAuth} from "firebase/auth";
import {Context} from "../App"
import {useContext} from "react"
import fire from "../config/fire"
const Home=()=>{
  const Base_Link=`https://api.themoviedb.org/3/`;
  const api_Key=`?api_key=b8b691424543ca1b78129c0328e1cc4f`
  const AllTrending=useCustomFetch(`${Base_Link}trending/all/day${api_Key}`,{})
const{State,Dispatch}=useContext(Context)
 //const [State,setState]= useState(false)  
 useEffect(()=>{ 
   function authenticate(){
  const auth = getAuth(fire);
  if(auth.currentUser){
    return Dispatch({type:"User",payload:true})
  }
  else{
    return Dispatch({type:"User",payload:false})
  }}
  authenticate();
 },[Dispatch])
return(
<>
<div className="container-fluid">
 <div className="row">
  <div className="col-md-6">
  <div className="text-italic text-bold fs-1 text-danger">
  Trending
  </div>
  {AllTrending.isLoading?<Loader/>:
  AllTrending.response?
   <div className="scroll-boxX">
<Card item={AllTrending.response.results}/>
  </div>:<div><Err text={"Data Not Found"} code={404}/></div>
  }
  </div>
 <div className="col-md-6 center">
 <div className="home">
 <div className="animation w-100">
 <Animate animate={animation}/>
 </div>
 <div className="welcomeSlide center p-5">
 <div className="d-block p-5">
 <p><strong className=" text-light text-italic text-bold text-glow mt-2">
 welcome to The MtvHub
 </strong></p>
 <p><strong className=" text-light text-italic text-bold text-glow mb-2">
 Here You Can find All Movies,Tv Show & celebrity Details so Lets Get Started
 </strong></p>
 <Link to={State?"/watch":"/auth"} className="btn btn-dark btn-pill m-2">{State?"Lets Watch":"Get Started"}</Link>

 </div>
 </div>
 </div>
 </div>
 </div>
</div>
    </>)
}
export default Home;