import IconPhone from "../../components/Icon/Icons/IconPhone";
import IconEmail from "../../components/Icon/Icons/IconEmail";
import IconRig from "../../components/Icon/Icons/IconRig";

export const RESERVATION_LIST_COLUMNS_FIRST_ROW = [
  {
    propName: "id",
    label: "#",
  },
  {
    propName: "site",
    label: "Site",
  },
  {
    propName: "type",
    label: "Type",
  },
  {
    propName: "dates",
    label: "Dates",
  },
  {
    propName: "name",
    label: "Name",
  },
] as const;

export const RESERVATION_LIST_COLUMNS_SECOND_ROW = [
  {
    propName: "phoneNumber",
    label: "Phone",
    renderIcon: IconPhone,
  },
  {
    propName: "email",
    label: "Email",
    renderIcon: IconEmail,
  },
  {
    propName: "rig",
    label: "Rig",
    renderIcon: IconRig,
  },
] as const;

export const RESERVATION_LIST_COLUMNS_THIRD_ROW = [
  {
    propName: "status",
    label: "Status",
  },
  {
    propName: "price",
    label: "Price",
  },
] as const;
