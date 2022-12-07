import React, { FC } from "react";
import { ReservationList } from "../../components/ReservationList/ReservationList";
import reservationListMock from "./__mocks__/reservationList.json";

export const ReservationListContainer: FC = () => {
  return <ReservationList reservationList={reservationListMock} />;
};

if (process.env.NODE_ENV !== "production") {
  ReservationListContainer.displayName = "ReservationListContainer";
}
