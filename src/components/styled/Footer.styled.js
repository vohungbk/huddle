import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;
  ul {
    list-style: none;
    padding: 0;
    margin-right: 20px;
  }
  ul:first-child {
    max-width: 45%;
  }
  ul:not(:first-child) {
    padding-left: 40px;
  }

  ul li {
    margin-bottom: 20px;
    display: flex;
    align-items: flex-start;
  }
  ul li img {
    margin-right: 20px;
    min-height: 20px;
    min-width: 20px;
  }
  p {
    text-align: right;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    div:first-child {
      text-align: left;
    }
    ul {
      padding: 0;
      margin: 0;
      text-align: left;
    }

    ul:first-child {
      margin: 30px 0;
      max-width: 100%;
    }

    ul:not(:first-child) {
      padding-left: 0;
    }

    p {
      text-align: center;
    }
  }
`;
