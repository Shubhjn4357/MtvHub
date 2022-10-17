import {Routes,Route} from "react-router-dom";
import {Suspense,lazy} from "react";
import Loader from "../Functions/Loader";
const Home = lazy(()=>import("../Component/Home"));
const Contact = lazy(()=>import("../Component/Contact"));
const Watch = lazy(()=>import("../Component/Watch"));
const TvEp = lazy(()=>import("../Component/TvEp"));
const Auth  = lazy(()=>import("../Component/Auth"));
const ErrorPage = lazy(()=>import("../Error/ErrorPage"));
const Movie = lazy(()=>import("../Component/Movie"));
const About = lazy(()=>import("../Component/About"));
const Genre = lazy(()=>import("../Component/Genre"));
const Tv = lazy(()=>import("../Component/Tv"));
const Person = lazy(()=>import("../Component/Person"));
const Epdetail = lazy(()=>import("../Component/Epdetail"));
const SearchPage = lazy(()=>import("../Component/SearchPage"));
const PassReset = lazy(()=>import("../Component/PassReset"));
const Routing=()=>{
  return(
    <Routes>
     <Route path="/" element={
         <Suspense fallback={<Loader/>}>
          <Home/>
        </Suspense>
      }/>
     <Route path="/movie/:id" element={
        <Suspense fallback={<Loader/>}>
         <Movie/>
        </Suspense>
       }/>
       <Route path="/tv/:id" element={
          <Suspense fallback={<Loader/>}>
           <Tv/>
          </Suspense>
       }/>
        <Route path="/about" element={
      <Suspense fallback={<Loader/>}>
        <About/>
      </Suspense>
        }/>
        <Route path="/contact" element={
          <Suspense fallback={<Loader/>}>
            <Contact/>
          </Suspense>
        }/>
        <Route path="/watch" element={
          <Suspense fallback={<Loader/>}>
            <Watch/>
          </Suspense>
        }/>
        <Route path="/auth" element={
          <Suspense fallback={<Loader/>}>
            <Auth/>
          </Suspense>
        }/>
        <Route path="/passreset" element={
          <Suspense fallback={<Loader/>}>
            <PassReset/>
          </Suspense>
        }/>
        <Route path="/error" element={
          <Suspense fallback={<Loader/>}>
            <ErrorPage/>
          </Suspense>
        }/>
        <Route path="/genre/:query/:name/:type" element={
          <Suspense fallback={<Loader/>}>
            <Genre/>
          </Suspense>
        }/>
        <Route path="/search/:query" element={
          <Suspense fallback={<Loader/>}>
            <SearchPage/>
          </Suspense>
        }/>
        <Route path="/Person/:id" element={
          <Suspense fallback={<Loader/>}>
            <Person/>
          </Suspense>
        }/>
        <Route path="/tvep/:id/:s" element={
          <Suspense fallback={<Loader/>}>
            <TvEp/>
          </Suspense>
        }/>
        <Route path="/ep/:id/:s/:ep" element={
          <Suspense fallback={<Loader/>}>
            <Epdetail/>
          </Suspense>
        }/>
    </Routes>

    )
}
export default Routing;
