import type { Meta, StoryObj } from "@storybook/react";
import CustomCheckbox from "../Checkboxes_script/Checkboxes";

const meta: Meta<typeof CustomCheckbox> = {
  title: "UI/CustomCheckbox",
  component: CustomCheckbox,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["text", "contained", "outlined"],
    },
    sizeCheckbox: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    color: {
      control: "radio",
      options: ["primary", "success", "error"],
    },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    error: { control: "boolean" },
    checked: { control: "boolean" },
    label: { control: "text" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof CustomCheckbox>;

export const Default: Story = {
  args: {
    label: "Default Checkbox",
    checked: false,
    required: false,
    disabled: false,
    error: false,
    variant: "outlined",
    sizeCheckbox: "medium",
    color: "primary",
  },
};

export const Checked: Story = {
  args: {
    label: "Checked",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: "Error State",
    error: true,
  },
};

export const Required: Story = {
  args: {
    label: "Required",
    required: true,
  },
};
