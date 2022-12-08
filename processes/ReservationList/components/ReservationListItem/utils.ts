import { Reservation } from "../../types/apiTypes";
import { format } from "date-fns";
const DEFAULT_FORMAT_PATTERN = "dd/MM/yy";

const formatDate = (date: string) =>
  format(new Date(date), DEFAULT_FORMAT_PATTERN);

const getFormattedDates = (departure: string, arrival: string) =>
  `${formatDate(departure)} - ${formatDate(arrival)}`;

export const getColumnValues = (reservation: Partial<Reservation>) => {
  const {
    camperInfo,
    _id: id,
    arrival,
    departure,
    status,
    type,
    sites,
    paymentInfo,
  } = reservation;
  const { firstName, lastName, email, phoneNumber, rigType } = camperInfo || {};
  const price = paymentInfo?.cost?.cost;

  return {
    id: id?.substring(0, 4),
    site: sites && sites[0]?.name,
    type: type?.name,
    dates: departure && arrival && getFormattedDates(departure, arrival),
    name: (firstName || lastName) && `${firstName} ${lastName}`,
    rig: rigType,
    status,
    price: price && `$${price}`,
    phoneNumber,
    email,
  };
};
