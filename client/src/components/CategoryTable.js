import { Table, Stack } from "react-bootstrap"
import ItemActions from "./ItemActions"
import { useContext } from "react"
import { ItemContext } from "../context/ItemContext"

function CategoryTable({category}) {

  const {category_name } = category

  const { items } = useContext(ItemContext)

  const filteredItems = items.filter(item => item.category_name === category_name)

  const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD", 
    style: "currency"
  })

  function formatCurrency(number) {
    return CURRENCY_FORMATTER.format(number)
  }

  return (
    <>
    <Stack gap={2} > 
      <h2>{category_name}</h2>
      <Table 
        striped 
        hover
        bordered
        responsive
      >
        <thead>
          <tr>
            <th>Item Name:</th>
            <th>Description:</th>
            <th>Price:</th>
            <th>Quantity Available:</th>
            <th>Actions:</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredItems.map(item => {
              return(
              <tr key={item.id}>
                <td>{item.item_name}</td>
                <td>{item.description}</td>
                <td>{formatCurrency(item.price)}</td>
                <td>{item.quantity_available}</td>
                <td><ItemActions item={item}/></td>
              </tr>
              )
            })
          }
        </tbody>
        </Table>
      </Stack>
    </>

  )
}

export default CategoryTable