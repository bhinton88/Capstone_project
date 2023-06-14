import React, {useState, useEffect} from 'react'

const ItemContext = React.createContext({
  items: [],
  errors: [],
  addNewItem: () => {},
  updateItem: () => {},
  deleteItem: () => {}
});

function ItemProvider ({children}) {
  
  const [items, setItems] = useState([])
  const [errors, setErrors]= useState([])

  useEffect(() => {
    fetch('/items')
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])

  function addNewItem (newItem) {
    fetch('/items', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newItem)
    })
    .then(response => {
      if(response.ok){
        response.json().then(newItem => setItems([...items, newItem ]))
      } else {
        response.json().then(data => setErrors(data.errors))
      }
    })
  }

  const contextValue = {
    items: items,
    errors: errors,
    addNewItem,
    updateItem,
    deleteItem
  }

  return (
    <ItemContext.Provider value={{items, setItems}}>
      {children}
    </ItemContext.Provider>
  )
}

export {ItemProvider, ItemContext}
