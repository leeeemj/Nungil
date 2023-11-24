import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Backspace from "../components/Backspace";
import Sub from "../components/Sub";
import Tip from "../components/Tip";

import LocName from "../components/LocName";
import Button2 from "../components/Button2";
import Quiz from "../components/Quiz";
import Pretendard from "pretendard";
const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    font-style:pretendard;
`;

function Gift() {
    return (
    <Wrapper>
    <Backspace/>
    <Header head="장소의 이름을 정해주세요"/>
    <Sub explan="지정하신 장소를 부를 이름을 정해세요."/>
    <Sub explan="ex) 숭실대 조만식기념관 옆 나무계단"/>
    <LocName/>
    
    <Link to="/gift1">
          <Button2 text="다음으로" />
    </Link>
    </Wrapper>
    )
}

export default Gift;

