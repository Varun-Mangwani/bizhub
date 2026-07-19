// Reusable, subtle, low-opacity SVG decorative elements used across sections.
// Palette restricted to ink (#000000) and yellow (#4169E1 / #FFD54A) only.

export function GridOverlay({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <pattern id="grid-pattern" width="64" height="64" patternUnits="userSpaceOnUse">
          <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#000000" strokeOpacity="0.05" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
}

export function DotMatrix({ className = "" }: { className?: string }) {
  return (
    <svg className={`pointer-events-none absolute ${className}`} width="220" height="220" viewBox="0 0 220 220" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={10 + col * 28} cy={10 + row * 28} r="1.6" fill="#000000" fillOpacity="0.15" />
        ))
      )}
    </svg>
  );
}

export function OrbitRings({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      width="620"
      height="620"
      viewBox="0 0 620 620"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.0" />
        </linearGradient>
        <filter id="glowRings" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Outer Ring */}
      <circle cx="310" cy="310" r="300" stroke="url(#ringGrad)" strokeWidth="1.5" />
      
      {/* Middle Ring */}
      <circle cx="310" cy="310" r="230" stroke="#4169E1" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="6 12" className="animate-spin-slow" style={{ transformOrigin: "310px 310px" }} />
      
      {/* Inner Ring */}
      <circle cx="310" cy="310" r="160" stroke="#000000" strokeOpacity="0.15" strokeWidth="1.5" strokeDasharray="12 12" className="animate-spin-slower" style={{ transformOrigin: "310px 310px" }} />
      
      {/* Orbits / Planets */}
      <circle cx="310" cy="140" r="8" fill="#4169E1" filter="url(#glowRings)" />
      <circle cx="310" cy="140" r="3" fill="#FFFFFF" />
      
      <circle cx="480" cy="360" r="5" fill="#000000" opacity="0.6" />
      
      <circle cx="180" cy="420" r="6" fill="#4169E1" />
      
      <circle cx="130" cy="200" r="4" fill="#000000" opacity="0.3" />
      <circle cx="500" cy="180" r="3" fill="#4169E1" opacity="0.8" />
    </svg>
  );
}

export function FlowLines({ className = "" }: { className?: string }) {
  return (
    <svg className={`pointer-events-none absolute ${className}`} width="900" height="400" viewBox="0 0 900 400" fill="none" aria-hidden="true">
      <path d="M-20 300 C 200 300, 250 100, 450 100 S 700 300, 920 220" stroke="#000000" strokeOpacity="0.08" strokeWidth="1.4" />
      <path d="M-20 220 C 200 220, 260 340, 460 300 S 720 120, 920 160" stroke="#4169E1" strokeOpacity="0.4" strokeWidth="1.4" className="animate-dash" />
    </svg>
  );
}

