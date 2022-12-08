import React, { FC, memo } from "react";
import classes from "./ReservationsHeader.module.scss";

type ReservationsHeaderProps = {};
export const ReservationsHeader: FC<ReservationsHeaderProps> =
  memo<ReservationsHeaderProps>((props: ReservationsHeaderProps) => {
    return <div className={classes.root}></div>;
  });

ReservationsHeader.displayName = "ReservationsHeader";
