import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const icon = new Icon({
  iconUrl: "/assets/icons/locationPin.svg",
  iconSize: [32, 32],
});

interface MapProps {
  lng: number;
  lat: number;
  zoom: number;
  tooltip: string;
}

const Map: React.FC<MapProps> = ({ lng, lat, zoom, tooltip }) => (
  <MapContainer
    center={[lng, lat]}
    zoom={zoom}
    scrollWheelZoom={false}
    style={{ height: "100%" }}
  >
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
      integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
      crossOrigin=""
    />
    <TileLayer
      attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
    />
    <Marker icon={icon} position={[lng, lat]}>
      <Popup>{tooltip}</Popup>
    </Marker>
  </MapContainer>
);
export default Map;
