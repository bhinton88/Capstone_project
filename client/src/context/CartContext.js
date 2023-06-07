import { createContext, useContext, useState } from "react";
import { ItemContext } from "./ItemContext";



const CartContext = createContext({
  items: [],
  getItemQuantityInCart: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteCart: () => {},
  getTotalCost: () => {}
});

function CartProvider ({children}) {

  // const { items, setItems} = useContext(ItemContext)

  const [cartItems, setCartItems] = useState([])

  function getItemQuantityInCart(id) {
    const quantityOfAnItem = cartItems.find(item => item.id === id)?.quantity

    if(quantityOfAnItem === undefined){
      return 0;
    }

    return quantityOfAnItem
  }

  function addItemToCart (id, price) {
    const quantity = getItemQuantityInCart(id)

    if(quantity === 0){
      setCartItems([
        ...cartItems, {
        id: id,
        quantity: 1,
        cost: price
        }
      ])

    } else { // if we are adding to items already in our cart, we need to update the quanity and the total cost 
      const updatedCart = cartItems.map(item =>{
        if(id === item.id) {
          item.quanity += 1
          item.cost += price
        } else {
          return item
        }

        setCartItems([
          ...cartItems,
          updatedCart
        ])
      })
    }
  }

  function removeItemFromCart(id, price) {
    const quantity = getItemQuantityInCart(id)

    if(quantity === 1){
      // we will need to use use a pre-defined function which removes all items of a certain item from the cart

    } else {
      const updatedCart = cartItems.map(item =>{
        if(id === item.id) {
          item.quanity -= 1
          item.cost -= price
        } else {
          return item
        }

        setCartItems([
          ...cartItems,
          updatedCart
        ])
      })
    }

  }

  function deleteCart () {

  }

  function getTotalCost () {

  }

  const contextValue = {
    items: cartItems,
    getItemQuantityInCart,
    addItemToCart,
    removeItemFromCart,
    deleteCart,
    getTotalCost
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )

}

export {CartContext, CartProvider}