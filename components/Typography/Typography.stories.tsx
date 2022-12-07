import React from 'react';
import Typography from 'ui/Typography/Typography';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'UI/Typography',
  component: Typography,
  args: {
    variant: 'headline',
    size: 'xxl',
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  }
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => {
  const { children, ...restArgs } = args;

  return <Typography {...restArgs}>{children}</Typography>;
};

export const TypographyBasic = Template.bind({});
TypographyBasic.args = {};
