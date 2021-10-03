import {useHistory} from "react-router-dom"
import Err from "../Functions/Err";
import Slider from "react-slick";
const Genere=(props)=>{
  const history=useHistory()
  var setting2={
      className:"bg-dark",
      focusOnSelect: true,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,
      cssEase: "linear",
      arrows:false,
      responsive: [
        {
          breakpoint:600,
          settings: {
            slidesToShow: 2,
          }
        },
      ]
  }
  const Genre=(e)=>{
    history.push(`/MtvHub/genre/${e.id}/${e.name}/movie`)
  }
  return(
    <>
  {props.item?
   <Slider {...setting2}>
   {props.item.map((item,k)=>{
     return <div className="" key={item.id?item.id:k}>
     <div  onClick={item.id?()=>{Genre(item)}:()=>{return ""}} className="center genre rounded-pill p-2 m-1">
     <em>{item.name?item.name:item}</em>
     </div>
     </div>
})}
</Slider>
:<Err text={"Data Not Found"} code={404}/>}
    
 </>)
}
export default Genere;