import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { getAllSigns, getSignsByCategory } from '@iso-safety-signs/core';

const InlineSprite = () => {
  const [spriteHtml, setSpriteHtml] = React.useState<string>('');

  React.useEffect(() => {
    fetch('/assets/sprites/sprite.svg')
      .then((r) => r.text())
      .then(setSpriteHtml)
      .catch(() => {});
  }, []);

  if (!spriteHtml) return null;
  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      dangerouslySetInnerHTML={{ __html: spriteHtml }}
    />
  );
};

interface SpriteIconProps {
  id: string;
  label: string;
  size?: number;
}

const SpriteIcon = ({ id, label, size = 96 }: SpriteIconProps) => (
  <svg width={size} height={size} role="img" aria-label={label} style={{ display: 'block' }}>
    <title>{label}</title>
    <use href={`#${id}`} />
  </svg>
);

interface GridProps {
  size?: number;
  category?: string;
}

const SpriteGrid = ({ size = 96, category }: GridProps) => {
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
    <>
      <InlineSprite />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '1.5rem',
          padding: '1rem',
        }}
      >
        {signs.map((sign) => (
          <div
            key={sign.id}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
          >
            <SpriteIcon id={sign.code.toLowerCase()} label={sign.name} size={size} />
            <span style={{ fontSize: '0.7rem', textAlign: 'center', color: '#555' }}>
              {sign.code}
            </span>
            <span style={{ fontSize: '0.65rem', textAlign: 'center', color: '#888' }}>
              {sign.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

const SingleSpriteIcon = ({ id, label, size }: SpriteIconProps) => (
  <>
    <InlineSprite />
    <SpriteIcon id={id} label={label} size={size} />
  </>
);

const meta: Meta<GridProps> = {
  title: 'ISO 7010/SVG Sprite',
  component: SpriteGrid,
  parameters: { layout: 'padded' },
  argTypes: {
    size: { control: { type: 'number', min: 32, max: 256, step: 8 } },
  },
};

export default meta;

export const Emergency: StoryObj<GridProps> = {
  name: 'Emergency (E-series)',
  render: ({ size }) => <SpriteGrid size={size} category="emergency" />,
  args: { size: 96 },
};

export const Warning: StoryObj<GridProps> = {
  name: 'Warning (W-series)',
  render: ({ size }) => <SpriteGrid size={size} category="warning" />,
  args: { size: 96 },
};

export const AllSigns: StoryObj<GridProps> = {
  name: 'All Signs',
  render: ({ size }) => <SpriteGrid size={size} />,
  args: { size: 96 },
};

export const SingleIcon: StoryObj<SpriteIconProps> = {
  parameters: { layout: 'centered' },
  render: (args) => <SingleSpriteIcon {...args} />,
  args: {
    id: 'e001',
    label: 'Emergency exit',
    size: 200,
  },
  argTypes: {
    id: { control: 'text', description: 'Sign code in lowercase, e.g. e001, w027, p001' },
    label: { control: 'text', description: 'Accessible label' },
    size: { control: { type: 'number', min: 32, max: 512, step: 8 } },
  },
};
