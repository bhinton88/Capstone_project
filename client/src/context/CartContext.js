import { createContext, useState } from "react";

const CartContext = createContext({
  items: [],
  getItemQuantityInCart: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteAllOfAnItemFromCart: () => {},
  getTotalCost: () => {}
});

function CartProvider ({children}) {

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
      const updatedCart = cartItems.map(item =>  item.id === id ?
        {...item, quantity: item.quantity + 1, cost: item.cost + price}
        :
        item
      )
      setCartItems([
        ...cartItems, 
        updatedCart
      ])
    }
  }

  function deleteAllOfAnItemFromCart (id) {

    const updatedItems = cartItems.filter(item => item.id !== id)

    setCartItems([...cartItems, updatedItems])

  }

  function removeItemFromCart(id, price) {
    const quantity = getItemQuantityInCart(id)

    if(quantity === 1){
     deleteAllOfAnItemFromCart(id)

    } else { // if we are pulling out items already in our cart, we need to update the quanity and the total cost 
      const updatedCart = cartItems.map(item =>  item.id === id ?
        {...item, quantity: item.quantity - 1, cost: item.cost - price}
        :
        item
      )
      setCartItems([
        ...cartItems, 
        updatedCart
      ])
    }
  }


  function getTotalCost () {
    let totalCost = 0;

    cartItems.map(item => {
      totalCost = item.cost + totalCost
      return totalCost
    })

    return totalCost

  }

  const contextValue = {
    items: cartItems,
    getItemQuantityInCart,
    addItemToCart,
    removeItemFromCart,
    deleteAllOfAnItemFromCart,
    getTotalCost
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )

}

export {CartContext, CartProvider}