import {Link} from "react-router-dom"
const Footer=()=>{
  return(
    <>
 <footer className="text-center bg-dark">

  <div className="container pt-4">

    <section className="center mb-4">

      <Link
        className="btn btn-link btn-floating btn-lg text-light m-1"
        to="https://m.facebook.com/profile.php?ref=bookmarks"
        target="_blank"
        role="button"
        data-mdb-ripple-color="light"
        ><i className="fab fa-facebook-f"></i
      ></Link>


      <Link
        className="btn btn-link btn-floating btn-lg text-light m-1"
        to="https://twitter.com/shubham64718471?s=09"
        target="_blank"
        role="button"
        data-mdb-ripple-color="light"
        ><i className="fab fa-twitter"></i
      ></Link>


      <Link
        className="btn btn-link btn-floating btn-lg text-light m-1"
        to="shubhamjain.com.in@gmail.com"
        target="_blank"
        role="button"
        data-mdb-ripple-color="light"
        ><i className="fab fa-google"></i
      ></Link>


      <Link
        className="btn btn-link btn-floating btn-lg text-light m-1"
        to="https://www.instagram.com/shubh_jn_143/"
        target="_blank"        
        role="button"
        data-mdb-ripple-color="light"
        ><i className="fab fa-instagram"></i
      ></Link>


      <Link
        className="btn btn-link btn-floating btn-lg text-light m-1"
        to="#!"
        target="_blank"
        role="button"
        data-mdb-ripple-color="light"
        ><i className="fab fa-linkedin"></i
      ></Link>

      <Link
        className="btn btn-link btn-floating btn-lg text-light m-1"
        to="https://github.com/Shubhjn4357"
        target="_blank"
        role="button"
        data-mdb-ripple-color="light"
        ><i className="fab fa-github"></i
      ></Link>
    </section>

  </div>

  <div className="text-center text-light p-3" style={{"backgroundColor": "rgba(0, 0, 0, 0.2)"}}>
    © {new Date().getFullYear()} Copyright:
    <Link className="text-light text-decoration-none" to="/">Movie Hub</Link>
  </div>

</footer>
    </>
    )
}
export default Footer;