export function PlusPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={`pointer-events-none absolute ${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4V20M4 12H20" stroke="#000000" strokeOpacity="0.25" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function GlowBlur({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{ background: "radial-gradient(circle, rgba(245,197,24,0.35) 0%, rgba(245,197,24,0) 70%)" }}
    />
  );
}

export function WireframeRocket({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="280" height="420" viewBox="0 0 280 420" fill="none" aria-hidden="true">
      <defs>
        <filter id="rocketGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="rocketLine" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <g>
        {/* Main Body */}
        <path
          d="M140 20C170 55 190 110 190 180C190 220 180 260 165 290H115C100 260 90 220 90 180C90 110 110 55 140 20Z"
          stroke="url(#rocketLine)"
          strokeWidth="2"
          fill="rgba(255,255,255,0.4)"
        />
        {/* Window */}
        <circle cx="140" cy="140" r="26" stroke="url(#rocketLine)" strokeWidth="2" fill="white" />
        <circle cx="140" cy="140" r="12" fill="#4169E1" filter="url(#rocketGlow)" />
        
        {/* Left Fin */}
        <path d="M90 210 L35 280 L90 260 Z" stroke="url(#rocketLine)" strokeWidth="2" fill="rgba(255,255,255,0.4)" strokeLinejoin="round" />
        
        {/* Right Fin */}
        <path d="M190 210 L245 280 L190 260 Z" stroke="url(#rocketLine)" strokeWidth="2" fill="rgba(255,255,255,0.4)" strokeLinejoin="round" />
        
        {/* Base Nozzle */}
        <path d="M115 290 L105 320 L140 310 L175 320 L165 290" stroke="#4169E1" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
        <path d="M105 320 L140 380 L175 320 Z" fill="#4169E1" fillOpacity="0.15" stroke="#4169E1" strokeWidth="1.5" strokeDasharray="4 4" />
        
        {/* Thrust Line */}
        <path d="M140 330 L140 410" stroke="#4169E1" strokeOpacity="0.8" strokeWidth="3" strokeDasharray="6 8" filter="url(#rocketGlow)" />
        
        {/* Stars / Speed lines */}
        <line x1="50" y1="100" x2="50" y2="140" stroke="#000000" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="230" y1="120" x2="230" y2="180" stroke="#000000" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="80" y1="50" x2="80" y2="80" stroke="#000000" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="2 4" />
        <circle cx="210" cy="60" r="3" fill="#4169E1" opacity="0.6" />
        <circle cx="60" cy="200" r="4" fill="#4169E1" opacity="0.8" />
      </g>
    </svg>
  );
}

export function GrowthChart({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="320" height="220" viewBox="0 0 320 220" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4169E1" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#4169E1" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Grid lines */}
      <line x1="10" y1="200" x2="310" y2="200" stroke="#000000" strokeOpacity="0.1" strokeWidth="2" />
      <line x1="10" y1="10" x2="10" y2="200" stroke="#000000" strokeOpacity="0.1" strokeWidth="2" />
      <line x1="10" y1="150" x2="310" y2="150" stroke="#000000" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="10" y1="100" x2="310" y2="100" stroke="#000000" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="10" y1="50" x2="310" y2="50" stroke="#000000" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="4 4" />

      {/* Filled Area */}
      <path d="M10 200 L10 170 L70 150 L120 165 L170 100 L220 110 L270 40 L310 55 L310 200 Z" fill="url(#chartGrad)" />

      {/* Line */}
      <path d="M10 170 L70 150 L120 165 L170 100 L220 110 L270 40 L310 55" stroke="#4169E1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Points */}
      <circle cx="70" cy="150" r="4" fill="#FFFFFF" stroke="#4169E1" strokeWidth="2" />
      <circle cx="120" cy="165" r="4" fill="#FFFFFF" stroke="#4169E1" strokeWidth="2" />
      <circle cx="170" cy="100" r="4" fill="#FFFFFF" stroke="#4169E1" strokeWidth="2" />
      <circle cx="220" cy="110" r="4" fill="#FFFFFF" stroke="#4169E1" strokeWidth="2" />
      <circle cx="270" cy="40" r="6" fill="#000000" stroke="#4169E1" strokeWidth="2" />
      
      {/* Tooltip */}
      <rect x="230" y="10" width="50" height="24" rx="4" fill="#000000" />
      <text x="255" y="26" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">+84%</text>
      <path d="M255 34 L250 24 L260 24 Z" fill="#000000" />
    </svg>
  );
}

export function NetworkNodes({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="360" height="300" viewBox="0 0 360 300" fill="none" aria-hidden="true">
      <defs>
        <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <g stroke="#000000" strokeOpacity="0.15" strokeWidth="2">
        <line x1="40" y1="60" x2="160" y2="140" strokeDasharray="4 4" />
        <line x1="160" y1="140" x2="300" y2="80" strokeDasharray="4 4" />
        <line x1="160" y1="140" x2="220" y2="240" strokeDasharray="4 4" />
        <line x1="40" y1="60" x2="80" y2="220" strokeDasharray="4 4" />
        <line x1="80" y1="220" x2="220" y2="240" strokeDasharray="4 4" />
        <line x1="300" y1="80" x2="320" y2="200" strokeDasharray="4 4" />
        <line x1="220" y1="240" x2="320" y2="200" strokeDasharray="4 4" />
      </g>
      
      {/* Nodes */}
      <circle cx="40" cy="60" r="8" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
      <circle cx="160" cy="140" r="14" fill="#4169E1" filter="url(#nodeGlow)" />
      <circle cx="160" cy="140" r="6" fill="#FFFFFF" />
      
      <circle cx="300" cy="80" r="6" fill="#000000" />
      <circle cx="220" cy="240" r="9" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
      <circle cx="80" cy="220" r="6" fill="#4169E1" />
      <circle cx="320" cy="200" r="5" fill="#000000" fillOpacity="0.5" />
      
      {/* Flow dots */}
      <circle cx="100" cy="100" r="3" fill="#4169E1" />
      <circle cx="230" cy="110" r="3" fill="#000000" />
      <circle cx="150" cy="230" r="3" fill="#4169E1" />
    </svg>
  );
}
