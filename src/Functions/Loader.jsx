
import Animate from "../Animate"
import file from "../original/reload-3056318.json";
const Loader=()=>{
  return(
    <>
    <div className="full center anim-icon fa-spin">
      <Animate animate={file} width={5} height={5}/>
    </div>
    </>
    )
}
export default Loader;