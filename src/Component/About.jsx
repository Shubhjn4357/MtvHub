import "./about.css";
import {NavLink} from "react-router-dom";
const About=()=>{
  return(
    <>
    <div id="main" className="container main-container rounded-3">
 <div className="row">
  <div className="col-12 p-5 my-2 text-center">
   <strong className="text-bolder fs-1 text-italic text-light">About Us</strong>
  <p className="text-bold fs-3 text-light">Meet Our terms</p>
  <p className="lh-lg fs-5 text-muted">We are all very different. We were born in different cities, at different times, we love different music, food, movies. But we have something that unites us all. It is our company. We are its heart. We are not just a team, we are a family.   </p>
  <button className="btn btn-light rounded-pill"><NavLink to="/MtvHub/contact" className="text-decoration-none text-danger">Contact Us</NavLink></button>
  </div>
 <div className="col-12">
  <div className="icons">
   <div className="icon">
    <i className="ics fab fs-ic fa-creative-commons-remix"></i>
    <p className="text-bolder text-italic text-light">Creativity</p>
   <p className="text-muted">It's the ability to think outside the box. We make decisions, create something new and generate a lot of ideas. </p>
   </div>
   
 <div className="icon">
    <i className="ics fas fs-ic fa-globe-asia"></i>
    <p className="text-bolder text-italic text-light">WorldWide</p>
    <p className="text-muted">All sites are mobile-friendly. You don't have to create a special mobile version of your site.</p>
   </div>
 </div>
 <div className="icons">
 <div className="icon">
   <i className="ics fas fs-ic fa-fingerprint"></i>
   <p className="text-bolder text-italic text-light">Unique Style</p>
  <p className="text-muted">We offers many site blocks in several themes, and though these blocks are pre-made, they are flexible.</p>
  </div>
  </div>
  </div>
</div>  
 <span className="text-light">Made By Shubh jain😍</span>
</div>
    </>
    )
}
export default About;