import React, { FC, memo } from "react";
import classes from "./ReservationList.module.scss";
import { Reservation } from "../../types/apiTypes";
import { ReservationListItem } from "../ReservationListItem/ReservationListItem";
import { ReservationListHeader } from "../ReservationListHeader/ReservationListHeader";

type ReservationListProps = {
  reservationList: Partial<Reservation>[];
};
export const ReservationList: FC<ReservationListProps> =
  memo<ReservationListProps>(({ reservationList }: ReservationListProps) => {
    return (
      <div className={classes.root}>
        <ReservationListHeader />

        {reservationList.map((reservation) => {
          return (
            <div key={reservation._id}>
              <ReservationListItem reservation={reservation} />
            </div>
          );
        })}
      </div>
    );
  });

ReservationList.displayName = "ReservationList";
