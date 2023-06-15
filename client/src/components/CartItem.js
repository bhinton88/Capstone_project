import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { ItemContext } from "../context/ItemContext"
import { Button, Stack } from "react-bootstrap"


function CartItem({ item }) {

  const {id, quantity} = item
  const {removeItemFromCart} = useContext(CartContext)
  const { items } = useContext(ItemContext) // all items from context

  
  const current_item = items.find(item => item.id === id)
  if(item === null) return null

  const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD", 
    style: "currency"
  })
  
  function formatCurrency(number) {
    return CURRENCY_FORMATTER.format(number)
  }

  const currentItemCost = quantity*current_item.price

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img 
        src={current_item.photo_url} 
        style={{ width: "125px", height: "75px", objectFit:"cover"}}
        alt="Item for sale"
      />
      <div className="me-auto">
        <div>
          {current_item.item_name}{" "}
        </div>
        <div className="text-muted" style={{fontSize: ".75rem"}}>
          {formatCurrency(current_item.price)} x {quantity}
        </div>
        <div>{formatCurrency(currentItemCost)}</div>
      </div>
      <Button variant="outline-danger" size="sm" className="justify-content-right" onClick={() => removeItemFromCart(item.id)}>&times;</Button>
    </Stack>  
  )
}

export default CartItem