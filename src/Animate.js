import Lottie from "react-lottie"
const Animate=(props)=>{
  const defaultOptions = {
      loop:props.loop?props.loop: true,
      autoplay:props.autoplay?props.autoplay: true, 
      animationData:props.animate?props.animate:null,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return(
     <>
     <Lottie options={defaultOptions}
              height={props.height?props.height:"auto"}
              width={props.width?props.width:"auto"}
              isStopped={props.stop?props.stop:false}
              isPaused={props.pause?props.pause:false}
              />
     </>
      )
}
export default Animate;