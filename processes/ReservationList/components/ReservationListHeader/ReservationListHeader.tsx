import React, { FC, memo } from "react";
import classes from "./ReservationListHeader.module.scss";
import {
  RESERVATION_LIST_COLUMNS_FIRST_ROW,
  RESERVATION_LIST_COLUMNS_SECOND_ROW,
  RESERVATION_LIST_COLUMNS_THIRD_ROW,
} from "../../constants";
import clsx from "clsx";
import Typography from "../../../../components/Typography";

type ReservationListHeaderProps = {};
export const ReservationListHeader: FC<ReservationListHeaderProps> =
  memo<ReservationListHeaderProps>((props: ReservationListHeaderProps) => {
    const columns = [
      ...RESERVATION_LIST_COLUMNS_FIRST_ROW,
      ...RESERVATION_LIST_COLUMNS_SECOND_ROW,
      ...RESERVATION_LIST_COLUMNS_THIRD_ROW,
    ];

    return (
      <div className={classes.root}>
        {columns.map(({ label, propName }) => {
          return (
            <Typography
              key={label}
              noPadding
              variant="body"
              size="l"
              className={clsx(classes.label, classes[`label_${propName}`])}
            >
              {label}
            </Typography>
          );
        })}
      </div>
    );
  });

ReservationListHeader.displayName = "ReservationListHeader";
