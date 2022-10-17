const Err=(props)=>{
  return(
    <>
  <div className="bg-dark center m-3">
   <h1 className="backPage-Image text-light text-center">{props.code}</h1>
   <div className="center-text text-danger">{props.text}</div>
  </div>
    </>
    )
}
export default Err;