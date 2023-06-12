import { createContext, useEffect, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";

const CartContext = createContext({
  cartItems: [],
  getItemQuantityInCart: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteAllOfAnItemFromCart: () => {},
  getTotalCost: () => {},
  openCart: () => {},
  closeCart: () => {},
  cartQuantity: Number,
});

// here we are retrieving our cartItems stored in local storage and assigning them back to our 
// state so that we will have access to them

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cartItems') || '[]') 

function CartProvider ({children}) {

  const [cartItems, setCartItems] = useState(cartFromLocalStorage)
  const [isOpen, setIsOpen] = useState(false)

  // we store our cartItems in local storage so they persist, we update that upon change of 
  // cart Items
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  },[cartItems])

  const openCart = () => setIsOpen(true)

  const closeCart = () => setIsOpen(false) 
  
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
    const updatedCart = cartItems.filter(item => item.id !== id)

    setCartItems(updatedCart)

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

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0) 

  const contextValue = {
    cartItems: cartItems,
    getItemQuantityInCart,
    addItemToCart,
    removeItemFromCart,
    deleteAllOfAnItemFromCart,
    getTotalCost,
    cartQuantity,
    openCart,
    closeCart
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
      <ShoppingCart isOpen={isOpen} />
    </CartContext.Provider>
  )

}

export {CartContext, CartProvider}