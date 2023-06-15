import { Modal, Form, Col, Row, Button } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import { CategoryContext } from "../context/CategoriesContext"
import UploadWidget from "./UploadWidget"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons"

function NewItemModal( { show, handleClose }) {

  const {categories} = useContext(CategoryContext)
  const [cloudinaryData, setCloudinaryData] = useState({})

  const category_names = categories.map(value => {
      return (
        {
          id: value.id,
          category_name: value.category_name
        }
      )
  })

  // stored the cloudinary data on the backend for more security and then made a call from the front end
  useEffect(() => {
    fetch("/data")
    .then(response => response.json())
    .then(data => setCloudinaryData(data))
  }, [])


  const [formData, setFormData] = useState({
    item_name: "",
    price: 0.00,
    description: "",
    quantity_available: 0,
    photo_url: "",
    category_id: 1
  })

  function onChange (event) {
    setFormData({
      ...formData,
      [event.target.name]:event.target.value
    })
  }

  function addPhotoUrl (url){
    setFormData({
      ...formData,
      photo_url: url
    })
  }

  function onSubmit(event){
    event.preventDefault()

  }

  

  return (
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Create a new item</Modal.Title>
        </Modal.Header>
        <Form className='d-flex flex-column m-3'> 
          <Row className='mb-3'>
            <Form.Group as={Col}>
              <Form.Label>Item Name:</Form.Label>
              <Form.Control
                name="item_name"
                type="text" 
                value={formData.item_name}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Item Price:</Form.Label>
              <Form.Control
                name="price"
                type="number" 
                min="0"
                step="0.01"
                value={formData.price}
                onChange={onChange}
              />
            </Form.Group> 
            <Form.Group as={Col}>
              <Form.Label>Quantity Available:</Form.Label>
              <Form.Control
                name="quantity_available"
                type="number" 
                min="0"
                step="1"
                value={formData.quantity_available}
                onChange={onChange}
              />
            </Form.Group>     
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col}>
              <Form.Label>Item Description</Form.Label>
              <Form.Control 
                name="desciption"
                as="textarea"
                rows={4} 
                placeholder="Enter a brief description about the item" 
                value={formData.description}
                onChange={onChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Category:</Form.Label>
              <Form.Select
                name="category_id"
                value={formData.category_id}
                onChange={onChange}
              >
              {category_names.map(value => <option key={value.id} value={value.id}>{value.category_name}</option>)}
              </Form.Select>
            </Form.Group>
          </Row>
          <Form.Group as={Col}>
            <Form.Text className="me-3">
              Upload a photo:
            </Form.Text>
            {formData.photo_url ?
             <FontAwesomeIcon icon={faCheck} beatFade size="sm" />
             :
             <UploadWidget 
              cloudinaryData={cloudinaryData}
              addPhotoUrl={addPhotoUrl}
            />
            }
            </Form.Group>
            <div className="d-flex mt-3 justify-content-center">
              <Button>
                Add new item
              </Button>
            </div>
        </Form>
      </Modal>
  )
}

export default NewItemModal