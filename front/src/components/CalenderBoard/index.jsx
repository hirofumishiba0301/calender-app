import React from "react"
import { GridList } from "@material-ui/core";
import * as styles from "./style.css";
import CalenderElement from "../CalenderElement";
import { createCalender } from "../../services/calender";


const calender = createCalender();


const CalenderBoard = () => {
  return (
  <div className={styles.container}>
    <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
    {calender.map(c => (
      <li key={c.toISOString()}>
        <CalenderElement>{c.format("D")}</CalenderElement>
      </li>
    ))}
    </GridList>
  </div>
  );
};

export default CalenderBoard;