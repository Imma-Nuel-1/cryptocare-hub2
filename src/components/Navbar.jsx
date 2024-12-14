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
  position: relative; /* Added to allow positioning of the hamburger */
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const LogoContainer = styled.div`
  flex: 0 0 auto;
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
  flex: 1;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  transition: color 0.3s ease;

  a {
    text-decoration: none;
    color: #d3d3d3;

    &:hover {
      color: #d1d5db;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    display: ${({ isMobile }) => (isMobile ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #000;
    padding: 1rem 0;
    align-items: center;
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
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;
  width: 25px;
  position: absolute; /* Set to absolute to position it independently */
  right: 20px; /* Push it to the right */
  top: 1px; /* Adjust top distance for centering */

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null); // Ref for menu to detect outside clicks

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobile(false);
        setOpen(false); // Close hamburger on outside click
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMobile(false); // Close the menu when a link is clicked
    setOpen(false); // Close hamburger when a link is clicked
  };

  return (
    <Wrapper>
      <NavbarContainer>
        {/* Logo on the left */}
        <LogoContainer>
          <Link to="/">
            <LogoImage
              src="https://res.cloudinary.com/dvr3sk23p/image/upload/v1732809781/Screenshot_2024-11-28_170244_adh17l.png"
              alt="CryptoCare Hub Logo"
            />
          </Link>
        </LogoContainer>

        {/* Company Name in the center */}
        <CompanyName>
          <Link to="/">CryptoCare Hub</Link>
        </CompanyName>

        {/* Hamburger Icon for mobile */}
        <HamburgerWrapper>
          <Hamburger toggled={isOpen} toggle={setOpen} color="#3a5add" />
        </HamburgerWrapper>

        {/* Navbar Links */}
        <NavLinks ref={menuRef} isMobile={isOpen}>
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
