import useCustomFetch from "../useCustomFetch";
import {useParams} from "react-router-dom"
import Loader from "../Functions/Loader";
import Tab from "./Tab";
import Err from "../Functions/Err";
const SearchPage=()=>{
  const {query}=useParams()
 const RES=useCustomFetch(`https://api.themoviedb.org/3/search/multi?api_key=b8b691424543ca1b78129c0328e1cc4f&language=en-US&query=${query}&page=1&include_adult=true`,{
    repeat:query,method:{
      method:"GET"
    }
  })
 return(
   
   <div className="container-fluid bg-dark">
   <div className="row center">
    {RES.isLoading?<div><Loader/></div>:
   RES.response?
   RES.response.results?
   RES.response.results.map((item,key)=>{
    return <Tab key={key} item={item}/>
   })
   :<Err text={"Data Not Found"} code={404}/>
      :<Err text={"Internal Server Error"} code={500}/>
    }
    </div>
   </div>

   )
}
export default SearchPage;