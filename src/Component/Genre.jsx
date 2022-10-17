import useCustomFetch from "../useCustomFetch";
import {useParams,Link} from "react-router-dom"
import Loader from "../Functions/Loader";
import Err from "../Functions/Err";
import Tab from "./Tab";
const SearchPage=()=>{
  const {query,name,type}=useParams()
 const Mov=useCustomFetch(`https://api.themoviedb.org/3/discover/movie?api_key=b8b691424543ca1b78129c0328e1cc4f&language=en-US&with_genres=${query}`,{
    repeat:query,method:{
      method:"GET"
    }
  })
  const Tv=useCustomFetch(`https://api.themoviedb.org/3/discover/tv?api_key=b8b691424543ca1b78129c0328e1cc4f&language=en-US&with_genres=${query}`,{
    repeat:query,method:{
      method:"GET"
    }
  })
 return(
   
   <div className="container-fluid bg-dark">
   <div className="row center">
   <div className="text-danger display-3 text-italic">{name}</div>
  <div className="d-flex">  
    <Link className="m-2 p-2 btn btn-primary" to="movie">Movies</Link>
    <Link className="m-2 p-2 btn btn-primary" to="tv">TvSeries</Link>
   </div>
   {type==="movie"?Mov.isLoading?<div><Loader/></div>:
   Mov.response?
   Mov.response.results?
   Mov.response.total_pages?
   Mov.response.results.map((item,key)=>{
    return <Tab key={key} item={item} type={"movie"}/>
   }):<Err text={"Data Not Found"} code={404}/>
   :<Err text={"Data Not Found"} code={404}/>
      :<Err text={"Internal server Error"} code={500}/>
    :
Tv.isLoading?<div><Loader/></div>:
   Tv.response?
   Tv.response.results?
   Tv.response.total_pages?
   Tv.response.results.map((item,key)=>{
    return <Tab key={key} item={item} type={"tv"}/>
   }):<Err text={"Data Not Found"} code={404}/>
   :<Err text={"Data Not Found"} code={404}/>
      :<Err text={"Internal server Error"} code={500}/>
    }
    </div>
   </div>

   )
}
export default SearchPage;