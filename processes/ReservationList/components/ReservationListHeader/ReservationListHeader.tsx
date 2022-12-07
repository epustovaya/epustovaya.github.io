import React, { FC, memo } from "react";
import classes from "./ReservationListHeader.module.scss";

type ReservationListHeaderProps = {};
export const ReservationListHeader: FC<ReservationListHeaderProps> =
  memo<ReservationListHeaderProps>((props: ReservationListHeaderProps) => {
    return <div className={classes.root}>ReservationListHeader</div>;
  });

ReservationListHeader.displayName = "ReservationListHeader";
