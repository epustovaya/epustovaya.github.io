import clsx from "clsx";
import { TypographyProps } from "./Typography.types";
import classes from "./Typography.module.scss";

const Typography = <E extends HTMLParagraphElement>(props: TypographyProps) => {
  const {
    component: Component = "p",
    variant,
    size,
    weight,
    className,
    children,
    inheritedFont,
    getRef,
    noPadding,
    noPaddingTop,
    noPaddingBottom,
    ...restProps
  } = props;

  const classNames = clsx(
    className,
    variant && classes[variant],
    variant && size && classes[`${variant}--${size}`],
    variant && weight && classes[`${variant}--${weight}`],
    inheritedFont && classes[`${variant}--font-inherited`],
    noPadding && classes[`${variant}--nop`],
    noPaddingTop && classes[`${variant}--t-0`],
    noPaddingBottom && classes[`${variant}--b-0`]
  );

  return (
    <Component className={classNames} {...restProps} ref={getRef}>
      {children}
    </Component>
  );
};

export default Typography;
