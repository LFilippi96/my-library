import React from "react";
import PropertySearch from "./PropertySearch";

import type { Meta, StoryObj } from "@storybook/react";
import exp from "constants";

const meta = {
  title: "PropertySearch",
  component: PropertySearch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PropertySearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
