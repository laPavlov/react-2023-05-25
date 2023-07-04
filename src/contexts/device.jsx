"use client";

import React, { useCallback, useContext, useMemo, useState } from "react";

const context = React.createContext("desktop"); // desktop || mobile
const setterContext = React.createContext(() => {}); // desktop || mobile

export const useDevice = () => {
  return useContext(context);
};

export const useDeviceSwitcher = () => {
  return useContext(setterContext);
};

export const DeviceProvider = ({ children }) => {
  const [device, setDevice] = useState(() => {
    let initialDevice = "desktop";

    if (window) {
      initialDevice = localStorage.getItem("device") || "desktop";
    }

    return initialDevice;
  });

  const switchDevice = useCallback(() => {
    setDevice((currentDevice) => {
      const newDevice = currentDevice === "desktop" ? "mobile" : "desktop";
      localStorage.setItem("device", newDevice);

      return newDevice;
    });
  }, []);

  return (
    <context.Provider value={device}>
      <setterContext.Provider value={switchDevice}>
        {children}
      </setterContext.Provider>
    </context.Provider>
  );
};
