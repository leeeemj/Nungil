import styled from "styled-components";

const Text = styled.p`
  font-size: 0.8125rem;
  font-weight: 500;
  color: #909090;
`;

function Tip(props) {
  return <Text>{props.text}</Text>;
}

export default Tip;
