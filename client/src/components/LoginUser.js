import { useContext, useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import { UserContext } from '../context/UserContext'

function LoginUser () {

  const {user, setUser} = useContext(UserContext)

  const [errors, setErrors] = useState([])
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  function onChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function onLoginSubmit (event) {
    event.preventDefault()

    fetch('/login',{
      method: "POST",
      headers: { "Content-Type":"application/json"},
      body: JSON.stringify(formData)
    })
    .then(response => {
      if(response.ok) {
        response.json().then(user => setUser(user))
      } else {
        response.json().then(data => setErrors(data.errors))
      }
    })
  }

  return(
    <Form onSubmit={onLoginSubmit}>
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

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          name="password"
          type="password" 
          placeholder="Password" 
          value={formData.password}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Text>
        <ul>
          {
            errors.map(value => <li key={value} style = {{color: "red"}}> <strong> {value} </strong> </li>)
          }
        </ul>
      </Form.Text>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default LoginUser