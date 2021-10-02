import {useParams} from "react-router-dom"
import useCustomFetch from "../useCustomFetch";
import Loader from "../Functions/Loader";
import Err from "../Functions/Err";
import Genere from "../Functions/Genere";
const Person=()=>{
  const{id}=useParams();
  const Data=useCustomFetch(`https://api.themoviedb.org/3/person/${id}?api_key=b8b691424543ca1b78129c0328e1cc4f&language=en-US`,{})
  const path=Data.response?`https://image.tmdb.org/t/p/original/${Data.response.profile_path}`:null;
  return(
  <>
  {Data.isLoading?<div><Loader/></div>:
Data.response?
 Data.response.name?
 <div className="container-fluid bg-dark">
 <div className="row">
   <div className="col-md-6 p-2">
   <h3 className="text-danger">Review</h3>
    <a href={Data.response.homepage}><img className="pl-img" src={path} alt="poster"/></a>
   </div>
   <div className="col-md-6 p-2">
    <div className="row">
    <div className="col-12 p-md-2">
    <span className="text-light display-5">{Data.response.known_for_department}</span>
    </div>
       <div className="col-12 d-flex justify-content-between">
        <h1 className="text-danger"><span className="text-warning ms-1">{Data.response.name?Data.response.name:Data.response.title}</span></h1>
        <em className="text-info">Birthday:{Data.response.birthday}{Data.response.deathday?` to ${Data.response.deathday}`:""}</em>
       </div>
       <div className="col-12 d-flex justify-content-between">
        <h5 className="text-danger"><span className="text-success ms-1">{Data.response.place_of_birth}</span></h5>
        <em className="text-danger">Popularity:{Data.response.popularity}</em>
       </div>
       <div className="col-12">
        <h6 className="text-secondary">BioGraphy:</h6>
        <p className="text-secondary">{Data.response.biography}</p>
       </div>
       <div className="col-12">
       <h6 className="text-secondary">Also known as:</h6>
       <Genere item={Data.response.also_known_as}
/>
       </div>
     </div>
   </div>
 </div>
 </div>
 :<Err text={"Data Not Found"} code={404}/>:<Err text={"Internal Server Error"} code={500}/>
 }
  </>
  )
}
export default Person;