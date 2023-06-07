import React, {useState, useEffect} from 'react'

const ItemContext = React.createContext();

function ItemProvider ({children}) {
  
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('/items')
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])

  return (
    <ItemContext.Provider value={{items, setItems}}>
      {children}
    </ItemContext.Provider>
  )
}

export {ItemProvider, ItemContext}
