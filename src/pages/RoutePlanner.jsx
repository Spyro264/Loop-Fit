import React from "react";
import Loader from "../components/Loader";
import Map from "../components/Map";
import { useLocation } from "react-router-dom";

const RoutePlanner = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const { currLoc, desiredKm } = useLocation().state || {};
  const { positionA, positionB, positionC } = currLoc?.position || {};

  if (isLoading) return <Loader />;

  return (
    <div className="min-h-dvh pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 ">
        <h1 className="text-2xl md:text-4xl lg:text-6xl w-full text-center">
          GENERATED ROUTE
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 py-10 md:py-20">
          {/* {map} */}
          <div className="border-2 h-80 md:h-150 w-full flex items-center justify-center lg:col-span-3">
            <Map
              pointA={positionA}
              pointB={positionB}
              pointC={positionC}
              km={desiredKm}
            />
          </div>

          {/* {info} */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3.5 lg:col-span-2">
            <div className="p-2 flex flex-col border-2 rounded-lg items-center justify-center bg-[#1a1a1a]">
              <h1 className="text-sm text=[#ceff00] font-mono">
                TOTAL DISTANCE
              </h1>
              <h1 className="text-2xl font-bold tracking-wider">120Km</h1>
            </div>
            <div className="p-2 flex flex-col border-2 rounded-lg items-center justify-center bg-[#1a1a1a]">
              <h1 className="text-sm text=[#ceff00] font-mono">AVG PACE</h1>
              <h1 className="text-2xl font-bold tracking-wider">120Km</h1>
            </div>
            <div className="p-2 flex flex-col border-2 rounded-lg items-center justify-center bg-[#1a1a1a]">
              <h1 className="text-sm text=[#ceff00] font-mono">CALORIES</h1>
              <h1 className="text-2xl font-bold tracking-wider">120Km</h1>
            </div>
            <div className="p-2 flex flex-col border-2 rounded-lg items-center justify-center bg-[#1a1a1a]">
              <h1 className="text-sm text=[#ceff00] font-mono">TOTAL TIME</h1>
              <h1 className="text-2xl font-bold tracking-wider">120Km</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutePlanner;
