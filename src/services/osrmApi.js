import axios from "axios";

export async function getRoute(start, end) {
  const response = await axios.get(
    `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?steps=true&geometries=geojson&overview=full`,
  );
  return response.data;
}
