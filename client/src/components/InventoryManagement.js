import { useContext } from "react"
import {CategoryContext } from "../context/CategoriesContext"
import CategoryTable from "./CategoryTable"




function InventoryManagement() {

  const { categories } = useContext(CategoryContext)

  return (
    <>
      <h1 className="mb-2">Inventory Management:</h1>
      {
        categories.map((category) => {
          return <CategoryTable key={category.id} category={category} />
        })
      }
    </>
  )
}

export default InventoryManagement