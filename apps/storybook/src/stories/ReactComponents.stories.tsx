import type { Meta, StoryObj } from '@storybook/react';
import { SignById } from '@iso-safety-signs/react';

const meta: Meta<typeof SignById> = {
  title: 'ISO 7010/SignById',
  component: SignById,
  parameters: { layout: 'centered' },
  argTypes: {
    id: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof SignById>;

export const EmergencyExit: Story = {
  args: { id: 'e001-emergency-exit', width: 128 },
};

export const FlammableMaterial: Story = {
  args: { id: 'w001-flammable-material', width: 128 },
};

export const UnknownId: Story = {
  args: { id: 'not-a-real-sign', width: 128 },
};
