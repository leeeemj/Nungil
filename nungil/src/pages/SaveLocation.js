import styled from "styled-components";
import Cancel from "../assets/Icon/cancel.png";

const NavigationBar = styled.div`
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  left: 0;
  margin-left: 1%;
`

const NavigationMessage = styled.p`
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: #262626;
  padding-top: 0.5rem;
`


function SaveLocation() {
  return (
    <>
      <NavigationBar>
        <div>
          <Img src={Cancel} alt="취소" />
        </div>
          <NavigationMessage>주소 지정하기</NavigationMessage>
      </NavigationBar>
      {/* <Map></Map>
      <Select></Select> */}
    </>
  );
}

export default SaveLocation;
