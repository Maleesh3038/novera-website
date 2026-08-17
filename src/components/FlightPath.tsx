export default function FlightPath({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M-50 320 C 150 250, 300 380, 480 280 S 780 120, 950 180 S 1150 60, 1260 90"
        stroke="url(#flightGradient)"
        strokeWidth="2"
        className="flight-path"
      />
      <circle cx="480" cy="280" r="4" fill="#35C2D6" />
      <circle cx="950" cy="180" r="4" fill="#E2A63B" />
      <defs>
        <linearGradient id="flightGradient" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1C93C7" stopOpacity="0.1" />
          <stop offset="0.5" stopColor="#35C2D6" stopOpacity="0.6" />
          <stop offset="1" stopColor="#E2A63B" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  );
}
