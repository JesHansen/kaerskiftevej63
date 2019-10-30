﻿// Ticker.tsx

import React, { useState, useEffect } from "react";
import TickLogic from "./TickLogic";

const Ticker: React.FC = () => {
  const [pctMyHouse, setHousePct] = useState([0, 0]);

  let tl = new TickLogic();
  useEffect(() => {
    const interval = setInterval(() => {
      setHousePct(() => tl.GetMyHousePercentage(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  var formatter = new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency: "DKK"
  });

  return (
    <div>
      Vi ejer {pctMyHouse[0].toFixed(9)} % af huset. <br></br>Vi skylder{" "}
      {formatter.format(pctMyHouse[1])}
    </div>
  );
};

export default Ticker;
