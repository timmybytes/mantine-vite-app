import React from 'react';

// TODO: Create a more concrete set of props - this just for TS practice
type IconProps = {
  className?: string;
  name?: string;
  icon?: string;
  size?: number;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  viewBox?: string;
  path?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
};

// TODO: Should check for icon from libray before defining generic SVG
export default function Icon(props: IconProps) {
  return (
    <svg
      className={props.className || 'icon'}
      width={props.width || '28px'}
      height={props.height || '28px'}
      viewBox={props.viewBox || '0 0 48 48'}
      preserveAspectRatio='xMidYMid meet'>
      <g>
        <path
          d={
            props.path ||
            'M24,4C12.9,4,4,12.9,4,24s8.9,20,20,20s20-8.9,20-20S35.1,4,24,4z M24,36'
          }
          fill={props.fill || 'none'}
          fillRule='evenodd'
          stroke={props.stroke || '#000'}
          strokeWidth={props.strokeWidth || '1.5'}
        />
      </g>
    </svg>
  );
}
