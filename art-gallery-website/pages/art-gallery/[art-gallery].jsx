import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { useRouter } from 'next/router';
import mockData from "./mock-data.json"
 
const ArtGalleryDetails =({google}) =>{
    const onMarkerClick = () => {

    };

    const {query, query: {["art-gallery"]: artGallerySlug}, router} = useRouter();
    console.log(router, "router");
    console.log(query, "query", artGallerySlug);

    const {lat, long} = mockData.find((item) => item.slug === artGallerySlug);

    return (
        <Map
            initialCenter={{
            lat: lat,
            lng: long
          }}
          google={google} zoom={14}
        >
            <Marker
                onClick={onMarkerClick}
                name={'Current location'}
                position={{lat: lat, lng: long}}
            />
          <InfoWindow onClose={onMarkerClick}>
            <div>
                <h1>helo</h1>
            </div>
          </InfoWindow>
        </Map>
      );
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAZiNn58q1I433czw_eTrvB-pg-ZXcGOkc")
})(ArtGalleryDetails)