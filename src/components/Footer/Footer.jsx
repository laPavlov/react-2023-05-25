"use client";

import React, { useContext } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";
import { Button } from "@/components/Button/Button";
import { useDevice, useDeviceSwitcher } from "@/contexts/device";

const DeviceName = {
  desktop: 'Десктопная версия',
  mobile: 'Мобильная версия',
};

export const Footer = ({ className }) => {
  const switchDevice = useDeviceSwitcher();

  const device = useDevice();

  return (
    <footer className={classNames(styles.root)}>
      <Button onClick={switchDevice}
        viewVariant='tertiary'>
        {DeviceName[device]}
      </Button>
    </footer>
  );
};
