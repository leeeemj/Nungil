import { MapMarker } from "react-kakao-maps-sdk";
import useKakaoLoader from "./useKakaoLoader";

function MarkUp() {
  useKakaoLoader()

  return (
    <>
    <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}/>
    </>
    
  )
}
export default MarkUp;