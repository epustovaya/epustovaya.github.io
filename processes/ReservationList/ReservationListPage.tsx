import React, { FC } from "react";
import { ReservationListContainer } from "./ReservationListContainer";
import styles from "../../styles/Home.module.scss";

export const ReservationListPage: FC = () => {
  return (
    <main className={styles.main}>
      <h1>GoodSam Camp Solutions</h1>
      <ReservationListContainer />
    </main>
  );
};

if (process.env.NODE_ENV !== "production") {
  ReservationListPage.displayName = "ReservationListPage";
}
