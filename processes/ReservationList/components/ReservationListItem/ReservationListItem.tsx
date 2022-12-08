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
import { IconSpecificProps } from "../../../../components/Icon/Icon.types";

type Column = {
  propName: string;
  label: string;
  renderIcon?: (props?: IconSpecificProps) => JSX.Element;
};
type ReservationListItemProps = {
  reservation: Partial<Reservation>;
};
export const ReservationListItem: FC<ReservationListItemProps> =
  memo<ReservationListItemProps>(
    ({ reservation }: ReservationListItemProps) => {
      const preparedItem = getColumnValues(reservation);
      const { status, price } = preparedItem;

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
              const { propName, renderIcon, label } = column;
              const value = preparedItem[propName];

              return (
                <div
                  className={clsx(
                    classes.col,
                    classes[`col_${propName}`],
                    !value && classes.col_withoutBorder
                  )}
                >
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
                    {value && (
                      <div
                        className={clsx(
                          classes.icon,
                          classes[`icon_${propName}`]
                        )}
                      >
                        {renderIcon && renderIcon()}
                      </div>
                    )}
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

            <Divider className={classes.dividerMobile} />

            <div
              className={clsx(classes.innerRow, classes.innerRow_statusPrice)}
            >
              <div className={clsx(classes.col, classes.col_status)}>
                <Typography
                  noPadding
                  variant="body"
                  size="l"
                  className={clsx(
                    classes.reservationStatus,
                    classes[`reservationStatus_${status}`]
                  )}
                >
                  {status}
                </Typography>
              </div>
              <div className={clsx(classes.col, classes.col_price)}>
                <Typography
                  noPadding
                  weight="bold"
                  variant="body"
                  size="l"
                  className={clsx(classes.value, classes.value_price)}
                >
                  {price}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

ReservationListItem.displayName = "ReservationListItem";
