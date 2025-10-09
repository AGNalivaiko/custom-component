import type { Meta, StoryObj } from '@storybook/react';
import { Switcher } from './Switcher';

const meta: Meta<typeof Switcher> = {
  title: 'UI/Switch',
  component: Switcher,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' }
  }
};
export default meta;

type Story = StoryObj<typeof Switcher>;

export const Default: Story = {
  args: { checked: false, disabled: false }
};

export const Checked: Story = {
  args: { checked: true, disabled: false }
};

export const Disabled: Story = {
  args: { checked: true, disabled: true }
};
