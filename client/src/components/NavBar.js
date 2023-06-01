import { Container, Navbar } from 'react-bootstrap'

export default function NavBar() {

  const [ expanded, setExpanded] = useState(false)

  return(
    <Navbar className='bg-white shadow-sm mb-3'>
      <Container>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/">Home</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/about">About Me</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/shop">Shop</Nav.Link>
            </Nav>
            <Button onClick={onClick}>Sign Out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}