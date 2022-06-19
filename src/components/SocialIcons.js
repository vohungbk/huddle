import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "./styled/SocialIcons.styled";

export const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FaFacebook />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
    </StyledSocialIcons>
  );
};
