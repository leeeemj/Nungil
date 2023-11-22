import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Backspace from "../components/Backspace";
import Sub from "../components/Sub";



import Button2 from "../components/Button2";
import Quiz from "../components/Quiz";
import MsgGift from "../components/MsgGift";


const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
`;

function Gift2() {
    return (
    <Wrapper>
    <Backspace/>
    <Header head="(선택) 퀴즈를 낼 수 있어요"/>
    <Sub explan="상대방이 퀴즈를 맞춰야지만 작성하신 글귀를 볼 수 있어요."/>
    <Sub explan="퀴즈는 단답식만 가능해요"/>
    <Quiz/>
    <MsgGift/>
    
    <Link to="/main">
          <Button2 text="다음으로" />
    </Link>
    </Wrapper>
    )
}

export default Gift2;

