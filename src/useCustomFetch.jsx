import {useEffect,useState} from "react";
const UseCustomFetch=(url,options)=>{
  const [response, setResponse] = useState(null);
  //const [error, setError] = useState(null);
  const [isLoading, setIsLoading] =useState(false);
  
  //const [response,DisRes]=useReducer(Reducer,null)
  //const [isLoading, setIsLoading]=useReducer(Reducer,false)
  const repeat=options.repeat?options.repeat:null;
  console.log(repeat)
  useEffect(()=>{
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetch(url, (options.methods?options.methods:null));
      
        const json = await res.json();
    
        setResponse(json)
        setIsLoading(false)
      } catch (error) {
        setResponse(error)
        setIsLoading(false)
      }
    }
    fetchData();
    return () => {
      setResponse(null)
      setIsLoading(false)
    }
  },[options.methods,url]);
  return { response, isLoading };
};
export default UseCustomFetch;