import styled from "styled-components";
import Tip from "./Tip";
const Input=styled.input`
    width:338px;
    height:45px;
    border-radius:10px;
    gap:10px;
    padding: 8px, 16px, 8px, 16px;
    font-size:14px;
    color:#909090;
    border: 1px solid #F1F1F1;
    background: linear-gradient(0deg, #F1F1F1, #F1F1F1),
    linear-gradient(0deg, #FAFAFA, #FAFAFA);

`;
const Label=styled.label`
    
    font-size:14px;
    color:#909090;
    font-weight:600;
   
    

`;


function Quiz(){
    return(
        <>
        <Label htmlFor="B">문제</Label>
        <Input id="Q" placeholder="문제를 입력하세요."/>
        <Label htmlFor="A">정답</Label>
        <Input id="A" placeholder="문제의 정답을 입력하세요."/>
        <Tip text="치*"/>
        </>
    );
}
export default Quiz;