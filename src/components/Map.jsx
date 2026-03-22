import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import { useEffect, useState } from "react";
import generateRoute from "../services/generateRoute";
import Loader from "./Loader";
import { startIcon, endIcon } from "../constants/mapIcons";

const Map = ({ km }) => {
  const [goingCoords, setGoingCoords] = useState([]);
  const [returnCoords, setReturnCoords] = useState([]);
  const [currLoc, setCurrLoc] = useState();
  const [loader, setLoader] = useState(false);

  // function to run the generateRoute function and log the nearest route
  async function run() {
    setLoader(true);

    try {
      const neareastRoute = await generateRoute(km)();
      setCurrLoc(neareastRoute);

      const toCoords = (res) =>
        res?.routes[0]?.geometry?.coordinates?.map(([lng, lat]) => [
          lat,
          lng,
        ]) || [];

      const [res1, res2, res3] = neareastRoute?.routes || [];
      const going = [...toCoords(res1), ...toCoords(res2)];
      const returning = toCoords(res3);

      // adding end point for exact loop
      if (neareastRoute?.pointA) {
        returning.push([neareastRoute.pointA.lat, neareastRoute.pointA.lng]);
      }
      setGoingCoords(going);
      setReturnCoords(returning);
      setLoader(false);
    } catch (err) {
      setLoader(false);
      console.log({ err });
    }
  }

  // run everytime km changes
  useEffect(() => {
    run();
  }, [km]);

  // set the initial map loc
  const center = currLoc?.pointA
    ? [currLoc.pointA.lat, currLoc.pointA.lng]
    : [12.9716, 77.5946];

  // This is used to automatically zoom & move the map so your route is fully visible.
  function FitBounds({ coords }) {
    const map = useMap();
    if (coords.length > 0) {
      map.fitBounds(coords);
    }
    return null;
  }

  if (loader) return <Loader />;

  return (
    <MapContainer
      className="h-full w-full"
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      style={{ borderRadius: 5 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {goingCoords.length > 0 && (
        <Polyline
          positions={goingCoords}
          pathOptions={{ color: "green", weight: 4 }}
        />
      )}

      {returnCoords.length > 0 && (
        <Polyline
          positions={returnCoords}
          pathOptions={{ color: "red", weight: 4 }}
        />
      )}

      {(goingCoords.length > 0 || returnCoords.length > 0) && (
        <FitBounds coords={[...goingCoords, ...returnCoords]} />
      )}

      {/* // start icon */}
      {currLoc?.pointA && (
        <Marker
          position={[currLoc.pointA.lat, currLoc.pointA.lng]}
          icon={startIcon}
        >
          <Popup>Start Point</Popup>
        </Marker>
      )}

      {/* // end icon */}
      {returnCoords.length > 1 && (
        <Marker position={returnCoords[returnCoords.length - 2]} icon={endIcon}>
          <Popup>End Point</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
