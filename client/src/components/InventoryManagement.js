import { useContext } from "react"
import {CategoryContext } from "../context/CategoriesContext"
import CategoryTable from "./CategoryTable"
import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons"




function InventoryManagement() {

  const { categories } = useContext(CategoryContext)

  return (
    <>
      <div className="d-flex justify-content-between">
        <h1 className="mb-2">Inventory Management:</h1>
        <Button
          className="me-4"
        >
          <FontAwesomeIcon icon={faSquarePlus} size='xl' />{' '}
          Add New Item
        </Button>
      </div>
      {
        categories.map((category) => {
          return <CategoryTable key={category.id} category={category} />
        })
      }
    </>
  )
}

export default InventoryManagement