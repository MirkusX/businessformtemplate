import styled from "styled-components";
import kanye from "../Images/ye.png";

export const StyledDiv = styled.div`
  background-image: url(${kanye});
  background-size: contain;
  height: 100vh;
  @media (max-width: 811px) {
    width: 100%;
  }
`;
