import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import { useRouter } from 'next/router';
import mockData from "../mock-data.json"
 
const ArtGalleryDetails =({google}) =>{
    const {query, query: {["art-gallery"]: artGallerySlug}, router} = useRouter();
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
                name={'Current location'}
                position={{lat: lat, lng: long}}
            />
        </Map>
      );
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAZiNn58q1I433czw_eTrvB-pg-ZXcGOkc")
})(ArtGalleryDetails)