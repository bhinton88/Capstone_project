import { Button, Card } from "react-bootstrap"



function ItemCard({item}) {


  const {item_name, price, description, quantity_available, photo_url } = item


  return (
    <Card>
      {/* <Card.Img as="img" variant="top"> */}
      <Card.Body>
        <Card.Title>{item_name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          Price: ${price}.00
        </Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  )
}

export default ItemCard