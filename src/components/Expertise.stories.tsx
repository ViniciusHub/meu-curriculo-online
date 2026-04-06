import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Expertise from "./Expertise";

const meta = {
  title: "Sections/Expertise",
  component: Expertise,
} satisfies Meta<typeof Expertise>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
