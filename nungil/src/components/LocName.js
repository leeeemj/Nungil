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
const Div=styled.div`
    font-color:#909090;
    font-size:11px;
    margin-top:10px;
    margin-left:5px;
    
`;

function LocName(){
    return(
        <>
        <Input placeholder="  장소의 이름을 입력하세요."/>
        <Div>*정해주신 장소의 이름이 지도 상에서 보이게 돼요.</Div>
        </>
    );
}
export default LocName;