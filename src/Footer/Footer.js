import {NavLink} from "react-router-dom"
const Footer=()=>{
  return(
    <>
 <footer className="text-center bg-dark">

  <div className="container pt-4">

    <section className="center mb-4">

      <NavLink
        className="btn btn-link btn-floating btn-lg text-light m-1"
        to={{pathname:"https://m.facebook.com/profile.php?ref=bookmarks"}}
        target="_blank"
        role="button"
        data-mdb-ripple-color="light"
        ><i className="fab fa-facebook-f"></i
      ></NavLink>


      <NavLink
        className="btn btn-link btn-floating btn-lg text-light m-1"
        to={{pathname:"https://twitter.com/shubham64718471?s=09"}}
        target="_blank"
        role="button"
        data-mdb-ripple-color="light"
        ><i className="fab fa-twitter"></i
      ></NavLink>


      <NavLink
        className="btn btn-link btn-floating btn-lg text-light m-1"
        to={{pathname:"shubhamjain.com.in@gmail.com"}}
        target="_blank"
        role="button"
        data-mdb-ripple-color="light"
        ><i className="fab fa-google"></i
      ></NavLink>


      <NavLink
        className="btn btn-link btn-floating btn-lg text-light m-1"
        to={{pathname:"https://www.instagram.com/shubh_jn_143/"}}
        target="_blank"        
        role="button"
        data-mdb-ripple-color="light"
        ><i className="fab fa-instagram"></i
      ></NavLink>


      <NavLink
        className="btn btn-link btn-floating btn-lg text-light m-1"
        to={{pathname:"#!"}}
        target="_blank"
        role="button"
        data-mdb-ripple-color="light"
        ><i className="fab fa-linkedin"></i
      ></NavLink>

      <NavLink
        className="btn btn-link btn-floating btn-lg text-light m-1"
        to={{pathname:"https://github.com/Shubhjn4357"}}
        target="_blank"
        role="button"
        data-mdb-ripple-color="light"
        ><i className="fab fa-github"></i
      ></NavLink>
    </section>

  </div>

  <div className="text-center text-light p-3" style={{"backgroundColor": "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <NavLink className="text-light text-decoration-none" to="/">Movie Hub</NavLink>
  </div>

</footer>
    </>
    )
}
export default Footer;