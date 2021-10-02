import Slider from "react-slick";
import Err from "../Functions/Err";
const Slide=(props)=>{
  var setting = {
      className: "bg-dark",
      dots: false,
      infinite: true,
      autoplay: true,
      lazyLoad:false,
      speed: 1000,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
  }
  const protocol="https://"
  const url="image.tmdb.org/t/p/original/"
  return(
   <div className="">
   {props.itemlist?
    <Slider {...setting}>
      {props.itemlist.map((item,key)=>{
      const path=protocol+url+item.backdrop_path
        return(
        <div onClick={()=>{props.select(item)}} key={key}>
        <h1>{item.name}</h1>
          <img className="slide-img rounded" src={path} alt="Poster"/>
        </div>
        )
        })   
      }
    </Slider>:<Err text={"Data Not Found"} code={404}/>}
  </div>
    )
}
export default Slide