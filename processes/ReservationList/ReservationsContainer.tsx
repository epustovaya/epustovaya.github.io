import React, { FC } from "react";
import { ReservationList } from "./components/ReservationList/ReservationList";
import reservationListMock from "./__mocks__/reservationList.json";

export const ReservationsContainer: FC = () => {
  return <ReservationList reservationList={reservationListMock} />;
};

ReservationsContainer.displayName = "ReservationsContainer";
