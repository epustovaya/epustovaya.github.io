import React, {FC, memo} from 'react';
import classes from './ReservationListItem.module.scss';
import {Reservation} from "../../processes/ReservationList/types";

type ReservationListItemProps = {
    reservation: Partial<Reservation>
}
export const ReservationListItem: FC<ReservationListItemProps> = memo<ReservationListItemProps>(({ reservation }: ReservationListItemProps) => {
    const { camperInfo, _id: id, arrival, departure, status, type, sites } = reservation || {};
    const { firstName, lastName, email, phoneNumber, rigType } = camperInfo
    const name = `${firstName} ${lastName}`;

    const siteName = sites && sites[0]?.name
    return (
        <div className={classes.row}>
            <div className={classes.col}>
                {id}
            </div>
            {siteName && <div className={classes.col}>
                {siteName}
            </div>}
            <div className={classes.col}>
                {type.name}
            </div>
            {name && <div className={classes.col}>
                {name}
            </div>}
            {rigType && <div className={classes.col}>
                {rigType}
            </div>}
        </div>
    );
});

if (process.env.NODE_ENV !== 'production') {
    ReservationListItem.displayName = 'ReservationListItem';
}