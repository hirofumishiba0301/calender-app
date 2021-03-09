import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import { isSameMonth, isFirstDay, isSameDay } from "../../services/calender"


const CalenderElement = ({ day }) => {
  const today = dayjs();
  //初日表示変更
  const format = isFirstDay ? "M月D日" : "D";
  //今日判定
  const isToday = isSameDay(day, today);
  //今月以外グレー判定
  const isCurrentMonth = isSameMonth(day, today);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  return (
    <div className={styles.element}>
      <Typography 
      className={styles.date}
      color={textColor}
      align="center"
      variant="caption"
      component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format("D")}
        </span>
      </Typography>
    </div>
  );
};

export default CalenderElement;