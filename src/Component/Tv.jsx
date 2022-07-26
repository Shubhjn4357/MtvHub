import {useParams,useHistory} from "react-router-dom"
import useCustomFetch from "../useCustomFetch";
import Tvslide from "../Functions/Tvslide";
import Genere from "../Functions/Genere";
import Loader from "../Functions/Loader";
import Err from "../Functions/Err";
const Tv=()=>{
  const history=useHistory()
  const{id}=useParams();
  const Data=useCustomFetch(`https://api.themoviedb.org/3/tv/${id}?api_key=b8b691424543ca1b78129c0328e1cc4f&language=en-US`,{})
  const path=Data.response?`https://image.tmdb.org/t/p/original/${Data.response.backdrop_path}`:null;
  const Tvdetail=(e)=>{
    console.log(e)
    history.push(`/tvep/${id}/${e.season_number}`)
  }
  const EpDetail=(e)=>{
    history.push(`/ep/${id}/${e.season_number}/${e.episode_number}`)
  }
  
  return(
    <>
{Data.isLoading?<div><Loader/></div>:
Data.response?
 Data.response.name ?
 
<div className="container-fluid bg-dark">
 <div className="row">
 <h3 className="text-danger">Review</h3>
  <a href={Data.response.homepage}><img className="slide-img" src={path} alt="poster"/></a>
 </div>
  <div className="row">
   <div className="col-12 d-flex justify-content-between">
    <h1 className="text-danger">{Data.response.name?Data.response.name:Data.response.title}</h1>
    <em className="text-warning">Ratting:{Data.response.vote_average}🌟</em>
   </div>
   <div className="col-12 text-info d-flex justify-content-between">
    <em>{Data.response.tagline}</em><span data-bs-toggle="collapse" data-bs-target="#ShowMore" aria-expanded="false" aria-controls="ShowMore" className="btn btn-dark">Show more</span>
   </div>
   
   <div id="ShowMore" className="collapse card bg-dark">
     <div className="text-light">
     {Data.response.seasons?
       Data.response.seasons.map((item,key)=>{
   return( 
 <div  key={key}  className="center">
  <button onClick={()=>{Tvdetail(item)}} className="btn btn-primary my-1" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
   <span className="m-1">{item.name}</span>
  </button>
 </div>)
       }):<Err text={"Data Not Found"} code={404}/>
     }
     </div>
   </div>
   <div className="col-12">
    <h6 className="text-secondary">Overview:</h6>
    <p className="text-secondary">{Data.response.overview}</p>
   </div>
 </div>
 <div>
  <div className="col-12 my-1">
    <Tvslide item={[Data.response.last_episode_to_air,Data.response.next_episode_to_air]}
           select={EpDetail}/>
   </div>
  </div>
 <div className="col-12 my-1">
    <Genere item={Data.response.genres}/>
  </div>
 <div className="row">
 <table className="table table-dark table-hover text-secondary flex-shrink-none">
  <thead className="thead">
  <tr className="tr">
    <th>Original Name:</th><th>{Data.response.original_title}</th>
  </tr>
  </thead>
  <tbody className="tbody">
  <tr className="tr">
   <td>Overview:</td><td>{Data.response.overview}</td>
  </tr>
   <tr className="tr">
   <td>Language:</td><td>{Data.response.spoken_languages?Data.response.spoken_languages.map((e,x)=><span key={x} className="me-2">{e.english_name},</span>):""}</td>
  </tr>
  <tr className="tr">
   <td>Released:</td><td>{Data.response.first_air_date}</td>
  </tr>
  <tr className="tr">
   <td>Ratting:</td><td>{Data.response.vote_average}</td>
  </tr>
  </tbody>
 </table>
 </div>
 </div>
   :<Err text={"Data Not Found"} code={404}/>:<Err text={"Internal Server Error"} code={500}/>
 }
    </>
    )
}
export default Tv;