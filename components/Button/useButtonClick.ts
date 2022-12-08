import React, { useCallback, useEffect, useRef, useState } from "react";

export function useButtonClick(
  onClick?: (event: React.SyntheticEvent) => void,
  animationDuration = 1000
): [(event: React.SyntheticEvent) => void, boolean] {
  const timerRef = useRef<number>(0);
  const [animate, setAnimate] = useState<boolean>(false);

  const handleClick = useCallback(
    // @ts-ignore
    (e) => {
      if (onClick) {
        onClick(e);
      }

      if (window) {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }

        setAnimate(true);

        timerRef.current = window.setTimeout(() => {
          setAnimate(false);
        }, animationDuration);
      }
    },
    [animationDuration, onClick, setAnimate, timerRef]
  );

  useEffect(
    () => () => {
      if (window && timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = 0;
      }
    },
    [timerRef]
  );

  return [handleClick, animate];
}
