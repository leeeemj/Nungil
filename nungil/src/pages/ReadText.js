import styled from "styled-components";
import Main from "./Main";
import ModalBg from "../components/ModalBg";
import DialogBox from "../assets/modal/dialogbox.png";

const Modal = styled.div`
  position: fixed;
  z-index: 3;
  top: 40vh;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContent = styled.div`
  position: relative;
  width: 21.0625rem;
  height: 16.125rem;
  background-image: url(${DialogBox});
  background-size: cover;
  border-radius: 15px;
`;

const Text = styled.div`
  position: absolute;
  top: 25%;
  left: 10%;
  right: 10%;
  height: 7.5rem;

  color: #505050;
  font-size: 0.875rem;
  font-weight: 600;
`

const Name = styled.p`
  position: absolute;
  left: 10%;
  top: 73%;
  font-size: 0.75rem;
  font-weight: 600;
  color: #9B9B9B;
`
function ReadText() {
  return (
    <>
      <ModalBg />
      <Modal>
        <ModalContent>
            <Text>이제 여기에 메세지가 작성됩니다.
                하지만
                줄을 바꿔도 나타나지 않아요
                이것 까지 할 수 있을까요?
                어떤 말을 작성할지 모르겠지만, 줄 바꿈을 하겠죠..?
                글은 꽤 많이 작성되네요.
                일단 임시로 Text 높이를 설정 해둔 거라서 변경해도 돼요.
                조금 더 쭉쭉 가서 여기가 제가 생각한 마지막 줄이에요
            </Text>
            <Name>슝슝이</Name>
        </ModalContent>
      </Modal>
      <Main />
    </>
  );
}

export default ReadText;
