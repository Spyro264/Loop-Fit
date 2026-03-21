import { TextField } from '@mui/material'
import React, { useState } from 'react'
import Loader from '../components/Loader';

const Hero = () => {
  const [km, setKm] = useState(5);
  const [loader, setLoader] = useState(false);

  function IncreaseKm() {
    setKm((prev) => prev + 1);
  }

  function DecreaseKm() {
    if (!km) return;
    setKm((prev) => prev - 1);
  }

  function GenerateRoute() {
    setLoader(true);
  }

  if (loader) return <Loader />;

  return (
    <div>
      
    </div>
  );
};

export default Hero