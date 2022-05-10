import { Button } from "./styled/Button.styled";
import { StyledContainer } from "./styled/Container.styled";
import { Flex } from "./styled/Flex.styled";
import { Image, Logo, Nav, StyledHeader } from "./styled/Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in
              genuine discussion.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </StyledContainer>
    </StyledHeader>
  );
};
