import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { SignById } from '@iso-safety-signs/react';
import { getAllSigns, getSignsByCategory } from '@iso-safety-signs/core';

interface GridProps {
  size?: number;
  category?: string;
}

const SignGrid = ({ size = 96, category }: GridProps) => {
  const signs = category
    ? getSignsByCategory(category as Parameters<typeof getSignsByCategory>[0])
    : getAllSigns();

  if (signs.length === 0) {
    return (
      <p style={{ color: '#888', fontFamily: 'sans-serif' }}>
        No signs loaded. Run <code>yarn update</code> to populate sign data.
      </p>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem',
        padding: '1rem',
        alignItems: 'flex-start',
      }}
    >
      {signs.map((sign) => (
        <div
          key={sign.id}
          title={`${sign.code} — ${sign.name}`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem',
            width: size + 16,
          }}
        >
          <SignById id={sign.id} width={size} height={size} />
          <span style={{ fontSize: '0.6rem', textAlign: 'center', color: '#555', lineHeight: 1.2 }}>
            {sign.code}
          </span>
        </div>
      ))}
    </div>
  );
};

const meta: Meta<typeof SignById> = {
  title: 'ISO 7010/React Components',
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

export const Emergency: StoryObj<GridProps> = {
  name: 'Emergency (E-series)',
  render: ({ size }) => <SignGrid size={size} category="emergency" />,
  args: { size: 96 },
};

export const Warning: StoryObj<GridProps> = {
  name: 'Warning (W-series)',
  render: ({ size }) => <SignGrid size={size} category="warning" />,
  args: { size: 96 },
};

export const Prohibition: StoryObj<GridProps> = {
  name: 'Prohibition (P-series)',
  render: ({ size }) => <SignGrid size={size} category="prohibition" />,
  args: { size: 96 },
};

export const Mandatory: StoryObj<GridProps> = {
  name: 'Mandatory (M-series)',
  render: ({ size }) => <SignGrid size={size} category="mandatory" />,
  args: { size: 96 },
};

export const Fire: StoryObj<GridProps> = {
  name: 'Fire equipment (F-series)',
  render: ({ size }) => <SignGrid size={size} category="fire" />,
  args: { size: 96 },
};

export const AllSigns: StoryObj<GridProps> = {
  name: 'All Signs',
  render: ({ size }) => <SignGrid size={size} />,
  args: { size: 96 },
};
