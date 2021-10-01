import styled from "styled-components";
import defaultImg from "../images/room-11.jpeg";

const StyledHero = styled.header`
  min-height: 80vh;
  background: url(${(props) => (props.img ? props.img : defaultImg)})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 10px 80px 0px white;
  filter: saturate(0.5);
`;

export default StyledHero;
