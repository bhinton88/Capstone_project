import { Container, Navbar, Nav, Button  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser} from '@fortawesome/free-regular-svg-icons'


export default function NavBarS() {

  const [ expanded, setExpanded] = useState(false)

  return(
    <Navbar className='bg-white shadow-sm mb-3'>
      <Container>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/">Home</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/about">About Me</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/shop">Shop</Nav.Link>
            </Nav>
            <Button variant='outline-primary'><FontAwesomeIcon icon={faCircleUser}/> Account </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}