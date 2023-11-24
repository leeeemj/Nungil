import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Backspace from "../components/Backspace";
import Sub from "../components/Sub";
import Button2 from "../components/Button2";
import Write from "../components/Write";

const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
`;

function Gift1() {
    return (
    <Wrapper>
    <Backspace/>
    <Header head="글귀를 작성해주세요"/>
    <Sub explan="해당 장소에 얽힌 당신만의 이야기를 남겨주세요."/>
    <Sub explan="가벼운 이야기도 좋아요."/>
    <Write/>
    
    <Link to="/gift2">
          <Button2 text="다음으로" />
    </Link>
    </Wrapper>
    )
}

export default Gift1;

