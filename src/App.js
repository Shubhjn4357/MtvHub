import Navigation from "./Header/Navigation";
import Navout from "./Header/Navout";
import Footer from "./Footer/Footer";
import Routing from "./Routing/Routing";
import {BrowserRouter as Bs}from "react-router-dom"
import {useReducer,createContext,useEffect} from "react"
import {InitialVal,Reducer} from "./Reducer"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import fire from "./config/fire"
export const Context=createContext()
const App=()=>{
  const [State,Dispatch]=useReducer(Reducer,InitialVal)
  /*const [Authorize,setAuthorize]=useState({
    user:""
  });*/
  useEffect(()=>{
  const Authanticate=()=>{
    const auth = getAuth(fire);
onAuthStateChanged(auth, (Authorize) => {
    if(Authorize){
      Dispatch({type:"User",payload:Authorize})
      //setAuthorize(Authorize)
    }
    else{
      Dispatch({type:"User",payload:Authorize})
      //setAuthorize(null)
    }
    })
  }
  Authanticate()
  },[Dispatch])
  return(
    <>
    <Context.Provider value={{State,Dispatch}}>
    <Bs>
      {/*Authorize*/State?<Navigation/>:<Navout/>}
      <Routing/>
      <Footer/>
    </Bs>
    </Context.Provider>
    </>
    )
}
export default App;