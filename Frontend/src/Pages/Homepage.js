import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'

const Homepage = () => {

  const {fetchData} = useContext(AppContext);
  const {data} = useContext(AppContext)
  useEffect(()=>{
        fetchData();
  },[])

  return (
    <div>
     heello      
    </div>
  )
}

export default Homepage
