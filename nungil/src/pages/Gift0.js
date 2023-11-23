import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useState } from "react";
import SaveLocation from "../components/SaveLocation";
import useKakaoLoader from "../components/useKakaoLoader";
import Button from "../components/Button";

const Modal = styled.div`
  position: fixed;
  top: 80vh;
  width: 100%;
  height: 217px;
  z-index: 100;
  background-color: #fff;
  overflow: hidden;
  border-radius: 20px;
`;

const Info = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
`;

const Address = styled.div`
  display: flex;
  width: 21.5625rem;
  height: 2.8125rem;
  background-color: #fafafa;
  border-radius: 10px;
  color: #909090;
  font-size: 0.875rem;
`;

function Gift0() {
  const [position, setPosition] = useState();
  const [clickedAddress, setClickedAddress] = useState("");
  useKakaoLoader();

  const searchDetailAddrFromCoords = (coords, callback) => {
    const geocoder = new window.kakao.maps.services.Geocoder();

    // 좌표로 법정동 상세 주소 정보를 요청합니다
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
  };

  const handleMarkerClick = (mouseEvent) => {
    const coords = mouseEvent.latLng;

    searchDetailAddrFromCoords(coords, function (result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        // 도로명 주소 정보가 있는 경우에만 처리
        if (result[0].road_address) {
          const roadAddress = result[0].road_address.address_name;
          setClickedAddress(roadAddress);
        } else {
          setClickedAddress("도로명 주소 정보가 없음");
        }
      } else {
        setClickedAddress("주소 정보를 가져올 수 없음");
      }
    });
  };

  return (
    <>
      <SaveLocation />
      <Map
        // 현재위치로 받아와서 지도 생성하기
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "100%", height: "900px" }}
        // 클릭하면 마커 생기기
        onClick={(_t, mouseEvent) => {
          setPosition({
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
          });
          handleMarkerClick(mouseEvent);
        }}
      >
        {position && <MapMarker position={position} />}
      </Map>
      <Modal>
        <Info>내가 선물할 장소의 주소는 여기에요!</Info>
        <Address>
         {clickedAddress && <p>{clickedAddress}</p>}
        </Address>
        <Button text="이 위치로 정할게요" />
      </Modal>
    </>
  );
}
export default Gift0;
