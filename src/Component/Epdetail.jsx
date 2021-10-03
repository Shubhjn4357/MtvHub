import {useParams,useHistory} from "react-router-dom"
import useCustomFetch from "../useCustomFetch";
import Loader from "../Functions/Loader";
import Err from "../Functions/Err";
import Person from "../Functions/Person";
const Epdetail=()=>{
  const{id,s,ep}=useParams();
  const history=useHistory();
  const Data=useCustomFetch(`https://api.themoviedb.org/3/tv/${id}/season/${s}/episode/${ep}?api_key=b8b691424543ca1b78129c0328e1cc4f&language=en-US`,{})
  const path=Data.response?`https://image.tmdb.org/t/p/original/${Data.response.still_path}`:null;
  const Pdetail=(e)=>{
    history.push(`/MtvHub/person/${e.id}`)
  }
  return(
  <>
  {Data.isLoading?<div><Loader/></div>:
Data.response?
 Data.response.name?
 <div className="container-fluid bg-dark">
 <div className="row">
   <div className="col-md-6 p-2">
   <h3 className="text-danger">Review</h3>
    <a href={Data.response.homepage}><img className="slide-img" src={path} alt="poster"/></a>
   </div>
   <div className="col-md-6 p-2">
    <div className="row">
    <div className="col-12 p-md-2">
    <span className="text-light display-5">{Data.response.season_number!==0?`Season ${Data.response.season_number}`:`Special`}</span>
    </div>
       <div className="col-12 d-flex justify-content-between">
        <h1 className="text-danger"><span className="text-warning ms-1">{Data.response.name?Data.response.name:Data.response.title}</span></h1>
        <em className="text-warning">Air Date:{Data.response.air_date}</em>
       </div>
       <div className="col-12">
        <h6 className="text-secondary">Overview:</h6>
        <p className="text-secondary">{Data.response.overview}</p>
       </div>
     </div>
   </div>
 </div>
  <div className="row">
   <div className="col-12">
   <h3 className="text-info">Crew</h3>
    <Person item={Data.response.crew}
            select={Pdetail}/>
   </div>
   <div className="col-12">
   <h3 className="text-info">Stars</h3>
    <Person item={Data.response.guest_stars}
            select={Pdetail}/>
   </div>
  </div>
 </div>
 :<Err text={"Data Not Found"} code={404}/>:<Err text={"Internal Server Error"} code={500}/>
 }
  </>
  )
}
export default Epdetail;