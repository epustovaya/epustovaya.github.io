import React from 'react';
import { Space } from './Space';
import { SpaceConfig } from './Space.types';

const presets: Record<string, SpaceConfig> = {
  default: {
    top: { xxs: 16, s: 20 },
    bottom: { xxs: 16, s: 20 }
  }
};

type CommonSpaceProps = React.PropsWithChildren<{
  preset?: 'default';
  className?: string;
}>;

export const CommonSpace = ({ preset = 'default', className, children }: CommonSpaceProps) => (
  <Space {...presets[preset]} className={className}>
    {children}
  </Space>
);
