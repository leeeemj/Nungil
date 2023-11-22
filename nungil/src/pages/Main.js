import BasicMap from "../components/BasicMap";
import { Map,MapMarker } from "react-kakao-maps-sdk";



function Main() {
    return (
        <>
         <Map
            center={{ lat: 33.5563, lng: 126.79581 }}
            style={{ width: "100%", height: "360px" }}>
        {/* map으로 json돌려 마커찍기 */}
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
      </MapMarker>
    </Map>
        
        </>

    )
}

export default Main;
