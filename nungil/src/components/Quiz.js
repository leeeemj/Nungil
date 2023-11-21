import styled from "styled-components";
const Input=styled.input`
    width:338px;
    height:45px;
    border-radius:10px;
    gap:10px;
    padding: 8px, 16px, 8px, 16px;
    font-size:14px;
    font-color:#909090;
    border: 1px solid #F1F1F1;
    background: linear-gradient(0deg, #F1F1F1, #F1F1F1),
    linear-gradient(0deg, #FAFAFA, #FAFAFA);

`;

function Quiz(){
    return(
        <>
        <div>문제</div>
        <Input placeholder="문제를 입력하세요."/>
        <div>정답</div>
        <Input placeholder="문제의 정답을 입력하세요."/>
        </>
    );
}
export default Quiz;