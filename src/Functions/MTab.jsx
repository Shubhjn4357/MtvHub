import Slider from "react-slick";
import Err from "../Functions/Err";
const MTab=(props)=>{
  var setting2={
      className:"bg-dark",
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      centerMode: true,
      cssEase: "linear",
      arrows:false,
      responsive: [
        {
          breakpoint:600,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
  }
  const protocol="https://"
  const url="image.tmdb.org/t/p/original/"
  return(
   <div className="">
   {props.itemlist?
    <Slider {...setting2}>
      {props.itemlist.map((item,key)=>{
      const path=protocol+url+item.backdrop_path;
        return(
        <div onClick={()=>{props.select(item)}} className="" key={key}>
          <div className="p-2">
            <img className="slide-img rounded" src={path} alt="Poster"/>
          </div>
           <div className="d-block p-2">
            <div className="text-light fs-10">{item.title?item.title:item.name}</div>
            <div className="d-flex justify-content-between">
              <div className="text-warning">Ratting:{item.vote_average}🌟</div>
              <span className="text-info">{item.release_date}</span>
            </div>
           </div>
        </div>
        )
        })   
      }
    </Slider>:<Err text={"Data Not Found"} code={404}/>}
  </div>
    )
}
export default MTab;