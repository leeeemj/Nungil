import styled from "styled-components";
const Input=styled.input`
    width: 338px;
    height: 252px;
    top: 114px;
    padding: 26px, 184px, 213.9px, 25px;
    border-radius: 20px;
    gap: 10px;
    background-color:#FA72681A;
    opacity:0.9;
    border:none;
    font-size:14px;
    font-color:#9B9B9B;

`;


function Write(){
    return(
        <>
        <Input placeholder="   이야기를 작성해주세요."/>
        </>
    );
}
export default Write;