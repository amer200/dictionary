import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Button,
} from "reactstrap";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <Navbar color="success" container dark expand="lg" fixed="top" light>
        <NavbarBrand href="/">الافعال</NavbarBrand>
        <NavbarBrand href="/">الاسماء</NavbarBrand>
        <NavbarToggler
          onClick={() => {
            const navTogg = document.getElementsByClassName("collapse")[0];
            navTogg.classList.toggle("d-block");
          }}
        />
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
              <NavLink>
                <input
                  type="search"
                  id="site-search"
                  name="q"
                  aria-label="Search through site content"
                  placeholder="ابحث هنا"
                  className="search-input"
                />
                <img className="search-icon" src="/loupe.png" alt="seatch" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Button
                  className="close-btn"
                  close
                  color="dark"
                  outline
                  size="sm"
                  onClick={() => {
                    const nav = document.getElementsByClassName("navbar")[0];
                    const btn = document.getElementsByClassName("close-btn")[0];
                    nav.classList.toggle("hide-nav");
                    btn.classList.toggle("close-btn-hide");
                  }}
                />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
