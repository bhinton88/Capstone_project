import { useContext } from "react"
import { Offcanvas, Stack, Button } from "react-bootstrap"
import { CartContext } from "../context/CartContext"
import CartItem from "./CartItem"
import { ItemContext } from "../context/ItemContext"


function ShoppingCart ({isOpen}) {

  const { closeCart, cartItems } = useContext(CartContext)
  const {items} = useContext(ItemContext)

  const totalCartCost = cartItems.reduce((total, cartItem) => {
    const item = items.find(item => item.id === cartItem.id)
    return total + cartItem.quantity*(item?.price || 0)
  }, 0)

  const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD", 
    style: "currency"
  })

  function formatCurrency(number) {
    return CURRENCY_FORMATTER.format(number)
  }

  const lineItems = cartItems.map(cartItem => {
    const item = items.find(item => item.id === cartItem.id)
    return (
      {
        price: item.price_id,
        quantity: cartItem.quantity
      }
    )
  })

  console.log(lineItems)

  return (
    <Offcanvas className="w-40" show={isOpen} onHide={closeCart}  placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3} className="mb-3">
          {
            cartItems.map(item => {
              return <CartItem key={item.id} item={item} />
            })
          }
          <div className="ms-auto fw-bold fs-5">
            Total: {formatCurrency(totalCartCost)}
          </div>
        </Stack>
        <Stack >
          <Button>Checkout</Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
    // need to create some logic that when our checkout button is pressed, it first checks to see if they are a user, if not
    // a modal will pop up asking them to create a user account first 
  )
  
}

export default ShoppingCart