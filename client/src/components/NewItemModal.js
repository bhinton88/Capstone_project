import { Modal, Form } from "react-bootstrap"

function NewItemModal() {

  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    item_name: "",
    price: 0.00,
    description: "",
    quantity_available: 0,
    photo_url: "",
    category_id: 1
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal show={show} onHide={handleClose}>

    </Modal>
  )
}

export default NewItemModal