import { Link } from "react-router-dom";
import { StyledLink } from "../StyledComponents/Link.tsx";
import "./Header.css";
import useWindowSize from "../CustomHooks/Reseize/useWindowSize.js";

function Header() {
  const screen  = useWindowSize();

  return (
      <nav className="header_nav">
        <ul className="nav_list">
          <li className="nav_list__list_item">
            <Link to="/" >
              <StyledLink fontSize={screen}> Home </StyledLink>
            </Link>
          </li>
          <li className="nav_list__list_item">
            <Link to="/ingredients">
              <StyledLink fontSize={screen}> Ingredients </StyledLink>
            </Link>
          </li>
          <li className="nav_list__list_item">
            <Link to="/products" >
              <StyledLink fontSize={screen}> Products </StyledLink>
            </Link>
          </li>
          <li className="nav_list__list_item">
            <Link to="/favorite" >
              <StyledLink fontSize={screen}> Favorites </StyledLink>
            </Link>
          </li>
        </ul>
      </nav>
  );
}

export default Header;
