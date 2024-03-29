import {useEffect,useReducer} from "react";
import {Reducer} from "./Reducer";
const UseCustomFetch=(url)=>{
  //const [response, setResponse] = useState(null);
  //const [error, setError] = useState(null);
  //const [isLoading, setIsLoading] =useState(false);
  
  const [response,DisRes]=useReducer(Reducer,null)
  const [isLoading, setIsLoading]=useReducer(Reducer,false)
  useEffect(()=>{
    //const {repeat,method}=options;
    const fetchData = async () => {
      
      setIsLoading({type:"User",payload:true})
      try {
        const res = await fetch(url);
      
        const json = await res.json();
        DisRes({type:"User",payload:json})
        //setResponse(json)
        setIsLoading({type:"User",payload:false})
      } catch (error) {
        DisRes({type:"User",payload:error})
        setIsLoading({type:"User",payload:false})
      }
    }
    fetchData();
    /*if(repeat){
      fetchData();
    }*/
   return () => {
      DisRes({type:"User",payload:null})
      setIsLoading({type:"User",payload:false})
    }
  },[url]);
  return { response, isLoading };
};
export default UseCustomFetch;