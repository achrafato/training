

export const StartFetching = ()=>{
  return {type:"start_fetching"}
}


export const SucessFetching = (data)=>{
  return {type:"success_fetching",payload:data}
}

export const FailedFetching = ()=>{
  return {type:"failed_fetching"}
}

