const logger = (store)=>(next)=>(action)=>{
		
    const dispatchedAction  = next(action)
    console.log(dispatchedAction )
    return dispatchedAction;
}
export default logger;