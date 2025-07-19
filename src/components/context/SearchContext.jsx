import React, { createContext, useState } from 'react'

export const searchContext=createContext()

const SearchContext = ({children}) => {
    const [search,setSearch]=useState(false)
  return (
    <searchContext.Provider value={{search,setSearch}}>
        {children}
    </searchContext.Provider>
  )
}

export default SearchContext
