import {Switch,Route} from "react-router-dom";
import Home from "../Component/Home";
import About from "../Component/About";
import Contact from "../Component/Contact";
import Watch from "../Component/Watch";
import TvEp from "../Component/TvEp";
import Auth from "../Component/Auth";
import ErrorPage from "../Error/ErrorPage";
import Movie from "../Component/Movie";
import Genre from "../Component/Genre";
import Tv from "../Component/Tv";
import Person from "../Component/Person";
import Epdetail from "../Component/Epdetail";
import SearchPage from "../Component/SearchPage";
import PassReset from "../Component/PassReset";
const Routing=()=>{
  return(
    <>
    <Switch/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/movie/:id" component={Movie}/>
    <Route exact path="/tv/:id" component={Tv}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/watch" component={Watch}/>
    <Route exact path="/auth" component={Auth}/>
    <Route exact path="/passreset" component={PassReset}/>
    <Route exact path="/error" component={ErrorPage}/>
    <Route exact path="/genre/:query/:name/:type" component={Genre}/>
    <Route exact path="/search/:query" component={SearchPage}/>
    <Route exact path="/Person/:id" component={Person}/>
    <Route exact path="/tvep/:id/:s" component={TvEp}/>
    <Route exact path="/ep/:id/:s/:ep" component={Epdetail}/>
    <Switch/>
    </>
    )
}
export default Routing;