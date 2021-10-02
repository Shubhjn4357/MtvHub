import UseAnimation from "react-useanimations"
import Loading from "react-useanimations/lib/infinity"
const Loader=()=>{
  return(
    <>
    <div className="full center">
    <UseAnimation animation={Loading}
                  size={40}
                  strokeColor={'#ffe200'}/>
    </div>
    </>
    )
}
export default Loader;