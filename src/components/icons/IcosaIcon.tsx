interface Props {
  readonly className?: string;
}

export function IcosaIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth={3}
      aria-hidden="true"
      focusable="false"
    >
      <polygon points="48.72 135.69 256 15.38 463.28 135.69 463.28 376.31 256 496.62 48.72 376.31 48.72 135.69" />
      <polyline points="256,15.38 159.21,183.93 48.72,134.63" />
      <polyline points="256,15.38 352.79,183.93 463.28,134.63" />
      <polyline points="159.21,183.93 256,143.74 352.79,183.93" />
      <polyline points="48.72,134.63 159.21,183.93 161.48,311.39 48.72,377.72" />
      <polyline points="463.28,134.63 352.79,183.93 352.79,311.39 463.28,377.72" />
      <line x1="256" y1="143.74" x2="256" y2="397.13" />
      <polyline points="159.21,183.93 256,397.13 352.79,183.93" />
      <polyline points="161.48,311.39 256,397.13 352.79,311.39" />
      <polyline points="48.72,377.72 256,496.62 463.28,377.72" />
      <polyline points="256,143.74 159.21,311.39 256,397.13 352.79,311.39 256,143.74" />
      <polyline points="48.72,134.63 256,143.74 463.28,134.63" />
      <g fill="currentColor" stroke="none">
        <circle cx="256" cy="15.38" r="10" />
        <circle cx="463.28" cy="134.63" r="10" />
        <circle cx="463.28" cy="377.72" r="10" />
        <circle cx="48.72" cy="134.63" r="10" />
        <circle cx="48.72" cy="377.72" r="10" />
        <circle cx="256" cy="496.62" r="10" />
        <circle cx="352.79" cy="182.9" r="9" />
        <circle cx="159.21" cy="182.9" r="9" />
        <circle cx="161.48" cy="311.39" r="9" />
        <circle cx="352.79" cy="311.39" r="9" />
        <circle cx="256" cy="143.74" r="9" />
        <circle cx="256" cy="397.13" r="9" />
        <circle cx="256" cy="256" r="16" />
      </g>
    </svg>
  );
}
