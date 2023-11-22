import styled from "styled-components";

const Btn = styled.button`
width: 338px;
height: 45px;
left: 7px;
padding: 14px, 40px, 14px, 40px;
border-radius: 10px;
gap: 10px;
border: none;
color: #ffffff;
background-color: #FA7268;


  &:hover{
    cursor: pointer;
  }
`

function Button2(props) {
    return <Btn>{props.text}</Btn>
}

export default Button2;