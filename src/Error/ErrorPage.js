import Animate from "../Animate";
import Caution from "../original/caution-3056296.json"

const ErrorPage=()=>{
  return(<>
  <div className="container-fluid">
    <div className="row">
      <div className="col">
        <Animate
              animate={Caution}
              loop={false}
              autoplay={false}
              height={100}
              width={100}
            />
        <h1 className="text-center">Error</h1>
      </div>
    </div>
  </div>
  </>)
}
export default ErrorPage;