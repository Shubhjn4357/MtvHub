import {NavLink} from "react-router-dom"
const Tab=(props)=>{

  const poster=props.item.backdrop_path?props.item.backdrop_path:props.item.profile_path;
  const path=`https://image.tmdb.org/t/p/original/${poster}`;
  return(
  <NavLink className="text-decoration-none" to={`/${props.item.media_type?props.item.media_type:props.type}/${props.item.id}`}>
  <div className="container bg-dark card rounded Tab">
  <div className="row card-body">
   <div className="col-12 col-md-6 p-0">
    <img src={path} className="card-img-top slide-img" alt="poster"/>
   </div>
   <div className="col-12 col-md-6 p-3" >
   {props.item.release_date?<span className="p-2">release:{props.item.release_date}</span>:""}
    <div className="d-flex justify-content-between">
     <span className="text-danger fs-6">{props.item.title?props.item.title:props.item.name}</span>
     <span className="text-warning">Ratting {props.item.vote_average}🌟</span>
    </div>
    <div className="d-block">
     <span className="fs-6 py-2 text-info">
      Overview
     </span>
     <p className="card-text d-block text-elipse text-secondary text-break small">
      {props.item.overview} 
     </p>
    </div>
    <div className="d-block">
      <p>Type: {props.item.media_type?props.item.media_type:props.type}</p>
    </div>
   </div>
  </div>
 </div></NavLink>
    )
}
export default Tab;