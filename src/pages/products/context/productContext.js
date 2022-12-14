import {createContext,useContext,useReducer,useEffect} from 'react'
import {reducer} from '../reducer/productReducer'
import axios from 'axios'

import {StartFetching,SucessFetching,FailedFetching} from '../actions/productsActions'

const AppContext = createContext()


const intialState = {
  isLoading:false,
  isError:false,
  products:[]
}


const AppProvider = ({children})=>{

  const [state,dispatch] = useReducer(reducer,intialState);

  useEffect(()=>{

    const FetchProducts = async()=>{
      dispatch({type:"start_fetching"})
      try{
        const {data} = await axios.get('https://api.pujakaitem.com/api/products')
        dispatch(SucessFetching(data))
      }catch(e){
        dispatch(FailedFetching)
        console.log(e)
      }
    }

    FetchProducts()
  },[])


  return(
      <AppContext.Provider value={{state,dispatch}}>
        {children}
      </AppContext.Provider>
  )
}

export default AppProvider



// using context
export const useProductContext = ()=>{
  return useContext(AppContext)
}