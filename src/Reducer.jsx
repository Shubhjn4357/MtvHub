export const InitialVal={};
export const Reducer=(state,action)=>{
  if(action.type==="User"){
    return action.payload
  }
  return state;
}