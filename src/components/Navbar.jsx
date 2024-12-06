import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled components
const Wrapper = styled.div`
  position: sticky; /* Makes the navbar sticky */
  top: 0; /* Sticks to the top of the viewport */
  z-index: 1000; /* Ensures it stays above other content */
  background-color: #000000; /* Matches navbar background color */
  padding: 1rem;
`;

const NavbarContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoImage = styled.img`
  height: 50 px;
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
      color: #d1d5db; /* Tailwind hover:text-gray-300 */
    }
  }
`;

const NavLinks = styled.div`
  flex: 0 0 auto; /* Ensures links stay on the right */
  display: flex;
  gap: 16px; /* Equivalent to Tailwind space-x-4 */

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

const Navbar = () => {
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

        {/* Links on the right */}
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          {/* Add more links here */}
        </NavLinks>
      </NavbarContainer>
    </Wrapper>
  );
};

export default Navbar;
