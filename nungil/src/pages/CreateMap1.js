import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Backspace from "../components/Backspace";
import Sub from "../components/Sub";
import Button from "../components/Button";

const Setting = styled.div`
  margin: 0 0 350px 8%;
`;

const FlexBox = styled.div`
  display: flex;
`;

const BoldPage = styled.p`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #000000;
`;

const Page = styled.p`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #b1b1b1;
`;

const Input = styled.input`
  width: 11.0625em;
  height: 2.8125em;
  padding: 6px 4px -4px 0px;
  font-size: 1.25em;
  color: #000000;
  border: none;
  border-bottom: 1.5px solid;
  text-align: center;

  &:focus {
    outline: none;
  }
`;

const FormText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #909090;
  font-size: 1.25rem;
  margin-bottom: 0;
`;
const FormUnderText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #909090;
  font-size: 1.25rem;
  margin: 10px 0 0 0;
`;

const CenterBox = styled.div`
  text-align: center;
`;

function CreateMap1() {
  return (
    <>
      <Link to="/createmap">
        <Backspace />
      </Link>
      <Setting>
        <FlexBox>
          <BoldPage>2</BoldPage>
          <Page>/2</Page>
        </FlexBox>
        <Header head="장소 테마 정하기" />
        <Sub explan="추천 받고 싶은 장소의 테마를 정해주세요" />
        <form>
          <FormText>숭멋사 님은</FormText>
          <FlexBox>
            <Input type="text" placeholder="소소한 여행 플레이스" />
            <FormText>(을)를</FormText>
          </FlexBox>
          <FormUnderText>선물 받고 싶어요.</FormUnderText>
        </form>
      </Setting>
      <CenterBox>
        <Link to="/createmap2">
          <Button text="다음으로" />
        </Link>
      </CenterBox>
    </>
  );
}

export default CreateMap1;
