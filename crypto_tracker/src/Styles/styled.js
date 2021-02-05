import styled from "styled-components";
import { MenuItem } from "react-pro-sidebar";

export const AppContainer = styled.div`
  margin: 0 auto;
  background-color: #1fc58e;
  height: 100vh;
  width: 100vw;
`;

export const TwitterContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
`;

export const AlignmentContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterContainer = styled.div`
  align-items: center;
  padding: 0.5rem;
  justify-content: space-around;
  text-align: center;
  margin: 0 auto;
  display: flex;
  position: fixed;
  left: 30%;
  width: 50%;
  height: 50px;
  background-color: white;
  bottom: 0;
  border: 2px solid yellow;
  border-radius: 1rem 0.2rem;
`;

export const FooterLink = styled.a`
  color: #191414;
  padding: 0.5rem;
  margin: 0.1rem;
  text-decoration: none;
`;

export const StyledMenuItem = styled(MenuItem)`
  &::active {
    background-image: linear-gradient(0deg, #fece00 0%, #ffe172 100%);
  }
`;
