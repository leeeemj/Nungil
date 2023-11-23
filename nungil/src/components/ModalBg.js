import styled from "styled-components";

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background: rgba(0, 0, 0, 0.55);
`;

function ModalBg() {
    return <BackDrop />
}

export default ModalBg;
