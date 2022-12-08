import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Divider from './Divider';
import { Space } from '../Space/Space';

export default {
  title: 'UI/Divider',
  component: Divider,
  argTypes: {
    dashed: {
      type: 'boolean'
    },
    direction: {
      options: ['horizontal', 'vertical']
    }
  }
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = ({ direction, ...restArgs }) => (
  <>
    <style jsx>
      {`
        .spaceHorizontal {
          padding: 32px;
          display: block;
        }

        .spaceVertical {
          padding: 32px;
          display: flex;
        }
      `}
    </style>
    <div className={direction === 'horizontal' ? 'spaceHorizontal' : 'spaceVertical'}>
      <div>
        John Doe
      </div>
      {direction === 'horizontal' && (
        <Space top={16} bottom={16} asMargin>
          {className => <Divider className={className} direction={direction} {...restArgs} />}
        </Space>
      )}
      {direction === 'vertical' && (
        <Space left={16} right={16} asMargin>
          {className => <Divider className={className} direction={direction} {...restArgs} />}
        </Space>
      )}
      <div>
        01-01-2016
      </div>
    </div>
  </>
);

export const DefaultDivider = Template.bind({});
DefaultDivider.args = {
  dashed: false,
  direction: 'horizontal'
};

export const DashedDivider = Template.bind({});
DashedDivider.args = {
  dashed: true,
  direction: 'horizontal'
};

export const DividerVertical = Template.bind({});
DividerVertical.args = {
  dashed: false,
  direction: 'vertical'
};

export const VerticalDashedDivider = Template.bind({});
VerticalDashedDivider.args = {
  dashed: true,
  direction: 'vertical'
};
