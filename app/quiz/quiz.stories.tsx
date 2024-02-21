import type { Meta, StoryObj } from '@storybook/react';
import { within, fireEvent, expect } from '@storybook/test';
import Quiz from './page';

const meta = {
  title: 'Components/Quiz Page',
  component: Quiz,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Quiz>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const quizName = canvas.getAllByRole('heading', { level: 1 });
    await expect(quizName).toHaveLength(1);

    // Simulate interaction: Click a button
    const buttonElement = canvas.getByRole('button');
    fireEvent.click(buttonElement);

    // Simulate interaction: Type text into an input field (if applicable)
    // const inputElement = canvas.getByRole('textbox');
    // fireEvent.change(inputElement, { target: { value: 'Hello, World!' } });

    // Simulate interaction: Hover over an element (if applicable)
    // fireEvent.mouseEnter(element);

    // Add more interactions as needed
  },
};
