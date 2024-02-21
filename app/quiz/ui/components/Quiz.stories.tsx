// stories/Quiz.stories.tsx

import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Quiz } from './Quiz'; // Adjust the path as necessary

export default {
  title: 'Components/Quiz',
  component: Quiz,
} as Meta;

const Template: Story = (args) => {
  const [quizFinished, setQuizFinished] = useState(false);

  // Define a function to handle the quiz finish event
  const handleQuizFinish = () => {
    setQuizFinished(true);
  };

  // Render the Quiz component only if the quiz is not finished
  return !quizFinished ? <Quiz {...args} onQuizFinish={handleQuizFinish} /> : null;
};

export const Default = Template.bind({});
Default.args = {
  activeQuestion: {
    question: 'What is the process of converting analog signals into digital data called?',
    options: ['Encoding', 'Decoding', 'Encryption', 'Decryption'],
    correctAnswer: 'Encoding',
  },
  options: ['Encoding', 'Decoding', 'Encryption', 'Decryption'],
};
