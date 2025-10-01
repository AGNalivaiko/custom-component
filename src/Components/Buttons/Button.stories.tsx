import { Meta, StoryObj } from "@storybook/react";
import Buttons from "./Button";

const meta: Meta<typeof Buttons> = {
  title: "UI/Buttons",
  component: Buttons,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["text", "contained", "outlined"],
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    color: {
      control: "radio",
      options: ["primary", "success", "error"],
    },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Buttons>;

export const Default: Story = {
  args: {
    children: "Click me",
    variant: "contained",
    size: "medium",
    color: "primary",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading...",
    loading: true,
  },
};

export const Success: Story = {
  args: {
    children: "Success",
    color: "success",
    variant: "outlined",
  },
};
