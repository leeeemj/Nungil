import styled from "styled-components";

const Div=styled.div`
position:absolute;
bottom:100px;
right:297px;
z-index:1;
`;

const Number=styled.div`
    position:absolute;
    z-index:1;
    font-size: 13px;
    font-weight: 600;
    text-align: center;
    color:#ffffff;
    bottom:13px;
    right:11px;
`;
function PinNum(){
    return(
        <Div>
        <img src={`${process.env.PUBLIC_URL}/img/Num.svg`} />
        <Number>n 개</Number>
        </Div>
    )
}export default PinNum;