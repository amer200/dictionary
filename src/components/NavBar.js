import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <Navbar color="success" container dark expand="md" fixed="top" light>
        <NavbarBrand href="/">الافعال</NavbarBrand>
        <NavbarBrand href="/">الاسماء</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="#">صندوق 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">صندوق 2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">صندوق 3</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">صندوق 4</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">المحذوفات</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">المحذوفات</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <input
                  type="search"
                  id="site-search"
                  name="q"
                  aria-label="Search through site conten"
                />
                <img className="search-icon" src="/loupe.png" alt="seatch" />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
