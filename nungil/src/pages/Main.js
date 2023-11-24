import React,{useState,useEffect} from "react";
import { Map,MapMarker } from "react-kakao-maps-sdk";
import useKakaoLoader from "../components/useKakaoLoader";
import PlacesData from "../db/places.json";
import GiftBtn from "../components/GiftBtn";
import PinNum from "../components/PinNum";




function Main() {
    useKakaoLoader()
    useKakaoLoader()
    const useMarkerClick = () => {
        const [selectedMarker, setSelectedMarker] = useState(null);
        const [places, setPlaces] = useState(PlacesData.places);
      
        useEffect(() => {
          const markers = places.map((place) => {
            const marker = new window.kakao.maps.Marker({
              position: new window.kakao.maps.LatLng(place.latitude, place.longitude),
            });
      
            const handleClick = () => {
              if (selectedMarker) {
                selectedMarker.setImage(new window.kakao.maps.MarkerImage(
                  '../asset/Icon/marker.png',
                  new window.kakao.maps.Size("30px", "30px")
                ));
              }
      
              marker.setImage(new window.kakao.maps.MarkerImage(
                '../asset/Icon/giftMarker.png',
                new window.kakao.maps.Size("30px", "30px")
              ));
      
              setSelectedMarker(marker);
            };
      
            window.kakao.maps.event.addListener(marker, 'click', handleClick);
      
            return marker;
        });
    
        markers.forEach((marker) => {
          marker.setMap(window.map);
        });
    
        return () => {
          markers.forEach((marker) => {
            window.kakao.maps.event.removeListener(marker, 'click');
          });
        };
      }, [places, selectedMarker]);
    
      return selectedMarker;
    };
    const markerImage = {
        src: process.env.PUBLIC_URL + 'img/basicMarker.svg',
        size: {
          width: 64,
          height: 69,
        },
        options: {
          offset: {
            x: 27,
            y: 69,
          },
        },
      };
    const giftMarkerImage={
        src: process.env.PUBLIC_URL + 'img/giftMarker.svg',
        size: {
          width: 64,
          height: 69,
        },
        options: {
          offset: {
            x: 27,
            y: 69,
          },
        },
    }
       

    
    
    return (
        <>
        
         <Map
            center={{ lat: 33.5563, lng: 126.79581 }}
            style={{ width: "100%", height: "100vh" }}>
        
        {PlacesData.places.map(res=>{
            <MapMarker onClick={useMarkerClick}
            position={{
            lat:res.latitude,
            lng:res.longitude}}
            // image={markerImage}
            />
        })}
        <PinNum/>
        <GiftBtn/>
        </Map>
        
        </>

    );
}

export default Main;
