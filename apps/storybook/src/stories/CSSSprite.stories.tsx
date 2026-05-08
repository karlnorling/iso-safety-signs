import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { getAllSigns, getSignsByCategory } from '@iso-safety-signs/core';
import { getCssClassName } from '@iso-safety-signs/css';

interface GridProps {
  size?: number;
  category?: string;
}

const StyleInjector = ({ size }: { size: number }) => {
  const signs = getAllSigns();
  const rules = signs
    .map((sign) => {
      const cls = getCssClassName(sign.id);
      if (!cls) return '';
      return `.${cls} { background-image: url('/assets/${sign.assets.svg}'); background-size: contain; background-repeat: no-repeat; background-position: center; }`;
    })
    .filter(Boolean)
    .join('\n');

  const sizeRule = `.iso-icon { display: inline-block; width: ${size}px; height: ${size}px; }`;
  return <style>{`${rules}\n${sizeRule}`}</style>;
};

const CSSGrid = ({ size = 96, category }: GridProps) => {
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
      <StyleInjector size={size} />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '1.5rem',
          padding: '1rem',
        }}
      >
        {signs.map((sign) => {
          const cls = getCssClassName(sign.id) ?? '';
          return (
            <div
              key={sign.id}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
            >
              <span
                className={`iso-icon ${cls}`}
                role="img"
                aria-label={sign.name}
                title={sign.name}
              />
              <span style={{ fontSize: '0.7rem', textAlign: 'center', color: '#555' }}>
                {sign.code}
              </span>
              <span style={{ fontSize: '0.65rem', textAlign: 'center', color: '#888' }}>
                {sign.name}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

const meta: Meta<GridProps> = {
  title: 'ISO 7010/CSS Sprite',
  component: CSSGrid,
  parameters: { layout: 'padded' },
  argTypes: {
    size: { control: { type: 'number', min: 32, max: 256, step: 8 } },
  },
};

export default meta;

export const Emergency: StoryObj<GridProps> = {
  name: 'Emergency (E-series)',
  render: ({ size }) => <CSSGrid size={size} category="emergency" />,
  args: { size: 96 },
};

export const Warning: StoryObj<GridProps> = {
  name: 'Warning (W-series)',
  render: ({ size }) => <CSSGrid size={size} category="warning" />,
  args: { size: 96 },
};

export const AllSigns: StoryObj<GridProps> = {
  name: 'All Signs',
  render: ({ size }) => <CSSGrid size={size} />,
  args: { size: 96 },
};
