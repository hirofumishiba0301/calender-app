import React from "react";

import * as styles from "./style.css";

const CalenderElement = ({ children }) => {
  return (
    <div className={styles.element}>
      <div className={styles.day}>{children}</div>
    </div>

  );
};

export default CalenderElement;