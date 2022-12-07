import React, { FC, memo } from "react";
import classes from "./ReservationListPanel.module.scss";

type ReservationListPanelProps = {};
export const ReservationListPanel: FC<ReservationListPanelProps> =
  memo<ReservationListPanelProps>((props: ReservationListPanelProps) => {
    return <div className={classes.root}></div>;
  });

ReservationListPanel.displayName = "ReservationListPanel";
