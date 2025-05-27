import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { ChileanRutInput } from "./ChileanRutInput";

const meta = {
  title: "UI/ChileanRutInput",
  component: ChileanRutInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ChileanRutInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter RUT (e.g., 12.345.678-9)",
  },
};

export const WithInitialValue: Story = {
  args: {
    value: "123456789",
    placeholder: "Enter RUT (e.g., 12.345.678-9)",
  },
};

export const WithValidation: Story = {
  args: {
    placeholder: "Enter RUT (e.g., 12.345.678-9)",
    showValidationState: true,
  },
};

export const WithOnChangeHandler: Story = {
  render: (args) => {
    const [rutValue, setRutValue] = useState("");
    const [isValid, setIsValid] = useState(false);

    return (
      <div className="space-y-4">
        <ChileanRutInput
          {...args}
          onChange={(value) => {
            setRutValue(value);
          }}
          showValidationState={true}
        />
        <div className="text-sm">
          <p>Current value: {rutValue || "(empty)"}</p>
          <p>Is valid: {isValid ? "Yes" : "No"}</p>
        </div>
      </div>
    );
  },
  args: {
    placeholder: "Enter RUT (e.g., 12.345.678-9)",
  },
};
