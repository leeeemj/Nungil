import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk"

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: "9016e0e7ab8b418854591a255be11ee4",
    libraries: ["clusterer", "drawing", "services"],
  })
}