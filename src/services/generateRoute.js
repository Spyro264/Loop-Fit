import { getRoute } from "./osrmApi";

function generateRoute(km) {
  let pointA = {};
  let pointB = {};
  let pointC = {};

  const target = km;
  let increment = 0;
  let total = 0;
  const min = target - 1;
  const max = target + 1;

  // get the current location of the user and set the points based on the current location
  async function getLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (currentPosition) => resolve(currentPosition),
        (error) => {
          alert(
            "Unable to get your current location. Please enable location access.",
          );
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000, //  10 sec max
          maximumAge: 0,
        },
      );
    });
  }

  return async function compute() {
    // get the current location of the user
    const currentLocation = await getLocation();

    pointA = {
      lat: currentLocation.coords.latitude,
      lng: currentLocation.coords.longitude,
    };
    pointB = {
      lat: currentLocation.coords.latitude + 0.001 + increment,
      lng: currentLocation.coords.longitude,
    };
    pointC = {
      lat: pointB.lat,
      lng: pointB.lng + 0.001 + increment,
    };

    // get the route between the points and calculate the total distance
    const [res1, res2, res3] = await Promise.all([
      getRoute(pointA, pointB),
      getRoute(pointB, pointC),
      getRoute(pointC, pointA),
    ]);

    // calculate the total distance of the route`
    total =
      res1.routes[0].distance +
      res2.routes[0].distance +
      res3.routes[0].distance;

    const totalInKm = total / 1000;

    console.log({ totalInKm });

    // check if the total distance is within the desired range, if not, increment the points and calculate again
    if (totalInKm >= min && totalInKm <= max) {
      return {
        pointA,
        pointB,
        pointC,
        total: totalInKm,
        routes: [res1, res2, res3],
      };
    } else {
      total = 0;
      increment += 0.003;
      return compute();
    }
  };
}

export default generateRoute;
