import { Map,MapMarker } from "react-kakao-maps-sdk";
import { useState } from "react";
import Sub from "../components/Sub";

function Gift0() {
    const [position, setPosition] = useState()

    return(
        <>
        <Sub explan="주소 지정하기"/>
        <Map
        //현재위치로 받아와서 지도 생성하기
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "100%", height: "900px" }}
        //클릭하면 마커 생기기
        onClick={(_t, mouseEvent) => setPosition({
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
          })}
        >
        {position && <MapMarker position={position} />}
        </Map>
        
        </>
    )
}
export default Gift0;