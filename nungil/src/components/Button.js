import styled from "styled-components";

const Btn = styled.button`
  margin-top: 200px;
  width: 21.125em;
  height: 2.8125em;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  background-color: #FA7268;

  &:hover{
    cursor: pointer;
  }
`

function Button(props) {
    return <Btn>{props.text}</Btn>
}

export default Button;