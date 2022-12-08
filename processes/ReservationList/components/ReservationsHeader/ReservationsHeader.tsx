import React, { FC, memo } from "react";
import classes from "./ReservationsHeader.module.scss";
import Typography from "../../../../components/Typography";
import FieldInput from "../../../../components/Form/FieldInput/FieldInput";

type ReservationsHeaderProps = {};
export const ReservationsHeader: FC<ReservationsHeaderProps> =
  memo<ReservationsHeaderProps>((props: ReservationsHeaderProps) => {
    return (
      <div className={classes.root}>
        <Typography className={classes.title} variant="headline" size="l">
          Reservations
        </Typography>
        <FieldInput
          autoComplete="email"
          clearValue={() => {}}
          id="FieldInput-0"
          label="Label"
          onChange={() => {}}
          value=""
        />
      </div>
    );
  });

ReservationsHeader.displayName = "ReservationsHeader";
