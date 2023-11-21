import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Backspace from "../components/Backspace";
import Sub from "../components/Sub";
import Button from "../components/Button";
import Present from "../assets/Icon/present.png";
import Copy from "../assets/Icon/copy.png";

const Setting = styled.div`
  margin: 0 0 0 8%;
`;

const FlexBox = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  margin-left: 1%;
`;

const CenterText = styled.div`
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  color: #ABABAB
`
const Address = styled.div`
  width: 21.125em;
  height: 2.8125em;
  border: none;
  border-radius: 10px;
  padding: 0.5em 1em;
  background-color: #fafafa;
  color: #909090;
  font-size: 0.875em;
`

function CreateMap2() {
  return (
    <>
      <Link to="/createmap1">
        <Backspace />
      </Link>
      <Setting>
        <Header head="이제 장소를 선물 받을 준비가" />
        <FlexBox>
          <Header head="완료 되었어요" />
          <Img src={Present} alt="선물 상자" />
        </FlexBox>
        <Sub explan="아래의 URL을 복사하여 SNS에 공유하고," />
        <Sub explan="친구들에게 장소를 선물 받으세요." />
        <CenterText>공유 링크</CenterText>
        <Address>https:...</Address>
        <img src={Copy} alt="박스를 누르면 복사가 돼요!" />
        <p>복사가 안된다면 여기 클릭</p>
        <Link to="/createmap">
          <Button text="처음으로 돌아가기" />
        </Link>
      </Setting>
    </>
  );
}

export default CreateMap2;
