import {Form, Button } from 'react-bootstrap'
import { useState } from 'react'

function CreateUserForm () {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password_confirmation:"",
    address: "",
    city: "",
    state: "",
    email: "",
  })

  return (
    <Form> 
      <Form.Group className="mb-3">
        <Form.Label>Username:</Form.Label>
        <Form.Control 
          name="username"
          type="text" 
          placeholder="Enter Username" 
          value={formData.username}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          name="password"
          type="password" 
          placeholder="Enter Password" 
          value={formData.password}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Confirm Password:</Form.Label>
        <Form.Control
          name="password_confirmation"
          type="password" 
          placeholder="Please Confirm Password" 
          value={formData.password_confirmation}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Full Name:</Form.Label>
        <Form.Control
          name="name"
          type="text" 
          placeholder="Enter Full Name" 
          value={formData.name}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address:</Form.Label>
        <Form.Control
          name="email"
          type="email" 
          placeholder="email@example.com" 
          value={formData.email}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Preferred Craft (Please list just one) </Form.Label>
        <Form.Control
          name="preferred_craft"
          type="text" 
          placeholder="i.e. Knitting, Crochet, Weaving, etc.." 
          value={formData.preferred_craft}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Label>Craft Skill Level: </Form.Label>
      <Form.Select
        name="level_of_skill"
        onChange={onChange}
        value={formData.level_of_skill}
      >
        <option>Select a Skill Level</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </Form.Select>
      <Form.Text>
        <ul>
          {
            errors.map(value => {
              return <li style={{color: "red" }}><strong>{value}</strong></li>
            })
          }
        </ul>
      </Form.Text>

      <Button variant="primary" type="submit" onClick={onSubmit}>
        Submit
      </Button>
    </Form>
  )


}

export default CreateUserForm; 