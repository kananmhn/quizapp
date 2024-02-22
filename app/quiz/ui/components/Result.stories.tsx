// stories/Result.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Result } from './Result'; // Adjust the path as necessary

export default {
  title: 'Components/Result',
  component: Result,
} as Meta;

const Template: Story = (args: any) => <Result {...args} />;

export const Default = Template.bind({});
Default.args = {
  results: {
    correctAnswers: 7, // Example number of correct answers
    wrongAnswers: 3, // Example number of wrong answers
  },
  totalQuestions: 10, // Example total number of questions
};
