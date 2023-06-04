import { Container, Navbar, Nav, Button, Modal  } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser} from '@fortawesome/free-regular-svg-icons'
import LoginUser from './LoginUser'


export default function NavBarS() {


  const [ expanded, setExpanded] = useState(false)
  const [ show, setShow ]= useState(false)

  function onAccountClick() {
    setShow(true)
  }

  function closeModal () {
    setShow(false)
  }

  return(
    <>
      <Navbar className='bg-white shadow-sm mb-3'>
        <Container>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/">Home</Nav.Link>
                <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/about">About Me</Nav.Link>
                <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/shop">Shop</Nav.Link>
              </Nav>
              <Button variant='outline-primary' onClick={onAccountClick}><FontAwesomeIcon icon={faCircleUser}/> Sign in </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sign in to your account:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginUser />
        </Modal.Body>
        <Modal.Footer>
          <p>Dont have an account?</p><NavLink to='/new_user' onClick={closeModal}>Click here to create an account!</NavLink>
        </Modal.Footer>
      </Modal>
    </>
  )

}