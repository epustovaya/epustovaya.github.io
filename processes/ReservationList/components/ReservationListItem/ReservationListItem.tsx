import React, { FC, memo } from "react";
import classes from "./ReservationListItem.module.scss";
import { Reservation } from "../../types/apiTypes";
import { getColumnValues } from "./utils";
import Typography from "../../../../components/Typography";
import clsx from "clsx";
import Divider from "../../../../components/Divider";
import {
  RESERVATION_LIST_COLUMNS_FIRST_ROW,
  RESERVATION_LIST_COLUMNS_SECOND_ROW,
  RESERVATION_LIST_COLUMNS_THIRD_ROW,
} from "../../constants";

type Column = { propName: string; label: string; icon?: JSX.Element };
type ReservationListItemProps = {
  reservation: Partial<Reservation>;
};
export const ReservationListItem: FC<ReservationListItemProps> =
  memo<ReservationListItemProps>(
    ({ reservation }: ReservationListItemProps) => {
      const preparedItem = getColumnValues(reservation);

      return (
        <div className={classes.row}>
          <div className={classes.innerRow}>
            {RESERVATION_LIST_COLUMNS_FIRST_ROW.map((column: Column) => {
              const { label, propName } = column;
              const value = preparedItem[propName];

              return (
                <div className={clsx(classes.col, classes[`col_${propName}`])}>
                  <Typography
                    noPadding
                    variant="body"
                    size="l"
                    className={clsx(
                      classes.label,
                      classes[`label_${propName}`]
                    )}
                  >
                    {label}
                  </Typography>
                  <Typography
                    noPadding
                    weight="bold"
                    variant="body"
                    size="l"
                    className={clsx(
                      classes.value,
                      classes[`value_${propName}`]
                    )}
                  >
                    {value}
                  </Typography>
                </div>
              );
            })}
          </div>

          <Divider className={classes.dividerLaptop} />

          <div className={classes.innerRow}>
            {RESERVATION_LIST_COLUMNS_SECOND_ROW.map((column: Column) => {
              const { propName, icon, label } = column;
              const value = preparedItem[propName];

              return (
                <div className={clsx(classes.col, classes[`col_${propName}`])}>
                  <Typography
                    noPadding
                    variant="body"
                    size="l"
                    className={clsx(
                      classes.label,
                      classes[`label_${propName}`]
                    )}
                  >
                    {label}
                  </Typography>

                  <div className={classes.valueWrapper}>
                    <div
                      className={clsx(
                        classes.icon,
                        classes[`icon_${propName}`]
                      )}
                    >
                      {icon}
                    </div>
                    <Typography
                      noPadding
                      weight="bold"
                      variant="body"
                      size="l"
                      className={clsx(
                        classes.value,
                        classes[`value_${propName}`]
                      )}
                    >
                      {value}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>

          <Divider className={classes.dividerMobile} />

          <div className={clsx(classes.innerRow, classes.innerRow_statusPrice)}>
            {RESERVATION_LIST_COLUMNS_THIRD_ROW.map((column: Column) => {
              const { propName } = column;
              const value = preparedItem[propName];
              const isStatus = propName === "status";

              return (
                <div className={clsx(classes.col, classes[`col_${propName}`])}>
                  <Typography
                    noPadding
                    weight={isStatus ? "normal" : "bold"}
                    variant="body"
                    size="l"
                    className={clsx(
                      classes.value,
                      classes[`value_${propName}`],
                      isStatus && classes.reservationStatus,
                      isStatus && classes[`reservationStatus_${value}`]
                    )}
                  >
                    {value}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  );

ReservationListItem.displayName = "ReservationListItem";
