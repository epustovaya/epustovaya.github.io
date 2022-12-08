import React, { forwardRef, useCallback } from 'react';
import Link from 'next/link';
import { SafeAnchorProps, SafeAnchorRef } from './SafeAnchor.types';

function checkIsTrivialHref(href: undefined | string): boolean {
  return !href || href.trim() === '#';
}

function getBlankProps(blank: boolean) {
  if (blank) {
    return {
      target: '_blank',
      rel: 'noopener noreferrer'
    };
  }

  return {};
}


const SafeAnchor = forwardRef<SafeAnchorRef, SafeAnchorProps>((props, ref) => {
  const {
    children,
    component: Component = 'a',
    disabled = false,
    href = '#',
    onClick,
    external,
    className,
    testId,
    blank = false,
    ...otherProps
  } = props;

  const internal = /^\/(?!\/)/.test(href) && !external;
  const isTrivialHref = checkIsTrivialHref(href);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (disabled || isTrivialHref) {
        event.preventDefault();
      }

      if (disabled) {
        event.stopPropagation();
        return;
      }

      if (onClick) {
        onClick(event);
      }
    },
    [disabled, isTrivialHref, onClick]
  );

  const anchorProps = {
    ...otherProps,
    ref,
    onClick: handleClick,
    tabIndex: disabled ? -1 : undefined,
    'aria-disabled': disabled ? true : undefined,
    'data-testid': testId || 'Anchor',
    className,
    ...getBlankProps(blank)
  };

  if (internal) {
    return (
      <Link href={href}>
        <a {...anchorProps}>{children}</a>
      </Link>
    );
  }

  return (
    <Component {...anchorProps} href={href}>
      {children}
    </Component>
  );
});

if (process.env.NODE_ENV === 'development') {
  SafeAnchor.displayName = 'SafeAnchor';
}

export default SafeAnchor;
