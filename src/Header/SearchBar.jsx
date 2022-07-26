import {useState} from "react";
import {useHistory,NavLink} from "react-router-dom"
import useCustomFetch from "../useCustomFetch";
import Loader from "../Functions/Loader";
const SearchBar =()=>{
  const[State,setState]=useState("")
  const RES=useCustomFetch(`https://api.themoviedb.org/3/search/multi?api_key=b8b691424543ca1b78129c0328e1cc4f&language=en-US&query=${State}&page=1&include_adult=true`,{
    repeat:State,method:{
      method:"GET"
    }
  })
  const history=useHistory()
  const HandleSubmit=(e)=>{
    e.preventDefault()
    history.push(`/search/${State}`)
    setState("")
  }
  const protocol="https://"
  const url="image.tmdb.org/t/p/original/"
  return(
  <form onSubmit={HandleSubmit} className="d-block mb-2 mx-auto order-3 order-md-2">
    <input onChange={(e)=>{setState(e.target.value)}} value={State} name="query" placeholder="Search..." list="Options" className="form-control inputField " type="text"/>
    <ul id="Options">
    {RES.isLoading?<option value={State}><Loader/></option>:
      RES.response?
      RES.response.results?RES.response.results.map((item)=>{
      const path=protocol+url+item.backdrop_path;
     return (
    <NavLink className="text-decoration-none" onClick={()=>setState("")}to={`/MtvHub/${item.media_type}/${item.id}`} key={item.id}>
     <li className="mt-2 p-2">
      <img src={path} alt="poster" className="search-img me-1" />
      <span className="text-warning fs-2">{item.title}</span>
     </li>
    </NavLink>)
    }):"":""
}
    </ul>
  </form>
  )
}
export default SearchBar;