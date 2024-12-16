import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import Hamburger from "hamburger-react";

// Styled components
const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #000000;
  padding: 1rem;
`;

const NavbarContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoImage = styled.img`
  height: 50px;
  width: 100px;
  object-fit: contain;
`;

const CompanyName = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;

  a {
    text-decoration: none;
    color: #d3d3d3;
    &:hover {
      color: #d1d5db;
    }
  }
`;

const NavLinks = styled.div.attrs((props) => ({
  isMobile: props.isMobile || false, // Prevent prop warning
}))`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    display: ${(props) => (props.isMobile ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #000;
    padding: 1rem 0;
    align-items: center;
    z-index: 999;
  }

  a {
    text-decoration: none;
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #1e40af;
    }
  }
`;

const HamburgerWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    cursor: pointer;
  }
`;

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobile(false);
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu when link is clicked
  const handleLinkClick = () => {
    setIsMobile(false);
    setOpen(false);
  };

  return (
    <Wrapper>
      <NavbarContainer>
        {/* Logo */}
        <LogoContainer>
          <Link to="/">
            <LogoImage
              src="https://res.cloudinary.com/dvr3sk23p/image/upload/v1732809781/Screenshot_2024-11-28_170244_adh17l.png"
              alt="CryptoCare Hub Logo"
            />
          </Link>
        </LogoContainer>

        {/* Company Name */}
        <CompanyName>
          <Link to="/">CryptoCare Hub</Link>
        </CompanyName>

        {/* Hamburger Menu */}
        <HamburgerWrapper>
          <Hamburger
            toggled={isOpen}
            toggle={() => {
              setOpen(!isOpen);
              setIsMobile(!isMobile);
            }}
            color="#3a5add"
            aria-label={isOpen ? "Close menu" : "Open menu"} // Accessibility
          />
        </HamburgerWrapper>

        {/* Navigation Links */}
        <NavLinks ref={menuRef} isMobile={isMobile}>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/services" onClick={handleLinkClick}>
            Services
          </Link>
          <Link to="/about" onClick={handleLinkClick}>
            About Us
          </Link>
          <Link to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </NavLinks>
      </NavbarContainer>
    </Wrapper>
  );
};

export default Navbar;
