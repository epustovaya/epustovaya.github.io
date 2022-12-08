import React from 'react';
import { components, CSSObjectWithLabel, GroupProps } from 'react-select';
import { OptionType } from '../../Select.types';
import GroupDivider from '../GroupDivider/GroupDivider';

export function groupStyles(provided: CSSObjectWithLabel): CSSObjectWithLabel {
  return {
    ...provided,
    padding: 0
  };
}

const Component = components.Group;


const Group = (props: GroupProps<OptionType>) => {
  const { data, selectProps  } = props;
  const { label } = data;
  const { options } = selectProps;
  const isFirstGroup = label ? options[0].label === label : false;

  return (
    <>
      {!isFirstGroup && <GroupDivider />}
      <Component {...props} />
    </>
  );
};

export default Group;
