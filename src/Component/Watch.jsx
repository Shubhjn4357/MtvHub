import {useNavigate} from "react-router-dom"
import Slide from "../Functions/Slider";
import MTab from "../Functions/MTab";
import Swipe from "../Functions/Swipe";
import Genere from "../Functions/Genere";
import Loader from "../Functions/Loader";
import useCustomFetch from "../useCustomFetch";
import {Context} from "../App"
import {useContext} from "react"
import Err from "../Functions/Err";
const Watch=()=>{
  const{Dispatch}=useContext(Context)
  const Base_Link=`https://api.themoviedb.org/3/`;
  const api_Key=`?api_key=b8b691424543ca1b78129c0328e1cc4f`
  const MTrending=useCustomFetch(`${Base_Link}trending/movie/day${api_Key}`,{})
  const TvTrending=useCustomFetch(`${Base_Link}trending/tv/day${api_Key}`,{})
  const Geners=useCustomFetch(`${Base_Link}genre/tv/list${api_Key}&language=en-US`,{})
  const TvSeries=useCustomFetch(`${Base_Link}discover/tv${api_Key}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true`,{})
  const MovieDiscover=useCustomFetch(`${Base_Link}discover/movie${api_Key}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=2`,{})
  const navigate=useNavigate()
  const MovieId=(e)=>{
    navigate(`/movie/`+e.id)
    return Dispatch({type:"ITEM",payload:e})
  }
  const TvId=(e)=>{
    navigate(`/tv/`+e.id)
    return Dispatch({type:"ITEM",payload:e})
  }
  return(
    <>
    <div className="container-fluid bg-dark">
    <div className="row mb-1 center">
    {MTrending.isLoading?<div><Loader/></div>:
    MTrending.response?
    <div className="col p-0">
      <Slide 
             itemlist={MTrending.response.results}
             select={MovieId}/>
    </div>:<div><Err text={"Data Not Found"} code={404}/></div>
    }
    </div>
    <div className="row mt-1">
    <span className="text-secondary p-2 my-2 display-6 italic text-bold">Discover</span>
    {MovieDiscover.isLoading?<div><Loader/></div>:
    MovieDiscover.response?
      <div className="col-12 p-0">
        <MTab itemlist={MovieDiscover.response.results}
              select={MovieId}/>
      </div>:<div><Err text={"Data Not Found"} code={404}/></div>
    }
    <div className="col-12">
    {Geners.isLoading?<div><Loader/></div>:
    Geners.response?
      <Genere item={Geners.response.genres}
              select={MovieId}/>
      :<div><Err text={"Data Not Found"} code={404}/></div>
    }
    </div>
      {TvSeries.isLoading?<div><Loader/></div>:
      TvSeries.response?
      <div className="col-12 my-1">
<span className="text-secondary p-2 my-2 display-6 italic text-bold">Trending Shows</span>
        <Swipe item={TvSeries.response.results}
               select={TvId}/>
      </div>:<div><Err text={"Data Not Found"} code={404}/></div>
      }
      <div className="row mt-1">
<span className="text-secondary my-2 p-2 display-6 italic text-bold">Populars Shows</span>
    {TvTrending.isLoading?<div><Loader/></div>:
    TvTrending.response?
      <div className="col-12 p-0">
        <MTab itemlist={TvTrending.response.results}
              select={TvId}/>
      </div>:<div><Err text={"Data Not Found"} code={404}/></div>
    }
    </div>
    </div>
    </div>
    </>
    )
}
export default Watch;