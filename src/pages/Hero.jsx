import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Hero = () => {
  const [km, setKm] = useState(5);
  const [position, setPosition] = useState({
    positionA: {
      lat: 0,
      lng: 0,
    },
    positionB: {
      lat: 0,
      lng: 0,
    },
    positionC: {
      lat: 0,
      lng: 0,
    },
  });

  const distance = km / 3 / 111;
  const navigate = useNavigate();

  // extracting user's current location using geolocation api
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((CurrPosi) => {
      setPosition((prev) => ({
        ...prev,
        positionA: {
          lat: CurrPosi.coords.latitude,
          lng: CurrPosi.coords.longitude,
        },
        positionB: {
          lat: CurrPosi.coords.latitude + distance,
          lng: CurrPosi.coords.longitude,
        },
        positionC: {
          lat: CurrPosi.coords.latitude,
          lng: CurrPosi.coords.longitude + distance,
        },
      }));
    });
  }, []);

  function IncreaseKmByOne() {
    setKm((prev) => prev + 1);
  }

  function IncreaseKmByTwo() {
    setKm((prev) => prev + 2);
  }

  function IncreaseKmByFive() {
    setKm((prev) => prev + 5);
  }

  return (
    <div className="min-h-dvh pt-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center  gap-10 py-16 md:py-20 ">
          {/* {main heading} */}
          <div className="flex flex-col items-center gap-2 w-full">
            <h1 className="text-sm text-[#ceff00]">SET YOUR GOAL</h1>
            <h1 className="text-4xl md:text-6xl lg:text-8xl text-center">
              DEFINE YOUR <br />{" "}
              <span className="text-[#ceff00]">VELOCITY</span>
            </h1>
          </div>

          {/* {input field} */}
          <div className="flex flex-col items-center gap-3 w-full">
            <h1 className="text-xs font-light font-sans md:text-sm md:font-bold">
              Desired Distance (Km)
            </h1>
            <input
              type="number"
              placeholder="Enter km"
              value={km}
              onChange={(e) => setKm(e.target.value)}
              className="text-center text-7xl md:text-9xl text-[#ceff00] w-full max-w-md placeholder:!text-4xl bg-transparent outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
            />
          </div>

          {/* {buttons} */}
          <div className="flex flex-col items-center gap-5 ">
            <div className="flex gap-5">
              <button
                onClick={IncreaseKmByOne}
                className="px-4 sm:px-8 py-2 bg-[#1a1a1a] rounded-sm text-2xl md:px-10 text-center"
              >
                +1
              </button>
              <button
                onClick={IncreaseKmByTwo}
                className="px-4 sm:px-8 py-2 bg-[#1a1a1a] rounded-sm text-2xl md:px-10 text-center"
              >
                +2
              </button>
              <button
                onClick={IncreaseKmByFive}
                className="px-4 sm:px-8 py-2 bg-[#1a1a1a] rounded-sm text-2xl md:px-10  text-center"
              >
                +5
              </button>
            </div>
            <div className="w-full">
              <button
                onClick={() =>
                  navigate("/route-planner", {
                    state: {
                      currLoc: { position, km: Number(km) },
                      desiredKm: km,
                    },
                  })
                }
                className="text-black px-2 sm:px-10 md:px-20 py-3 text-xl bg-[#ceff00] rounded-sm whitespace-nowrap"
              >
                GENERATE YOUR ROUTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
