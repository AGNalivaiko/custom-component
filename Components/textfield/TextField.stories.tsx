import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "UI/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["outlined", "filled", "standard"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    label: { control: "text" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    error: { control: "boolean" },
    helperText: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: "Введите текст",
    variant: "outlined",
    sizeField: "medium",
    required: false,
    disabled: false,
    readOnly: false,
    error: false,
    helperText: "",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Email",
    variant: "filled",
    sizeField: "medium",
    helperText: "Введите корректный email",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Пароль",
    variant: "outlined",
    error: true,
    helperText: "Неверный пароль",
  },
};

export const Disabled: Story = {
  args: {
    label: "Только для чтения",
    disabled: true,
    helperText: "Поле недоступно",
  },
};
