import { useContext } from "react"
import { Offcanvas } from "react-bootstrap"
import { CartContext } from "../context/CartContext"


function ShoppingCart ({isOpen}) {

  const { closeCart } = useContext(CartContext)

  return (
    <Offcanvas show={isOpen} onHide={closeCart}  placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  )
  
}

export default ShoppingCart