import React, { useEffect, useState } from 'react';

export default function Splash() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 20);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff', color: '#0f172a', padding: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, textAlign: 'center' }}>
        <div style={{ width: 140, height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: ready ? 'scale(1)' : 'scale(0.94)', opacity: ready ? 1 : 0, transition: 'all 360ms ease' }}>
          <img src="/mountain-logo.png" alt="PeakFinder" style={{ width: 108, height: 108, objectFit: 'contain', display: 'block' }} />
        </div>

        <div style={{ transform: ready ? 'translateY(0)' : 'translateY(6px)', opacity: ready ? 1 : 0, transition: 'all 360ms ease' }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#1c6203' }}>PeakFinder</div>
          <div style={{ fontSize: 13, color: '#065f46', marginTop: 6 }}>Discover your next adventure</div>
        </div>
      </div>
    </div>
  );
}
