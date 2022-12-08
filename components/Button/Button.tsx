import React, { forwardRef } from "react";
import clsx from "clsx";
import classes from "./Button.module.scss";
import {
  createClassNameSelectors,
  getStylesFromSelectors,
} from "../../utils/classNameSelectors";
import { ButtonProps } from "./Button.types";
import { useButtonClick } from "./useButtonClick";

export type ButtonBasicComponent = <C extends React.ElementType = "button">(
  props: ButtonProps<C>
) => React.ReactElement | null;

const buttonRenderFn = <C extends React.ElementType = "button">(
  props: ButtonProps<C>,
  ref: any
) => {
  const {
    as: Component = "button",
    children,
    className: classNameProp,
    classNameLabel,
    colorVariant,
    disabled,
    hideLabel,
    icon,
    iconClassName,
    iconPosition = "after",
    label,
    size,
    testId = "Button",
    variant,
    fontWeight,
    onClick,
    ...restProps
  } = props;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [handleClick, animate] = useButtonClick(onClick);

  const className = clsx(
    classes.Button,
    variant && classes[`Button_variant_${variant}`],
    colorVariant && classes[`Button_color_${colorVariant}`],
    size &&
      getStylesFromSelectors(
        createClassNameSelectors("Button_size", size, "m", { delimiter: "_" }),
        classes
      ),
    hideLabel &&
      getStylesFromSelectors(
        createClassNameSelectors("Button_noLabel", hideLabel, true, {
          delimiter: "_",
          breakpointFallback: "",
        }),
        classes
      ),
    !label && icon && classes.Button_noLabel,
    disabled && classes.disabled,
    animate && classes.animate,
    classNameProp,
    icon && iconPosition && classes[`Button_icon_${iconPosition}`],
    fontWeight && classes[`Button_fw_${fontWeight}`]
  );

  const iconEl = icon && (
    <span className={clsx(classes.Button__Icon, iconClassName)}>{icon}</span>
  );

  const content = children || (
    <>
      {iconPosition === "before" && iconEl}
      {label && (
        <span className={clsx(classes.Button__Label, classNameLabel)}>
          {label}
        </span>
      )}
      {iconPosition === "after" && iconEl}
    </>
  );

  return (
    <Component
      ref={ref}
      data-testid={testId}
      disabled={disabled}
      className={className}
      onClick={handleClick}
      type={Component === "button" ? "button" : undefined}
      {...restProps}
    >
      {content}
    </Component>
  );
};

if (process.env.NODE_ENV !== "production") {
  buttonRenderFn.displayName = "Button";
}

const Button: ButtonBasicComponent = forwardRef(buttonRenderFn);

export default Button;
