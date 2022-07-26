import {NavLink} from "react-router-dom"
import Err from "../Functions/Err";
const CardContainer=(props)=>{
  return(
   <>
   {props.item?
   props.item.map((e,k)=>{
const poster=e.backdrop_path?e.backdrop_path:e.profile_path;
  const path=`https://image.tmdb.org/t/p/original/${poster}`;

   return(
   <div className="card bg-dark my-2" key={k}>
    <div className="card-body">
         <NavLink className="text-decoration-none" to={`/${e.media_type?e.media_type:e.type}/${e.id}`}>
     <div className="row">

     <div className="col-4">
         <img className="img-fit" src={path} alt="post"/>
     </div>
     <div className="col-8">
     <div className="card-title text-light">
      {e.title?e.title:e.name}
     </div>
      <div className="rating text-warning">
      {e.vote_average}/10🌟
     </div>
     <div className="text-truncate text-muted">
      {e.overview}
     </div>
     </div>

     </div>
     </NavLink>     
    </div>
   </div>)
   }):<div><Err text={"Data Not Found"} code={404}/></div>}
   </> )
}
export default CardContainer;