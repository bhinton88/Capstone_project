import { useContext } from "react"
import { useParams } from "react-router-dom"
import { Col, Row } from "react-bootstrap"
import ItemCard from "./ItemCard"
import { ItemContext } from "../context/ItemContext"


function ItemList() {

  const {category_name} = useParams()

  const {items, setItems} = useContext(ItemContext)
 
  const sortedItems = items.filter(item => item.category_name === category_name)

  console.log(sortedItems)

  return (
    <>
    <h1 align="center" className="p-3">{category_name}: </h1>
      <Row xs={1} md={3} className="g-4">
        {
          sortedItems.map(item =>{
            return(
            <Col align="center" key={item.id}>
              <ItemCard item={item}/>
            </Col>
            )
          })
        }
      </Row>
    </>


  )




}

export default ItemList