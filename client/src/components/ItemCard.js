import { useContext } from "react"
import { Button, Card } from "react-bootstrap"
import { CartContext } from "../context/CartContext"

function ItemCard({item}) {


  const {item_name, price, description, quantity_available, photo_url } = item

  const {items, getItemQuantityInCart, addItemToCart,removeItemFromCart,deleteAllOfAnItemFromCart, getTotalCost } = useContext(CartContext)

  console.log(items)

  const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD", 
    style: "currency"
  })
  
  function FormatCurrency(number) {
    return CURRENCY_FORMATTER.format(number)
  }

  return (
    <Card>
      <Card.Img as="img" variant="top" src={photo_url}/>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{item_name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          Price: {FormatCurrency(price)}
        </Card.Text>
        <Button onClick={() => addItemToCart(item.id, item.price)}>Add to cart</Button>
      </Card.Body>
    </Card>
  )
}

export default ItemCard