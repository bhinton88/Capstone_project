import { Button, Card } from "react-bootstrap"


function CategoryCard ({category}) {
 
  return(
    <Card className="">
      <Card.Body>
        <h1>{category.category_name}</h1>
        <Button 
          href={`/shop/${category.category_name}`} 
          className="stretched-link"
          variant="light"
        >
          Shop!
        </Button>
      </Card.Body>
    </Card>
  )

}

export default CategoryCard