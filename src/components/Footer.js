import { SocialIcons } from "./SocialIcons";
import { StyledContainer } from "./styled/Container.styled";
import { Flex } from "./styled/Flex.styled";
import { StyledFooter } from "./styled/Footer.styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <img src="./images/logo_white.svg" alt="" />
        <Flex>
          <ul>
            <li>
              <img width={20} height={20} src="./images/icon-location.svg" alt="" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>
              <img width={20} height={20} src="./images/icon-phone.svg" alt="" />
              +1-543-123-4567
            </li>
            <li>
              <img width={20} height={20} src="./images/icon-email.svg" alt="" />
              example@huddle.com
            </li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2022 HungVo. All rights reserved</p>
      </StyledContainer>
    </StyledFooter>
  );
};
