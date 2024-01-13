import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";

/* eslint-disable react/jsx-key */
export const Loading = ({ className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      Loading...
    </div>
  );
};
