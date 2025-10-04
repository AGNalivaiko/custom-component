import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "UI/Selects",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["outlined", "filled", "standard"],
    },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    error: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "Choose option",
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
    variant: "standard",
    helperText: "Please select an option",
  },
};

export const Outlined: Story = {
  args: {
    ...Default.args,
    variant: "outlined",
  },
};

export const Filled: Story = {
  args: {
    ...Default.args,
    variant: "filled",
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    error: true,
    helperText: "Something went wrong",
  },
};
