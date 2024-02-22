// stories/Button.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button'; // Adjust the path as necessary

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    className: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} as Meta;

// Define the Template component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Export at least one story
export const Primary: Story<ButtonProps> = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  intent: 'primary',
  size: 'medium',
};
