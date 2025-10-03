import type { Meta, StoryObj } from "@storybook/react";
import Switch from "../Switcher_script/Switcher";
const meta: Meta<typeof Switch> = {
  title: "UI/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { action: "changed" },
  },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: { checked: false, disabled: false },
};

export const Checked: Story = {
  args: { checked: true, disabled: false },
};

export const Disabled: Story = {
  args: { checked: true, disabled: true },
};
