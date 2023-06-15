import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

 function ItemActions ({ id }) {

  


  return (
    <>
    <Button variant="success" size="sm" >
      <FontAwesomeIcon icon={faPencil} size="xs" />
    {/* here we will add button which EDITS this item */}
    </Button>
    <Button variant="danger" size="sm">
      <FontAwesomeIcon icon={faTrash} size="xs" />
    {/* here we will add a button which DELETES the item */}
    </Button>
    </>
  )
}

export default ItemActions;
