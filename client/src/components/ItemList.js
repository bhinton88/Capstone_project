import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { CategoryContext } from "../context/CategoriesContext"


function ItemList() {

  const {category_name} = useParams()

  const {categories, setCategories } = useContext(CategoryContext)

  const categoryItems = categories.filter(value => value.category_name === category_name).map(value => value.items)
  const itemsArray = categoryItems[0]

  console.log(itemsArray)


}

export default ItemList