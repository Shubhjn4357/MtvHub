import {useParams,useNavigate} from "react-router-dom"
import useCustomFetch from "../useCustomFetch";
import Loader from "../Functions/Loader";
import Err from "../Functions/Err";
import EPslider from "../Functions/EPslider";
const TvEp=()=>{
  const{id,s}=useParams();
  const navigate=useNavigate();
  const Data=useCustomFetch(`https://api.themoviedb.org/3/tv/${id}/season/${s}?api_key=b8b691424543ca1b78129c0328e1cc4f&language=en-US`,{})
  const path=Data.response?`https://image.tmdb.org/t/p/original/${Data.response.poster_path}`:null;
  const EpDetail=(e)=>{
    navigate(`/ep/${id}/${e.season_number}/${e.episode_number}`)
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
    <EPslider item={Data.response.episodes} 
              select={EpDetail}/>
   </div>
  </div>
 </div>
 :<Err text={"Data Not Found"} code={404}/>:<Err text={"Internal Server Error"} code={500}/>
 }
  </>
  )
}
export default TvEp;