import styled from "styled-components";
const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
`;
const Input=styled.div`
    border-bottom: 2px solid #DCDCDC;
    font-size:28px;
    font-weight:600;
`;
//작성하면 아래 밑줄 색깔 변하게 하는 코드
const Div=styled.div`
    left:8px;
    gap:5px;
    font-size:11px;
    font-color:#909090;
    text-align:center;

`;
function SetPw(){
    return(
        <>
        <Wrapper>
            <Input maxlength='1'/>
            <Input maxlength='1'/>
            <Input maxlength='1'/>
            <Input maxlength='1'/>
            <Input maxlength='1'/>
            <Input maxlength='1'/>
        </Wrapper>
        <Div>-반드시 6자리로 비밀번호를 구성해주세요.</Div>
        <Div>-비밀번호는 장소를 선물한 주체를 식별하기 위해 사용돼요.</Div>
        <Div>-한 번 정한 비밀번호는 다시 바꿀 수 없어요.</Div>
        </>
    );
}
export default SetPw;