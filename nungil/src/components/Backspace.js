import styled from "styled-components";
import ArrowLeft from "../assets/Icon/ArrowLeft.svg";

const Button = styled.button`
  margin-top: 5%;
  margin-left:1%;
  background-color: transparent;
  border: 0;
  
  &:hover{
    cursor:pointer;
  }
`

const Img = styled.img`
  margin-left: 0%;
  width: 2rem;
  height: 2rem;
`;

function Backspace() {
  return (
    <Button>
      <Img src={ArrowLeft} alt="뒤로가기" />
    </Button>
  );
}

export default Backspace;
