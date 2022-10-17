import Lottie from "lottie-react";
const Animate=(props)=>{
  const defaultOptions = {
      loop:props.loop?props.loop: true,
      autoplay:props.autoplay?props.autoplay: true, 
      animationData:props.animate?props.animate:null,

 
    };
    return(
     <>
     <Lottie  {...defaultOptions}
              height={props.height?props.height:"auto"}
              width={props.width?props.width:"auto"}
              aria-labelledby="use lottie animation"
              
              />
     </>
      )
}
export default Animate;