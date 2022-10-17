import Slider from "react-slick";
import Err from "../Functions/Err";
const Slide=(props)=>{
  var setting = {
      className:"bg-dark",
      focusOnSelect: true,
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      speed: 500,
      centerMode: false,
      cssEase: "linear",
      arrows:false,
      responsive: [
        {
          breakpoint:600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
      ]
  }
  const protocol="https://"
  const url="image.tmdb.org/t/p/original/"
  return(
   <div className="">
   {props.item?
    <Slider {...setting}>
      {props.item.map((item,key)=>{
      const path=item.profile_path?protocol+url+item.profile_path:"http://placeskull.com/g/200/200/"
        return(
        <div className="p-1" onClick={()=>{props.select(item)}} key={key}>
          <img className="p-img" src={path} alt="Poster"/>
          <em className="text-info">{item.name}</em>
        </div>
        )
        })   
      }
    </Slider>:<Err text={"Data Not Found"} code={404}/>}
  </div>
    )
}
export default Slide