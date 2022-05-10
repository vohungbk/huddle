import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
  }
`;
