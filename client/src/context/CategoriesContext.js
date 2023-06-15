import React ,{ useContext, useEffect, useState } from "react";
import { ItemContext } from "./ItemContext";

const CategoryContext = React.createContext();

function CategoryProvider ({children}) {

  const [ categories, setCategories ] = useState([])
  const {items} = useContext(ItemContext)

  useEffect(() => {
    fetch('/categories')
    .then(response => response.json())
    .then(categories => setCategories(categories))
  },[])

  return(
    <CategoryContext.Provider value={{categories, setCategories}}>
      {children}
    </CategoryContext.Provider>
  )

}

export { CategoryContext, CategoryProvider}