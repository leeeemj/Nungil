import styled from "styled-components";
const Div=styled.div`
    width: 265px;
    height: 105px;
    background-color:#ffffff;
`;
const Loc=styled.div`
    font-size: 13px;
    font-weight: 600;
    text-align: center;
    color:#262626;

    `;
const Add=styled.div`
    font-size: 10px;
    font-weight: 600;
    text-align: center;
    color:#707070;
    `;

function Infor(props){
    return(
        <>
        <Div>
            <img src={`${process.env.PUBLIC_URL}/img/.svg`}/>
            <Loc>{props.placeName}</Loc>
            <Add>{props.address}</Add>
            <img src={`${process.env.PUBLIC_URL}/img/letter.svg`}/>
        </Div>
        </>
    )


}export default Infor;