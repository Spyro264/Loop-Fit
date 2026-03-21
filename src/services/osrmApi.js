import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function getRoute(start, end) {
  const response = await axios.get(
    `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?steps=true&geometries=geojson&overview=full`,
  );
  return response.data;
}

export function useRouteQuery(start, end) {
  return useQuery({
    queryKey: ["route", start, end],
    queryFn: () => getRoute(start, end),
    enabled: !!start?.lat && !!end?.lat,
  });
}
