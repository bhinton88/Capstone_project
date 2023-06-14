import { useContext, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { CartContext } from "../context/CartContext"

function ItemCard({item}) {


  const {item_name, price, description, quantity_available, photo_url } = item

  const { getItemQuantityInCart, addItemToCart,removeItemFromCart,deleteAllOfAnItemFromCart} = useContext(CartContext)

  // need to be able to determine how many of a particular item are in the cart
  const quantityInCart = getItemQuantityInCart(item.id)

  const [soldOutItem, setSoldOutItem] = useState(false)

  const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD", 
    style: "currency"
  })
  
  function formatCurrency(number) {
    return CURRENCY_FORMATTER.format(number)
  }

  // check to see if an item is sold out.. if so set it our toggle to true and disables our add to cart button
  if(quantity_available === 0) return setSoldOutItem(true)


  return (
    <Card className="w-100">
      <Card.Img 
        as="img" 
        variant="top" 
        src={photo_url}
        height="400px"
        style={{ objectFit: "contain"}}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{item_name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          Price: {formatCurrency(price)}
        </Card.Text>
        { quantityInCart === 0 ?
          (<Button 
              onClick={() => addItemToCart(item.id, item.price)}
              disabled={soldOutItem ? true : false}
            >
              {soldOutItem ? "Sold out" : "Add to Cart"}
            </Button>)
          :
          ((quantityInCart <= quantity_available) ?
              (<div className="d-flex align-items-center flex-column" style={{gap: ".5rem"}}>
                  <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }} >
                    <div>
                      <span className="fs-3">{quantityInCart}</span>
                      in cart
                    </div>
                  </div>
                  <Button 
                    variant="danger" 
                    size="sm"
                    onClick={() => deleteAllOfAnItemFromCart(item.id)}
                  >
                  Remove from cart
                  </Button> 
              </div>
              )
              :
            (<div className="d-flex align-items-center justify-content-center" style={{gap: ".5rem"}}>
              <div className="d-flex align-items-center justify-content-center" style={{gap: ".5rem"}}>
                <Button onClick={() => removeItemFromCart(item.id, item.price)}>-</Button>
                <div>
                  <span className="fs-3">{quantityInCart}</span>
                  in cart
                </div>
                <Button onClick={() => addItemToCart(item.id, item.price)}>+</Button>
              </div>
              <Button 
                variant="danger" 
                size="sm"
                onClick={() => deleteAllOfAnItemFromCart(item.id)}
              >
              Remove from cart
              </Button>
            </div>
            )
          )
        }
      </Card.Body>
    </Card>
  )
}

export default ItemCard