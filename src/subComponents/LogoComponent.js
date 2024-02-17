import styled from "styled-components";
import { DarkTheme, mediaQueries } from "../components/Themes";
import logoImage from "../assets/Images/roundedLogo.png";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;

  z-index: 3;

  ${mediaQueries(40)`
      font-size:1.5em;
      left:1rem;
      top:2rem;
  `};
`;

const LogoImg = styled.img`
  width: 60px; // Adjust the width of your logo image as needed
  height: auto; // Maintain aspect ratio
`;

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
      <LogoImg src={logoImage} alt="Logo" />
    </Logo>
  );
};

export default LogoComponent;
