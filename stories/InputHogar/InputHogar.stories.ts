import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { InputHogar } from "./InputHogar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "InputHogar",
  component: InputHogar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: { control: "text" },
  },
  args: {
    type: "",
    value: "",
    placeholder: "",
    onChange: fn(),
  },
} satisfies Meta<typeof InputHogar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    type: "text",
    value: "",
    placeholder: "Ingresá ubicación o características",
  },
};
