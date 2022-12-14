

export const reducer = (state,action)=>{

  switch(action.type){
    
    case 'start_fetching':
    console.log("first")
    return {...state,isLoading:true}

    case 'success_fetching':
    console.log("success")
    return {...state,isLoading:false,products:action.payload}

    case 'failed_fetching':
    return {...state,isLoading:false,isError:true}

    default:
    return state
  }
}