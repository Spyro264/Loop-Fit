import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { useRouteQuery } from "../services/osrmApi";
import { data } from "react-router-dom";

const Map = ({ pointA, pointB, pointC, km }) => {
  const {
    data: coordinates1,
    loading: loading1,
    error: error1,
  } = useRouteQuery(pointA, pointB);

  const {
    data: coo2,
    loading: loa2,
    error: err2,
  } = useRouteQuery(pointB, pointC);

  const {
    data: coo3,
    loading: loa3,
    error: err3,
  } = useRouteQuery(pointC, pointA);

  console.log({ coordinates1: coordinates1?.routes[0]?.distance });
  console.log({ coo2: coo2?.routes[0]?.distance });
  console.log({ coo3: coo3?.routes[0]?.distance });

  const totalMeters =
    coordinates1?.routes[0]?.distance +
    coo2?.routes[0]?.distance +
    coo3?.routes[0]?.distance;

  const totalKm = totalMeters / 1000;

  console.log({ totalKm });

  return (
    <MapContainer
      className="h-full w-full"
      center={[12.9716, 77.5946]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[12.9716, 77.5946]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
