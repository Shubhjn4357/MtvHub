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
    <Route exact path="/MtvHub/" component={Home}/>
    <Route exact path="/MtvHub/movie/:id" component={Movie}/>
    <Route exact path="/MtvHub/tv/:id" component={Tv}/>
    <Route exact path="/MtvHub/about" component={About}/>
    <Route exact path="/MtvHub/contact" component={Contact}/>
    <Route exact path="/MtvHub/watch" component={Watch}/>
    <Route exact path="/MtvHub/auth" component={Auth}/>
    <Route exact path="/MtvHub/passreset" component={PassReset}/>
    <Route exact path="/MtvHub/error" component={ErrorPage}/>
    <Route exact path="/MtvHub/genre/:query/:name/:type" component={Genre}/>
    <Route exact path="/MtvHub/search/:query" component={SearchPage}/>
    <Route exact path="/MtvHub/Person/:id" component={Person}/>
    <Route exact path="/MtvHub/tvep/:id/:s" component={TvEp}/>
    <Route exact path="/MtvHub/ep/:id/:s/:ep" component={Epdetail}/>
    <Switch/>
    </>
    )
}
export default Routing;