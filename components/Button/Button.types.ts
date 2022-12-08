/* eslint-disable @typescript-eslint/indent */
import React, { ReactNode } from "react";
import { Breakpoints } from "../../types/Breakpoints";
import { ButtonApiOptions } from "../../types/commonApiTypes";

type SizeValue = "l" | "m" | "s" | "32" | "secondary-32";
export type ColorVariant =
  | "primary"
  | "primaryInverse"
  | "outline"
  | "outlineInverse"
  | "accent"
  | "light";

type ButtonConfiguration = {
  label?: ReactNode;
  icon?: ReactNode;
  iconClassName?: string;
  iconPosition?: "before" | "after";
  variant?: "base" | "primary" | "secondary" | "text";
  colorVariant?: ColorVariant;
  fontWeight?: "normal" | "bold";
  size?: SizeValue | Partial<Record<Breakpoints, SizeValue>>;
  hideLabel?: boolean | Partial<Record<Breakpoints, boolean>>;
  classNameLabel?: string;
  disabled?: boolean;
  testId?: string;
};

export type ButtonProps<C extends React.ElementType = "button"> = any;

export type ButtonLinkProps = any;

export type ButtonFromApiProps<ExpectedType> = {
  apiOptions: ButtonApiOptions;
} & ExpectedType;
