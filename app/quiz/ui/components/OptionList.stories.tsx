// stories/OptionList.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { OptionList } from './OptionList'; // Adjust the path as necessary

export default {
  title: 'Components/OptionList',
  component: OptionList,
} as Meta;

const Template: Story = (args: any) => <OptionList {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'], // Example options array
  selectedAnswerIndex: -1, // Example selected answer index
  isCorrectAnswer: false, // Example boolean indicating if the answer is correct
  activeQuestion: { correctAnswer: 'Option 1' }, // Example active question object
};
