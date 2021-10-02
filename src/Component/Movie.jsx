import {useParams} from "react-router-dom"
import useCustomFetch from "../useCustomFetch";
import VideoSwiper from "../Functions/VideoSwiper"
import Genere from "../Functions/Genere";
import Loader from "../Functions/Loader";
import Err from "../Functions/Err";
const Movie=()=>{
  const{id}=useParams();
  const Data=useCustomFetch(`https://api.themoviedb.org/3/movie/`+id+`?api_key=b8b691424543ca1b78129c0328e1cc4f&language=en-US`,{})
  const Video=useCustomFetch(`https://api.themoviedb.org/3/movie/`+id+`/videos?api_key=b8b691424543ca1b78129c0328e1cc4f&language=en-US`,{})
  const path=Data.response?"https://image.tmdb.org/t/p/original/"+Data.response.backdrop_path:null;
  return(
    <>
{Data.isLoading?<div><Loader/></div>:
Data.response?
<div className="container-fluid bg-dark">
 <div className="row">
 <h3 className="text-danger">Review</h3>
  <a href={Data.response.homepage}><img className="slide-img" src={path} alt="poster"/></a>
 </div>
  <div className="row">
   <div className="col-12 d-flex justify-content-between">
    <h1 className="text-danger">{Data.response.title}</h1>
    <em className="text-warning">Ratting:{Data.response.vote_average}🌟</em>
   </div>
   <div className="col-12 text-info">
    {Data.response.tagline}
   </div>
   <div className="col-12">
    <h6 className="text-secondary">Overview:</h6>
    <p className="text-secondary">{Data.response.overview}</p>
   </div>
   <div className="col-12 my-1">
    <Genere item={Data.response.genres}/>
  </div>
 </div>
 <div className="row">
 <table className="table table-dark table-hover text-secondary">
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
   <td>Released:</td><td>{Data.response.release_date}</td>
  </tr>
  <tr className="tr">
   <td>Ratting:</td><td>{Data.response.vote_average}</td>
  </tr>
  </tbody>
 </table>
 </div>
 
 {Video.isLoading?<div><Loader/></div>:
 Video.response?
 <div className="row">
 <div className="col">
 <h3 className="text-danger">Videos</h3>
     <VideoSwiper item={Video.response.results}/>
  </div>
  </div>:<Err text={"Video Not Available"} code={404}/>}
 </div>:<Err text={"Data Not Found"} code={404}/>
 }
    </>
    )
}
export default Movie;