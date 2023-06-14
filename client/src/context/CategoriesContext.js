import React ,{ useEffect, useState } from "react";

const CategoryContext = React.createContext();

function CategoryProvider ({children}) {

  const [ categories, setCategories ] = useState([])

  console.log(categories)

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