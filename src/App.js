import { ThemeProvider } from "styled-components";

import { StyledContainer } from "./components/styled/Container.styled";
import { Header } from "./components/Header";
import GlobalStyle from "./components/styled/Global";
import content from "./content";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#000333",
    },
    mobile: "768px",
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <StyledContainer>
        {content.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </StyledContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
