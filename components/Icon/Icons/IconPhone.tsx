import React from "react";
import { IconSpecificProps } from "../Icon.types";
import Icon from "../Icon";

const IconPhone = (props: IconSpecificProps) => {
  return (
    <Icon {...props} width="18" height="18" viewBox="0 0 18 18">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.75 0.7575L5.25 0.75C4.425 0.75 3.75 1.425 3.75 2.25V15.75C3.75 16.575 4.425 17.25 5.25 17.25H12.75C13.575 17.25 14.25 16.575 14.25 15.75V2.25C14.25 1.425 13.575 0.7575 12.75 0.7575ZM12.75 14.25H5.25V3.75H12.75V14.25Z"
        fill="#757272"
      />
    </Icon>
  );
};

export default IconPhone;
