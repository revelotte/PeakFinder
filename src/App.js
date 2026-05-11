import React, { useState, useRef, useEffect } from 'react';

// ── Inline Icons ──────────────────────────────────────────────────────────────
const Mountain = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>);
const Search = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>);
const Filter = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>);
const MapPin = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>);
const Star = ({ filled }) => (<svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? "#fbbf24" : "none"} stroke={filled ? "#fbbf24" : "currentColor"} strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>);
const Navigation = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>);
const TrendingUp = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>);
const User = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>);
const Plus = () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>);
const ChevronRight = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>);
const Bell = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>);
const X = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>);
const Clock = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>);
const Check = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>);
const Share = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>);
const AlertTriangle = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>);
const Info = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>);
const Trophy = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="8 21 12 17 16 21"/><line x1="12" y1="17" x2="12" y2="11"/><path d="M5 7H3a2 2 0 0 0-2 2v1a6 6 0 0 0 6 6h10a6 6 0 0 0 6-6V9a2 2 0 0 0-2-2h-2"/><rect x="5" y="3" width="14" height="8" rx="2"/></svg>);
const Camera = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>);
const CameraLg = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>);
const Edit = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>);
const Save = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>);
const Upload = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>);
const ArrowLeft = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>);
const ExternalLink = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>);
const Settings = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>);
const LogOut = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>);
const Calendar = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>);
const Leaderboard = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="14" width="4" height="8"/><rect x="9" y="9" width="4" height="13"/><rect x="16" y="4" width="4" height="18"/></svg>);
const ChevronLeft = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>);
const ChevronRightSm = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>);

// ── Rank Icons ──────────────────────────────────────────────────────────────
const Seedling = ({ size=20, color='currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6"><path d="M3 21s4-4 8-4 8 4 8 4" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 7s1-4 5-4" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 7s-1-4-5-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const getRankIcon = (label, color) => {
  if (label === 'Newbie') return <Seedling size={22} color={color} />;
  if (label === 'Intermediate') return <Mountain />;
  return <Trophy />;
};

// ── Rank helpers ──────────────────────────────────────────────────────────────
const getRank = (trails) => {
  if (trails >= 16) return { label: 'Expert', color: '#7c3aed', bg: '#ede9fe', emoji: '🏆' };
  if (trails >= 6)  return { label: 'Intermediate', color: '#d97706', bg: '#fef3c7', emoji: '⛰️' };
  return { label: 'Newbie', color: '#059669', bg: '#d1fae5', emoji: '🌱' };
};

// ── Leaderboard mock data ─────────────────────────────────────────────────────
const leaderboardData = [
  { id: 1, name: 'Sarah K.', initials: 'SK', trails: 42, miles: 186.4, elevation: 38200, photo: null },
  { id: 2, name: 'Marcus T.', initials: 'MT', trails: 31, miles: 134.0, elevation: 29100, photo: null },
  { id: 3, name: 'Priya N.', initials: 'PN', trails: 27, miles: 112.3, elevation: 21800, photo: null },
  { id: 4, name: 'Jake L.', initials: 'JL', trails: 19, miles: 89.7, elevation: 16400, photo: null },
  { id: 5, name: 'Emma R.', initials: 'ER', trails: 14, miles: 58.2, elevation: 11200, photo: null },
  { id: 6, name: 'Chris M.', initials: 'CM', trails: 9, miles: 38.6, elevation: 7300, photo: null },
  { id: 7, name: 'Ava S.', initials: 'AS', trails: 4, miles: 14.1, elevation: 2100, photo: null },
];

// ── Splash Screen ─────────────────────────────────────────────────────────────
function Splash() {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 999 }}>
      <div style={{ padding: '8px', borderRadius: '24px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={process.env.PUBLIC_URL + '/mountain-logo.png'} alt="PeakFinder" style={{ width: 96, height: 96, objectFit: 'contain', padding: 6, background: 'transparent', borderRadius: 12, display: 'block' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      </div>
      <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#1c6203', letterSpacing: '-0.5px' }}>PeakFinder</div>
      <div style={{ fontSize: '14px', color: '#64748b', marginTop: '8px' }}>Discover your adventure</div>
    </div>
  );
}

// ── Login Screen ──────────────────────────────────────────────────────────────
function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div style={{ minHeight: '100vh', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ background: 'white', borderRadius: '24px', padding: '32px', width: '100%', maxWidth: '380px', boxShadow: '0 8px 40px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px' }}>
          <div style={{ width: 84, height: 84, marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 6 }}>
            <img src={process.env.PUBLIC_URL + '/mountain-logo.png'} alt="PeakFinder" style={{ width: '100%', height: '100%', objectFit: 'contain', background: 'transparent', borderRadius: 8, display: 'block' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          </div>
          <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#1c6203', marginBottom: '2px' }}>PeakFinder</div>
          <div style={{ fontSize: '13px', color: '#64748b' }}>Your trail companion</div>
        </div>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b', marginBottom: '20px', textAlign: 'center' }}>Welcome back</h2>
        <input type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)}
          style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '14px', outline: 'none', boxSizing: 'border-box', marginBottom: '12px' }} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '14px', outline: 'none', boxSizing: 'border-box', marginBottom: '20px' }} />
        <button onClick={() => onLogin({ name: 'John Doe', initials: 'JD', bio: 'Adventure Enthusiast', email: email || 'john@example.com' })}
          style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #ff6a00, #ff8c42)', color: 'white', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', marginBottom: '12px' }}>
          Sign In
        </button>
        <button onClick={() => onLogin({ name: 'John Doe', initials: 'JD', bio: 'Adventure Enthusiast', email: 'john@example.com' })}
          style={{ width: '100%', padding: '14px', background: '#f1f5f9', color: '#475569', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>
          Continue as Guest
        </button>
      </div>
    </div>
  );
}

// ── Simulated Trail Route Map ──────────────────────────────────────────────────
function TrailRouteMap({ trail, onClose, mapView }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    const isSat = mapView === 'satellite';

    // Background gradient (terrain or satellite)
    const bgGrad = ctx.createLinearGradient(0, 0, W, H);
    if (isSat) {
      bgGrad.addColorStop(0, '#1f2933');
      bgGrad.addColorStop(0.5, '#111827');
      bgGrad.addColorStop(1, '#0b1220');
    } else {
      bgGrad.addColorStop(0, '#d4e6b5');
      bgGrad.addColorStop(0.4, '#b8d498');
      bgGrad.addColorStop(0.7, '#9ec07c');
      bgGrad.addColorStop(1, '#7ea85c');
    }
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Terrain patches
    const patches = isSat ? [
      { x: 40, y: 30, r: 60, c: '#2b2f33' }, { x: 200, y: 50, r: 50, c: '#262a2e' },
      { x: 350, y: 80, r: 70, c: '#1f2326' }, { x: 100, y: 200, r: 80, c: '#272b2f' },
      { x: 300, y: 220, r: 60, c: '#222428' }, { x: 50, y: 300, r: 55, c: '#2a2d31' },
      { x: 380, y: 300, r: 65, c: '#1b1e22' },
    ] : [
      { x: 40, y: 30, r: 60, c: '#a8c87a' }, { x: 200, y: 50, r: 50, c: '#c8dea0' },
      { x: 350, y: 80, r: 70, c: '#90b860' }, { x: 100, y: 200, r: 80, c: '#b0cc88' },
      { x: 300, y: 220, r: 60, c: '#98c068' }, { x: 50, y: 300, r: 55, c: '#a0c070' },
      { x: 380, y: 300, r: 65, c: '#88b858' },
    ];
    patches.forEach(p => {
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
      g.addColorStop(0, p.c + 'cc');
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    // Grid lines (map-like)
    ctx.strokeStyle = isSat ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.15)';
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    // Trail route points (simulated winding path)
    const start = { x: 60, y: H - 60 };
    const end = { x: W - 60, y: 60 };
    const waypoints = [
      start,
      { x: 120, y: H - 130 },
      { x: 180, y: H - 100 },
      { x: 220, y: H - 180 },
      { x: 280, y: H - 150 },
      { x: 310, y: H - 220 },
      { x: 350, y: H - 200 },
      { x: 380, y: H - 270 },
      end,
    ];

    // Shadow of trail
    ctx.beginPath();
    ctx.moveTo(waypoints[0].x + 3, waypoints[0].y + 3);
    for (let i = 1; i < waypoints.length; i++) {
      const prev = waypoints[i - 1], curr = waypoints[i];
      const cx = (prev.x + curr.x) / 2 + 3, cy = (prev.y + curr.y) / 2 + 3;
      ctx.quadraticCurveTo(prev.x + 3, prev.y + 3, cx, cy);
    }
    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();

    // Trail path (orange dashed)
    ctx.beginPath();
    ctx.moveTo(waypoints[0].x, waypoints[0].y);
    for (let i = 1; i < waypoints.length; i++) {
      const prev = waypoints[i - 1], curr = waypoints[i];
      const cx = (prev.x + curr.x) / 2, cy = (prev.y + curr.y) / 2;
      ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);
    }
    ctx.quadraticCurveTo(waypoints[waypoints.length - 2].x, waypoints[waypoints.length - 2].y, end.x, end.y);
    const trailGrad = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
    if (isSat) {
      trailGrad.addColorStop(0, 'rgba(255,255,255,0.95)');
      trailGrad.addColorStop(0.5, 'rgba(220,220,220,0.9)');
      trailGrad.addColorStop(1, 'rgba(200,200,200,0.9)');
    } else {
      trailGrad.addColorStop(0, '#22c55e');
      trailGrad.addColorStop(0.5, '#ff8c42');
      trailGrad.addColorStop(1, '#ef4444');
    }
    ctx.strokeStyle = trailGrad;
    ctx.lineWidth = 5;
    ctx.setLineDash([12, 6]);
    ctx.lineDashOffset = 0;
    ctx.stroke();
    ctx.setLineDash([]);

    // Distance markers along path
    [1, 3, 5, 7].forEach(i => {
      if (i < waypoints.length) {
        ctx.beginPath();
        ctx.arc(waypoints[i].x, waypoints[i].y, 5, 0, Math.PI * 2);
        ctx.fillStyle = isSat ? 'rgba(255,255,255,0.95)' : 'white';
        ctx.fill();
        ctx.strokeStyle = isSat ? 'rgba(0,0,0,0.6)' : '#ff8c42';
        ctx.lineWidth = isSat ? 1.4 : 2;
        ctx.stroke();
      }
    });

    // START marker
    ctx.beginPath();
    ctx.arc(start.x, start.y, 16, 0, Math.PI * 2);
    ctx.fillStyle = isSat ? '#2563eb' : '#22c55e';
    ctx.fill();
    ctx.strokeStyle = isSat ? 'rgba(255,255,255,0.9)' : 'white';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = isSat ? 'rgba(255,255,255,0.95)' : 'white';
    ctx.font = 'bold 10px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('START', start.x, start.y);

    // START label
    ctx.fillStyle = '#15803d';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('Trailhead', start.x + 22, start.y - 4);
    ctx.font = '10px sans-serif';
    ctx.fillStyle = '#166534';
    ctx.fillText('Parking Available', start.x + 22, start.y + 8);

    // END marker (pin shape)
    const pinX = end.x, pinY = end.y;
    ctx.beginPath();
    ctx.arc(pinX, pinY - 14, 12, 0, Math.PI * 2);
    ctx.fillStyle = isSat ? '#f97316' : '#ef4444';
    ctx.fill();
    ctx.strokeStyle = isSat ? 'rgba(255,255,255,0.9)' : 'white';
    ctx.lineWidth = 2.5;
    ctx.stroke();
    // Pin tail
    ctx.beginPath();
    ctx.moveTo(pinX - 5, pinY - 8);
    ctx.lineTo(pinX, pinY + 2);
    ctx.lineTo(pinX + 5, pinY - 8);
    ctx.fillStyle = isSat ? '#f97316' : '#ef4444';
    ctx.fill();
    ctx.fillStyle = isSat ? 'rgba(0,0,0,0.85)' : 'white';
    ctx.font = 'bold 9px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('END', pinX, pinY - 14);

    // END label
    ctx.fillStyle = '#991b1b';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('Summit', pinX - 20, pinY - 18);
    ctx.font = '10px sans-serif';
    ctx.fillStyle = '#7f1d1d';
    ctx.fillText(trail.elevation + ' gain', pinX - 20, pinY - 5);

    // Compass rose
    const cx = W - 36, cy = 36;
    ctx.fillStyle = isSat ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.85)';
    ctx.beginPath();
    ctx.arc(cx, cy, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = isSat ? 'rgba(255,255,255,0.12)' : '#cbd5e1';
    ctx.lineWidth = 1;
    ctx.stroke();
    ['N', 'S', 'E', 'W'].forEach((dir, i) => {
      const angle = (i * Math.PI / 2) - Math.PI / 2;
      const dist = 14;
      ctx.fillStyle = dir === 'N' ? (isSat ? '#fff' : '#ef4444') : (isSat ? 'rgba(255,255,255,0.7)' : '#64748b');
      ctx.font = `bold ${dir === 'N' ? 11 : 9}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(dir, cx + Math.cos(angle) * dist, cy + Math.sin(angle) * dist);
    });

    // Scale bar
    ctx.fillStyle = isSat ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.85)';
    ctx.beginPath();
    ctx.roundRect(16, H - 36, 100, 22, 6);
    ctx.fill();
    ctx.strokeStyle = isSat ? 'rgba(255,255,255,0.12)' : '#475569';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(24, H - 22); ctx.lineTo(108, H - 22);
    ctx.moveTo(24, H - 27); ctx.lineTo(24, H - 17);
    ctx.moveTo(108, H - 27); ctx.lineTo(108, H - 17);
    ctx.stroke();
    ctx.fillStyle = isSat ? 'rgba(255,255,255,0.75)' : '#334155';
    ctx.font = '9px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('1 mile', 66, H - 28);

  }, [trail]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', zIndex: 90, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}
      onClick={onClose}>
      <div style={{ background: 'white', borderRadius: '24px', width: '100%', maxWidth: '480px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}
        onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#1e293b' }}>Trail Route</div>
            <div style={{ fontSize: '12px', color: '#64748b' }}>{trail.name} · {trail.location}</div>
          </div>
          <button onClick={onClose} style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
            <X />
          </button>
        </div>

        {/* Map canvas */}
        <div style={{ position: 'relative', background: '#d4e6b5' }}>
          <canvas ref={canvasRef} width={440} height={340} style={{ width: '100%', display: 'block' }} />
          {/* Legend */}
          <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(255,255,255,0.92)', borderRadius: '10px', padding: '8px 12px', fontSize: '11px', lineHeight: '1.8' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: 12, height: 12, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />Start</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />Summit</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: 20, height: 3, background: 'linear-gradient(to right,#22c55e,#ff8c42)', display: 'inline-block', borderRadius: 2 }} />Trail</div>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0', borderTop: '1px solid #e2e8f0' }}>
          {[
            { label: 'Distance', val: trail.distance, icon: '📏' },
            { label: 'Elevation', val: trail.elevation, icon: '⛰️' },
            { label: 'Difficulty', val: trail.difficulty, icon: '🥾' },
          ].map((s, i) => (
            <div key={i} style={{ padding: '14px', textAlign: 'center', borderRight: i < 2 ? '1px solid #e2e8f0' : 'none' }}>
              <div style={{ fontSize: '16px', marginBottom: '2px' }}>{s.icon}</div>
              <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#1e293b' }}>{s.val}</div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Open in Google Maps */}
        <div style={{ padding: '12px 16px', borderTop: '1px solid #e2e8f0' }}>
          <button onClick={() => { const url = `https://www.google.com/maps/dir/?api=1&destination=${trail.lat},${trail.lng}&travelmode=driving`; window.open(url, '_blank'); }}
            style={{ width: '100%', padding: '13px', background: 'linear-gradient(135deg, #ff6a00, #ff8c42)', color: 'white', border: 'none', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <ExternalLink /> Open in Google Maps
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Calendar Picker ───────────────────────────────────────────────────────────
function CalendarPicker({ trail, onConfirm, onClose }) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selected, setSelected] = useState(null);

  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const dayNames = ['Su','Mo','Tu','We','Th','Fr','Sa'];

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const prevMonth = () => { if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); } else setViewMonth(m => m - 1); };
  const nextMonth = () => { if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); } else setViewMonth(m => m + 1); };

  const isToday = (d) => d === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear();
  const isPast = (d) => new Date(viewYear, viewMonth, d) < new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}
      onClick={onClose}>
      <div style={{ background: 'white', borderRadius: '24px', padding: '24px', width: '100%', maxWidth: '360px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
        onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b' }}>Plan Your Hike</h3>
          <button onClick={onClose} style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><X /></button>
        </div>
        <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '20px' }}>{trail.name}</p>

        {/* Month nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <button onClick={prevMonth} style={{ background: '#f1f5f9', border: 'none', borderRadius: '10px', padding: '8px', cursor: 'pointer', display: 'flex' }}><ChevronLeft /></button>
          <span style={{ fontWeight: '700', color: '#1e293b', fontSize: '15px' }}>{monthNames[viewMonth]} {viewYear}</span>
          <button onClick={nextMonth} style={{ background: '#f1f5f9', border: 'none', borderRadius: '10px', padding: '8px', cursor: 'pointer', display: 'flex' }}><ChevronRightSm /></button>
        </div>

        {/* Day headers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '8px' }}>
          {dayNames.map(d => <div key={d} style={{ textAlign: 'center', fontSize: '11px', fontWeight: '600', color: '#94a3b8', padding: '4px 0' }}>{d}</div>)}
        </div>

        {/* Calendar grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '20px' }}>
          {cells.map((d, i) => {
            if (!d) return <div key={i} />;
            const past = isPast(d);
            const sel = selected === d;
            const tod = isToday(d);
            return (
              <button key={i} disabled={past}
                onClick={() => setSelected(d)}
                style={{
                  padding: '8px 0', borderRadius: '10px', border: 'none', cursor: past ? 'not-allowed' : 'pointer',
                  fontWeight: sel || tod ? '700' : '400', fontSize: '14px',
                  background: sel ? '#ff751f' : tod ? '#fff7ed' : 'transparent',
                  color: past ? '#cbd5e1' : sel ? 'white' : tod ? '#ff751f' : '#1e293b',
                  outline: tod && !sel ? '2px solid #ff751f' : 'none',
                  outlineOffset: '-2px',
                }}>
                {d}
              </button>
            );
          })}
        </div>

        {/* Confirm */}
        <button disabled={!selected}
          onClick={() => { if (selected) { const date = new Date(viewYear, viewMonth, selected); onConfirm(date); } }}
          style={{ width: '100%', padding: '14px', background: selected ? 'linear-gradient(135deg, #ff6a00, #ff8c42)' : '#e2e8f0', color: selected ? 'white' : '#94a3b8', border: 'none', borderRadius: '14px', fontWeight: '700', fontSize: '15px', cursor: selected ? 'pointer' : 'not-allowed', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <Calendar /> {selected ? `Plan for ${monthNames[viewMonth]} ${selected}` : 'Select a date'}
        </button>
      </div>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function PeakFinderApp() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState([1, 3]);
  const [activeTab, setActiveTab] = useState('trails');
  const [notificationCount, setNotificationCount] = useState(3);
  const [showAddTrailModal, setShowAddTrailModal] = useState(false);
  const [selectedTrail, setSelectedTrail] = useState(null);
  const [showNavigateModal, setShowNavigateModal] = useState(false);
  const [navigateTrail, setNavigateTrail] = useState(null);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [mapView, setMapView] = useState('satellite');
  const [user, setUser] = useState(null);
  const [splashVisible, setSplashVisible] = useState(true);
  const [showFilterRegion, setShowFilterRegion] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarTrail, setCalendarTrail] = useState(null);
  const [showRankModal, setShowRankModal] = useState(false);
  const [rankFilter, setRankFilter] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedAdventure, setSelectedAdventure] = useState(null);
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);
  const profilePhotoInputRef = useRef(null);

  // Weather state (live updates via Open-Meteo)
  const weatherCoordsRef = useRef({ lat: null, lon: null });


  const fetchWeather = async (lat, lon) => {
    if (!lat || !lon) return;
    setWeatherLoading(true);
    try {
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
      if (!res.ok) throw new Error('weather fetch failed');
      const data = await res.json();
      if (data && data.current_weather) {
        setCurrentWeather({
          temperature: data.current_weather.temperature,
          windspeed: data.current_weather.windspeed,
          winddirection: data.current_weather.winddirection,
          weathercode: data.current_weather.weathercode,
          time: data.current_weather.time,
        });
      }
    } catch (err) {
      console.warn('Weather fetch error', err);
    } finally {
      setWeatherLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;
    const update = () => {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          weatherCoordsRef.current = { lat, lon };
          fetchWeather(lat, lon);
        }, (err) => {
          const lat = 39.7392, lon = -104.9903; // fallback
          weatherCoordsRef.current = { lat, lon };
          fetchWeather(lat, lon);
        }, { timeout: 5000 });
      } else {
        const lat = 39.7392, lon = -104.9903;
        weatherCoordsRef.current = { lat, lon };
        fetchWeather(lat, lon);
      }
    };
    update();
    const id = setInterval(() => { if (mounted) update(); }, 10 * 60 * 1000);
    return () => { mounted = false; clearInterval(id); };
  }, [mapView]);

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Weather Alert', message: 'Storm expected in Rocky Mountains tomorrow.', detail: 'A significant storm system is moving into the Rocky Mountain region. Expected snowfall of 6–12 inches above 10,000 ft. High winds up to 45 mph. Trail closures may be in effect.', time: '2 hours ago', type: 'warning' },
    { id: 2, title: 'New Trail Added', message: 'Sunset Ridge Trail is now available in your area.', detail: 'Sunset Ridge Trail has just been added to the PeakFinder database! Located near Boulder, CO, it features 5.4 miles of moderate terrain with 1,100 ft of elevation gain. Rating: 4.7 ⭐', time: '5 hours ago', type: 'info' },
    { id: 3, title: 'Achievement Unlocked 🏆', message: "You've completed 10 trails! Keep up the great work.", detail: "Incredible milestone! You've officially completed 10 trails with PeakFinder. Your total stats: 48.2 miles hiked, 8,420 ft elevation gained. You've earned the \"Trail Blazer\" badge!", time: '1 day ago', type: 'success' },
  ]);

  const [adventures, setAdventures] = useState([
    { id: 1, name: 'Eagle Peak Summit', date: 'Jan 28, 2026', status: 'Completed', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&q=80' },
    { id: 2, name: 'Crystal Lake Trail', date: 'Jan 20, 2026', status: 'Completed', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&q=80' },
    { id: 3, name: 'Whispering Pines Loop', date: 'Planned for Feb 5', status: 'Planned', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&q=80' },
  ]);

  const [newTrailForm, setNewTrailForm] = useState({ name: '', location: '', difficulty: 'Easy', distance: '', elevation: '' });

  const [trails, setTrails] = useState([
    { id: 1, name: 'Eagle Peak Summit', location: 'Rocky Mountains, CO', lat: 39.5501, lng: -105.7821, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', distance: '8.5 mi', elevation: '3,200 ft', difficulty: 'Hard', rating: 4.8, reviews: 127, description: 'Challenging summit trail with breathtaking 360° views. Best done early morning to avoid crowds.', tags: ['Summit', 'Challenging', 'Scenic Views'] },
    { id: 2, name: 'Whispering Pines Loop', location: 'Cascade Range, WA', lat: 47.6062, lng: -121.8781, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80', distance: '3.2 mi', elevation: '450 ft', difficulty: 'Easy', rating: 4.5, reviews: 89, description: 'Family-friendly loop through old-growth forest. Perfect for beginners and nature enthusiasts.', tags: ['Family-Friendly', 'Forest', 'Loop Trail'] },
    { id: 3, name: 'Crystal Lake Trail', location: 'Sierra Nevada, CA', lat: 37.7749, lng: -119.4194, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80', distance: '6.1 mi', elevation: '1,800 ft', difficulty: 'Moderate', rating: 4.9, reviews: 203, description: 'Hidden alpine lake with crystal-clear waters. Incredible wildflowers in summer months.', tags: ['Alpine Lake', 'Wildflowers', 'Swimming'] },
    { id: 4, name: 'Thundering Falls', location: 'Columbia River Gorge, OR', lat: 45.7157, lng: -121.5219, image: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?w=800&q=80', distance: '4.8 mi', elevation: '920 ft', difficulty: 'Easy', rating: 4.7, reviews: 156, description: 'Scenic waterfall trail with multiple viewing points. Can get crowded on weekends.', tags: ['Waterfall', 'Scenic', 'Photography'] },
    { id: 5, name: 'Granite Ridge', location: 'White Mountains, NH', lat: 44.2706, lng: -71.3033, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', distance: '11.3 mi', elevation: '4,100 ft', difficulty: 'Hard', rating: 4.6, reviews: 74, description: 'Exposed ridge walk with scrambling sections. Not recommended for those afraid of heights.', tags: ['Ridge Walk', 'Scrambling', 'Advanced'] },
    { id: 6, name: 'Autumn Glory Trail', location: 'Adirondacks, NY', lat: 43.8042, lng: -74.3565, image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80', distance: '2.7 mi', elevation: '280 ft', difficulty: 'Easy', rating: 4.4, reviews: 92, description: 'Best in fall for spectacular foliage. Gentle trail suitable for all skill levels.', tags: ['Fall Colors', 'Easy', 'Scenic'] },
  ]);

  const [userStats, setUserStats] = useState({ trails: 12, miles: 48.2, elevation: 8420 });

  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const popupTimerRef = useRef(null);
  const userInteractedRef = useRef(false);

  const [notifPrefs, setNotifPrefs] = useState({ 'Weather Alerts': true, 'New Trails': true, 'Achievements': true, 'Community Updates': false });

  useEffect(() => {
    const t = setTimeout(() => setSplashVisible(false), 1500);
    return () => clearTimeout(t);
  }, [mapView]);

  useEffect(() => {
    setPopupVisible(false);
    setPopupMessage('');
    userInteractedRef.current = false;
    const mark = (e) => { if (e?.isTrusted) { userInteractedRef.current = true; } };
    window.addEventListener('pointerdown', mark, true);
    window.addEventListener('keydown', mark, true);
    return () => { window.removeEventListener('pointerdown', mark, true); window.removeEventListener('keydown', mark, true); };
  }, [mapView]);

  const showToast = (msg) => {
    if (!userInteractedRef.current) return;
    setPopupMessage(msg);
    setPopupVisible(true);
    if (popupTimerRef.current) clearTimeout(popupTimerRef.current);
    popupTimerRef.current = setTimeout(() => { setPopupVisible(false); popupTimerRef.current = null; }, 3000);
  };

  const filteredTrails = trails.filter(trail => {
    const matchesSearch = trail.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trail.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trail.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesDifficulty = selectedDifficulty.length === 0 || selectedDifficulty.includes(trail.difficulty);
    return matchesSearch && matchesDifficulty;
  });

  const toggleFavorite = (id) => setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);

  const handleAddTrail = () => {
    if (!newTrailForm.name || !newTrailForm.location || !newTrailForm.distance || !newTrailForm.elevation) return;
    const newTrail = {
      id: trails.length + 1, name: newTrailForm.name, location: newTrailForm.location,
      distance: newTrailForm.distance, elevation: newTrailForm.elevation, difficulty: newTrailForm.difficulty,
      rating: 0, reviews: 0, description: 'Newly submitted trail — awaiting full description and reviews!',
      tags: ['New', 'Community'], image: trailPhotoPreview || 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
      lat: 39.5501, lng: -105.7821,
    };
    setTrails(prev => [...prev, newTrail]);
    setNewTrailForm({ name: '', location: '', difficulty: 'Easy', distance: '', elevation: '' });
    setTrailPhotoPreview(null); setTrailPhotoFile(null);
    setShowAddTrailModal(false);
    showToast('Trail submitted successfully!');
  };

  const handlePhotoSelect = (e) => {
    const file = e.target.files[0]; if (!file) return;
    setTrailPhotoFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => setTrailPhotoPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleProfilePhotoSelect = (e) => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => { setProfilePhoto(ev.target.result); setUser(prev => ({ ...prev, photo: ev.target.result })); showToast('Profile photo updated!'); };
    reader.readAsDataURL(file);
  };

  const handleFindNearbyTrails = () => {
    if (navigator.geolocation) {
      showToast('Locating nearby trails...');
      navigator.geolocation.getCurrentPosition(
        (position) => { setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude }); showToast('Found 3 trails within 10 miles!'); },
        () => showToast('Location access denied. Please enable GPS.')
      );
    } else showToast('Geolocation not supported.');
  };

  const handleDeleteNotification = (id, e) => {
    e.stopPropagation();
    setNotifications(prev => prev.filter(n => n.id !== id));
    setNotificationCount(prev => Math.max(0, prev - 1));
    if (selectedNotification?.id === id) setSelectedNotification(null);
    showToast('Notification dismissed');
  };

  const handleStartNavigation = (trail) => {
    setNavigateTrail(trail);
    setShowNavigateModal(true);
    if (selectedTrail) setSelectedTrail(null);
  };

  const handleShareTrail = (trail) => {
    const shareText = `Check out ${trail.name} on PeakFinder!\n📍 ${trail.location}\n📏 ${trail.distance} • ⛰️ ${trail.elevation}\n⭐ ${trail.rating} (${trail.reviews} reviews)\n🥾 Difficulty: ${trail.difficulty}`;
    if (navigator.share) {
      navigator.share({ title: trail.name, text: shareText, url: window.location.href })
        .then(() => showToast('Trail shared!'))
        .catch(() => navigator.clipboard?.writeText(shareText).then(() => showToast('Copied to clipboard!')));
    } else {
      navigator.clipboard?.writeText(shareText).then(() => showToast('Trail details copied!'));
    }
  };

  const handleCompleteTrail = (trailId) => {
    const trail = trails.find(t => t.id === trailId); if (!trail) return;
    const newAdventure = { id: adventures.length + 1, name: trail.name, date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), status: 'Completed', image: trail.image };
    setAdventures(prev => [newAdventure, ...prev]);
    setUserStats(prev => ({ trails: prev.trails + 1, miles: +(prev.miles + parseFloat(trail.distance)).toFixed(1), elevation: prev.elevation + parseInt(trail.elevation.replace(/,/g, '')) }));
    setSelectedTrail(null);
    showToast(`🎉 ${trail.name} marked as complete!`);
  };

  const handlePlanTrail = (trail) => {
    setCalendarTrail(trail);
    setShowCalendar(true);
  };

  const handleConfirmPlan = (date) => {
    if (!calendarTrail) return;
    const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const dateStr = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    const newAdventure = {
      id: adventures.length + 1,
      name: calendarTrail.name,
      date: `Planned for ${dateStr}`,
      status: 'Planned',
      image: calendarTrail.image,
    };
    setAdventures(prev => [...prev, newAdventure]);
    setShowCalendar(false);
    setCalendarTrail(null);
    setSelectedTrail(null);
    showToast(`📅 ${calendarTrail.name} planned for ${dateStr}!`);
  };

  const getDifficultyStyle = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return { backgroundColor: '#d1fae5', color: '#065f46', border: '1px solid #6ee7b7' };
      case 'Moderate': return { backgroundColor: '#fef3c7', color: '#92400e', border: '1px solid #fcd34d' };
      case 'Hard': return { backgroundColor: '#fee2e2', color: '#991b1b', border: '1px solid #fca5a5' };
      default: return { backgroundColor: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1' };
    }
  };

  const getNotificationIcon = (type) => {
    if (type === 'warning') return <AlertTriangle />;
    if (type === 'success') return <Trophy />;
    return <Info />;
  };

  const getNotificationColor = (type) => {
    if (type === 'warning') return { bg: '#fef3c7', border: '#fcd34d', icon: '#d97706' };
    if (type === 'success') return { bg: '#d1fae5', border: '#6ee7b7', icon: '#059669' };
    return { bg: '#dbeafe', border: '#93c5fd', icon: '#2563eb' };
  };



  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 420 : false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 420);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [mapView]);

  const contentMax = isMobile ? '420px' : '1100px';
  const modalMaxWidth = isMobile ? '92%' : '900px';

  const styles = {
    container: { minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', paddingBottom: '100px' },
    header: { position: 'sticky', top: 0, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', zIndex: 50, padding: '16px' },
    toast: { position: 'fixed', top: '70px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,0,0,0.75)', color: 'white', padding: '8px 16px', borderRadius: '20px', zIndex: 200, fontWeight: '500', fontSize: '13px', whiteSpace: 'nowrap' },
    overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)', zIndex: 60, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '80px', overflowY: 'auto' },
    modal: { background: 'rgba(255,255,255,0.97)', maxWidth: modalMaxWidth, width: '90%', borderRadius: '24px', padding: '28px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', marginBottom: '48px', position: 'relative' },
    input: { width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '14px', outline: 'none', boxSizing: 'border-box' },
  };

  const [editForm, setEditForm] = useState(null);
  const openEditProfile = () => {
    setEditForm({ name: user.name, bio: user.bio || 'Adventure Enthusiast', email: user.email || '', location: user.location || '' });
    setShowEditProfile(true);
  };
  const saveProfile = () => {
    setUser(prev => ({ ...prev, name: editForm.name, bio: editForm.bio, email: editForm.email, location: editForm.location, initials: editForm.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() }));
    setShowEditProfile(false);
    showToast('Profile updated!');
  };

  const rank = getRank(userStats.trails);
  const myEntry = { id: 0, name: user?.name || 'You', initials: user?.initials || 'JD', trails: userStats.trails, miles: userStats.miles, elevation: userStats.elevation, isMe: true };

  // ── Leaderboard view ──────────────────────────────────────────────────────
  const renderLeaderboard = () => {
    const myEntry = { id: 0, name: user?.name || 'You', initials: user?.initials || 'JD', trails: userStats.trails, miles: userStats.miles, elevation: userStats.elevation, isMe: true };
    const allEntries = [...leaderboardData, myEntry].sort((a, b) => b.trails - a.trails);
    const myRank = allEntries.findIndex(e => e.isMe) + 1;

    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1e293b' }}>Leaderboard</h2>
          <span style={{ fontSize: '13px', color: '#64748b', background: '#f1f5f9', padding: '6px 12px', borderRadius: '10px', fontWeight: '600' }}>Your rank: #{myRank}</span>
        </div>

        {/* Rank legend */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '20px' }}>
          {[
            { label: 'Newbie', desc: '0–5 hikes', color: '#059669', bg: '#d1fae5' },
            { label: 'Intermediate', desc: '6–15 hikes', color: '#d97706', bg: '#fef3c7' },
            { label: 'Expert', desc: '16+ hikes', color: '#7c3aed', bg: '#ede9fe' },
          ].map(r => {
            const isIntermediate = r.label === 'Intermediate';
            return (
              <div key={r.label} style={{ background: r.bg, borderRadius: '14px', padding: '12px', textAlign: 'center' }}>
                <div style={{ width: isIntermediate ? 28 : 36, height: isIntermediate ? 28 : 36, margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {getRankIcon(r.label, r.color)}
                </div>
                <div style={{ fontSize: isIntermediate ? '11px' : '12px', fontWeight: '700', color: r.color }}>{r.label}</div>
                <div style={{ fontSize: isIntermediate ? '9px' : '10px', color: r.color, opacity: 0.8 }}>{r.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Entries */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {allEntries.map((entry, idx) => {
            const entryRank = getRank(entry.trails);
            const position = idx + 1;
            const medal = position === 1 ? '🥇' : position === 2 ? '🥈' : position === 3 ? '🥉' : null;
            return (
              <div key={entry.id} style={{
                background: entry.isMe ? 'linear-gradient(135deg, #fff7ed, #fef3c7)' : 'white',
                border: entry.isMe ? '2px solid #fb923c' : '1px solid #e2e8f0',
                borderRadius: '18px', padding: '14px 16px',
                display: 'flex', alignItems: 'center', gap: '12px',
                boxShadow: entry.isMe ? '0 4px 16px rgba(251,146,60,0.2)' : '0 2px 8px rgba(0,0,0,0.05)',
              }}>
                {/* Position */}
                <div style={{ width: '32px', textAlign: 'center', flexShrink: 0 }}>
                  {medal
                    ? <span style={{ fontSize: '22px' }}>{medal}</span>
                    : <span style={{ fontSize: '15px', fontWeight: '700', color: '#94a3b8' }}>#{position}</span>}
                </div>
                {/* Avatar */}
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: entry.isMe ? 'linear-gradient(135deg,#ff6a00,#ff8c42)' : `hsl(${entry.id * 47 + 180},55%,55%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '14px', flexShrink: 0, overflow: 'hidden' }}>
                  {entry.isMe && user?.photo ? <img src={user.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : entry.initials}
                </div>
                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: '700', color: '#1e293b', fontSize: '14px' }}>{entry.name}{entry.isMe && ' (You)'}</span>
                    <span style={{ background: entryRank.bg, color: entryRank.color, fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '6px' }}>{entryRank.label}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>{entry.miles} mi · {entry.elevation.toLocaleString()} ft gain</div>
                </div>
                {/* Trails count */}
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontWeight: '800', fontSize: '18px', color: '#ff751f' }}>{entry.trails}</div>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>trails</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (activeTab === 'leaderboard') return renderLeaderboard();

    switch (activeTab) {
      case 'trails':
        return (
          <>
            {/* Weather Widget */}
            <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '24px', padding: '24px', color: 'white', marginBottom: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.15)', cursor: 'pointer' }}
              onClick={() => showToast('Weather details updated!')}>
              <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '4px' }}>Trail Conditions</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '600' }}>Rocky Mountains</h2>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '36px', fontWeight: 'bold' }}>58°F</div>
                  <div style={{ fontSize: '14px', opacity: 0.9 }}>Partly Cloudy</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px', fontSize: '14px', marginBottom: '16px' }}>
                <div>💨 8 mph Wind</div><div>💧 45% Humidity</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '16px' }}>
                {[{ day: 'Today', icon: '☁️', high: 62, low: 48 }, { day: 'Tomorrow', icon: '☀️', high: 65, low: 50 }, { day: 'Sat', icon: '🌧️', high: 58, low: 46 }, { day: 'Sun', icon: '☁️', high: 60, low: 47 }].map((day, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px', padding: '12px', textAlign: 'center', cursor: 'pointer' }}
                    onClick={(e) => { e.stopPropagation(); showToast(`${day.day}: ${day.high}°/${day.low}°F`); }}>
                    <div style={{ fontSize: '12px', marginBottom: '4px' }}>{day.day}</div>
                    <div style={{ fontSize: '24px', marginBottom: '4px' }}>{day.icon}</div>
                    <div style={{ fontSize: '12px' }}>{day.high}°/{day.low}°</div>
                  </div>
                ))}
              </div>
              <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px', padding: '12px', fontSize: '14px' }}>
                <strong>Trail Alert:</strong> Perfect conditions for hiking today!
              </div>
            </div>

            {/* Search */}
            <div style={{ position: 'relative', marginBottom: '24px' }}>
              <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', pointerEvents: 'none', display: 'flex', alignItems: 'center' }}><Search /></div>
              <input type="text" placeholder="Search trails by name, location, or tags..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: '100%', padding: '16px 48px', borderRadius: '16px', border: '1px solid #e2e8f0', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
              <button onClick={() => setShowFilters(!showFilters)}
                style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', padding: '10px', borderRadius: '12px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', background: showFilters || selectedDifficulty.length > 0 ? '#ff751f' : '#f1f5f9', color: showFilters || selectedDifficulty.length > 0 ? 'white' : '#64748b' }}>
                <Filter />
              </button>
            </div>

            {showFilters && (
              <div style={{ background: 'white', borderRadius: '16px', padding: '20px', marginBottom: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>Difficulty Level</h3>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['Easy', 'Moderate', 'Hard'].map(d => (
                    <button key={d} onClick={() => setSelectedDifficulty(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d])}
                      style={{ ...getDifficultyStyle(d), padding: '8px 16px', borderRadius: '12px', fontWeight: '500', cursor: 'pointer', opacity: selectedDifficulty.includes(d) ? 1 : 0.6 }}>{d}</button>
                  ))}
                </div>
                {selectedDifficulty.length > 0 && (
                  <button onClick={() => setSelectedDifficulty([])} style={{ marginTop: '12px', fontSize: '14px', color: '#ff751f', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '500' }}>Clear filters</button>
                )}
              </div>
            )}

            <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ fontSize: '14px', color: '#64748b', fontWeight: '500' }}>{filteredTrails.length} trail{filteredTrails.length !== 1 ? 's' : ''} found</p>
              {favorites.length > 0 && (
                <button onClick={() => { setActiveTab('profile'); showToast('Viewing saved trails'); }}
                  style={{ fontSize: '14px', color: '#ff751f', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer' }}>
                  <Star filled /> {favorites.length} saved
                </button>
              )}
            </div>

            {filteredTrails.map(trail => (
              <div key={trail.id}
                style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', marginBottom: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0', cursor: 'pointer', transition: 'transform 0.3s, box-shadow 0.3s' }}
                onClick={() => setSelectedTrail(trail)}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'; }}>
                <div style={{ position: 'relative' }}>
                  <img src={trail.image} alt={trail.name} style={{ width: '100%', height: '192px', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                    <span style={{ ...getDifficultyStyle(trail.difficulty), padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' }}>{trail.difficulty}</span>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); toggleFavorite(trail.id); }}
                    style={{ position: 'absolute', top: '12px', right: '12px', padding: '8px', background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <Star filled={favorites.includes(trail.id)} />
                  </button>
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '4px' }}>{trail.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '14px', marginBottom: '12px' }}><MapPin /><span>{trail.location}</span></div>
                  <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>{trail.description}</p>
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', fontSize: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#475569' }}><Navigation /><strong>{trail.distance}</strong></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#475569' }}><TrendingUp /><strong>{trail.elevation}</strong></div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                    {trail.tags.map((tag, idx) => (
                      <span key={idx} style={{ padding: '4px 12px', background: '#f1f5f9', color: '#475569', borderRadius: '8px', fontSize: '12px', fontWeight: '500' }}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Star filled /><strong style={{ color: '#1e293b' }}>{trail.rating}</strong><span style={{ color: '#64748b', fontSize: '14px' }}>({trail.reviews})</span></div>
                    <button onClick={(e) => { e.stopPropagation(); setSelectedTrail(trail); }}
                      style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '8px 16px', background: 'linear-gradient(135deg, #ff6a00, #ff8c42)', color: 'white', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>
                      View Details <ChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredTrails.length === 0 && (
              <div style={{ textAlign: 'center', padding: '64px 16px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#475569', marginBottom: '8px' }}>No trails found</h3>
                <p style={{ color: '#64748b', marginBottom: '16px' }}>Try adjusting your search or filters</p>
                <button onClick={() => { setSearchQuery(''); setSelectedDifficulty([]); }}
                  style={{ padding: '10px 20px', background: '#ff751f', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: '600' }}>
                  Clear Search
                </button>
              </div>
            )}
          </>
        );

      case 'map':
        return (
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              {['satellite', 'terrain'].map(v => (
                <button key={v} onClick={() => setMapView(v)}
                  style={{ flex: 1, padding: '10px', background: mapView === v ? '#ff751f' : '#f1f5f9', color: mapView === v ? 'white' : '#475569', border: 'none', borderRadius: '12px', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}>
                  {v === 'satellite' ? '🛰️ Satellite' : '🏔️ Terrain'}
                </button>
              ))}
            </div>
            <div style={{ borderRadius: '24px', overflow: 'hidden', height: '450px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
              {(() => {
                const lat = selectedRegion ? selectedRegion.lat : 39.5501;
                const lng = selectedRegion ? selectedRegion.lng : -105.7821;
                const satUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3000000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus`;
                const terUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3000000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e4!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus`;
                return <iframe key={mapView + (selectedRegion?.label || '')} width="100%" height="100%" style={{ border: 'none', display: 'block' }} src={mapView === 'satellite' ? satUrl : terUrl} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />;
              })()}
            </div>
            <div style={{ background: 'white', borderRadius: '16px', padding: '16px', marginTop: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>📍 {selectedRegion ? `Trails in ${selectedRegion.label}` : 'Trails on Map'}</h3>
              {(selectedRegion ? trails.filter(t => selectedRegion.states.some(s => t.location.includes(s))) : trails.slice(0, 4)).map(trail => (
                <div key={trail.id} onClick={() => setSelectedTrail(trail)}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f1f5f9', cursor: 'pointer' }}>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>{trail.name}</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>{trail.location}</div>
                  </div>
                  <span style={{ ...getDifficultyStyle(trail.difficulty), padding: '4px 10px', borderRadius: '8px', fontSize: '11px', fontWeight: '600' }}>{trail.difficulty}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '16px' }}>
              <button onClick={handleFindNearbyTrails} style={{ padding: '12px', background: '#ff751f', color: 'white', border: 'none', borderRadius: '12px', fontWeight: '600', cursor: 'pointer' }}>📡 Find Nearby</button>
              <button onClick={() => setShowFilterRegion(true)} style={{ padding: '12px', background: selectedRegion ? '#1c6203' : '#f1f5f9', color: selectedRegion ? 'white' : '#475569', border: 'none', borderRadius: '12px', fontWeight: '600', cursor: 'pointer' }}>🗂️ {selectedRegion ? selectedRegion.short : 'Filter Region'}</button>
            </div>

            {showFilterRegion && (
              <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)', zIndex: 70, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}
                onClick={() => setShowFilterRegion(false)}>
                <div style={{ background: 'white', borderRadius: '24px 24px 0 0', padding: '28px', width: '100%', maxWidth: contentMax, boxShadow: '0 -10px 36px rgba(0,0,0,0.15)', paddingBottom: '48px' }}
                  onClick={e => e.stopPropagation()}>
                  <div style={{ width: '40px', height: '4px', background: '#e2e8f0', borderRadius: '2px', margin: '0 auto 20px' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b' }}>Filter by Region</h3>
                    {selectedRegion && <button onClick={() => { setSelectedRegion(null); showToast('Region filter cleared'); }} style={{ fontSize: '13px', color: '#ff751f', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '600' }}>Clear</button>}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      { label: 'Rocky Mountains', short: 'Rockies', icon: '🏔️', states: ['CO', 'WY', 'MT'], lat: 39.5501, lng: -105.7821 },
                      { label: 'Pacific Northwest', short: 'Pacific NW', icon: '🌲', states: ['WA', 'OR'], lat: 47.6062, lng: -121.8781 },
                      { label: 'Sierra Nevada', short: 'Sierra', icon: '🌄', states: ['CA', 'NV'], lat: 37.7749, lng: -119.4194 },
                      { label: 'Appalachian', short: 'Appalachian', icon: '🍂', states: ['NH', 'NY', 'VT', 'ME'], lat: 44.2706, lng: -71.3033 },
                      { label: 'Southwest Desert', short: 'Southwest', icon: '🏜️', states: ['AZ', 'NM', 'UT'], lat: 36.1069, lng: -112.1129 },
                      { label: 'Great Smoky Mountains', short: 'Smokies', icon: '🌫️', states: ['TN', 'NC'], lat: 35.6118, lng: -83.4895 },
                    ].map((region) => {
                      const isSelected = selectedRegion?.label === region.label;
                      const trailCount = trails.filter(t => region.states.some(s => t.location.includes(s))).length;
                      return (
                        <button key={region.label} onClick={() => { setSelectedRegion(region); setShowFilterRegion(false); showToast(`Showing trails in ${region.label}`); }}
                          style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 16px', background: isSelected ? '#f0fdf4' : '#f8fafc', border: `1.5px solid ${isSelected ? '#1c6203' : '#e2e8f0'}`, borderRadius: '14px', cursor: 'pointer', textAlign: 'left', width: '100%' }}>
                          <span style={{ fontSize: '28px' }}>{region.icon}</span>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b' }}>{region.label}</div>
                            <div style={{ fontSize: '12px', color: '#64748b' }}>{region.states.join(', ')} · {trailCount} trail{trailCount !== 1 ? 's' : ''} available</div>
                          </div>
                          {isSelected && <span style={{ color: '#1c6203', fontSize: '18px' }}>✓</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'notifications':
        if (selectedNotification) {
          const colors = getNotificationColor(selectedNotification.type);
          return (
            <div>
              <button onClick={() => setSelectedNotification(null)} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', fontSize: '14px', fontWeight: '600', marginBottom: '20px', padding: '0' }}>
                <ArrowLeft /> Back to Alerts
              </button>
              <div style={{ background: 'white', borderRadius: '24px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: `1px solid ${colors.border}`, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '5px', background: colors.icon, borderRadius: '24px 0 0 24px' }} />
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: colors.bg, border: `1px solid ${colors.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.icon, flexShrink: 0 }}>{getNotificationIcon(selectedNotification.type)}</div>
                  <div>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '4px' }}>{selectedNotification.title}</h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8', fontSize: '13px' }}><Clock />{selectedNotification.time}</div>
                  </div>
                </div>
                <p style={{ fontSize: '15px', color: '#334155', lineHeight: '1.7', marginBottom: '24px' }}>{selectedNotification.detail}</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button onClick={() => { handleDeleteNotification(selectedNotification.id, { stopPropagation: () => {} }); setSelectedNotification(null); }}
                    style={{ flex: 1, padding: '12px', background: '#fee2e2', color: '#991b1b', border: 'none', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', fontSize: '14px' }}>Dismiss</button>
                  <button onClick={() => { setSelectedNotification(null); showToast('Marked as read'); }}
                    style={{ flex: 1, padding: '12px', background: '#1c6203', color: 'white', border: 'none', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                    <Check /> Got it
                  </button>
                </div>
              </div>
            </div>
          );
        }

        return (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1e293b' }}>Alerts & Notifications</h2>
              {notifications.length > 0 && (
                <button onClick={() => { setNotifications([]); setNotificationCount(0); showToast('All notifications cleared'); }}
                  style={{ fontSize: '13px', color: '#64748b', background: '#f1f5f9', border: 'none', borderRadius: '10px', padding: '6px 12px', cursor: 'pointer', fontWeight: '500' }}>Clear all</button>
              )}
            </div>
            {notifications.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '64px 24px', background: 'white', borderRadius: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔔</div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#475569', marginBottom: '8px' }}>All caught up!</h3>
                <p style={{ color: '#94a3b8', fontSize: '14px' }}>No new notifications at the moment.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {notifications.map(notification => {
                  const colors = getNotificationColor(notification.type);
                  return (
                    <div key={notification.id} onClick={() => setSelectedNotification(notification)}
                      style={{ background: 'white', borderRadius: '20px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: `1px solid ${colors.border}`, position: 'relative', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'; }}>
                      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', background: colors.icon, borderRadius: '20px 0 0 20px' }} />
                      <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: colors.bg, border: `1px solid ${colors.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.icon, flexShrink: 0 }}>{getNotificationIcon(notification.type)}</div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
                            <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b', margin: 0 }}>{notification.title}</h4>
                            <button onClick={(e) => handleDeleteNotification(notification.id, e)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', padding: '2px', flexShrink: 0, display: 'flex', alignItems: 'center' }}><X /></button>
                          </div>
                          <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.5', marginBottom: '10px' }}>{notification.message}</p>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8', fontSize: '12px' }}><Clock /><span>{notification.time}</span></div>
                            <span style={{ fontSize: '12px', color: colors.icon, fontWeight: '600' }}>Tap to read more →</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            <div style={{ background: 'white', borderRadius: '20px', padding: '20px', marginTop: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b', marginBottom: '16px' }}>Notification Preferences</h3>
              {[
                { label: 'Weather Alerts', desc: 'Storm warnings & trail conditions', icon: '🌦️' },
                { label: 'New Trails', desc: 'Trails added in your area', icon: '🥾' },
                { label: 'Achievements', desc: 'Milestones & badges', icon: '🏆' },
                { label: 'Community Updates', desc: 'Reviews & trail reports', icon: '💬' },
              ].map((pref, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: idx < 3 ? '1px solid #f1f5f9' : 'none' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ fontSize: '24px' }}>{pref.icon}</span>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>{pref.label}</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>{pref.desc}</div>
                    </div>
                  </div>
                  <div onClick={() => { setNotifPrefs(p => ({ ...p, [pref.label]: !p[pref.label] })); showToast(`${pref.label} ${notifPrefs[pref.label] ? 'disabled' : 'enabled'}`); }}
                    style={{ width: '44px', height: '24px', borderRadius: '12px', background: notifPrefs[pref.label] ? '#1c6203' : '#cbd5e1', cursor: 'pointer', position: 'relative', transition: 'background 0.2s', flexShrink: 0 }}>
                    <div style={{ position: 'absolute', top: '2px', left: notifPrefs[pref.label] ? '22px' : '2px', width: '20px', height: '20px', borderRadius: '50%', background: 'white', boxShadow: '0 1px 4px rgba(0,0,0,0.2)', transition: 'left 0.2s' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'profile':
        return (
          <div>
            <div style={{ background: 'white', borderRadius: '24px', padding: '24px', marginBottom: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', textAlign: 'center' }}>
              <div style={{ position: 'relative', width: '80px', height: '80px', margin: '0 auto 12px', cursor: 'pointer' }}
                onClick={() => profilePhotoInputRef.current?.click()}
                onMouseEnter={e => { const ov = e.currentTarget.querySelector('.cam-overlay'); if (ov) ov.style.opacity = '1'; }}
                onMouseLeave={e => { const ov = e.currentTarget.querySelector('.cam-overlay'); if (ov) ov.style.opacity = '0'; }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, #ff6a00, #ff8c42)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '28px', fontWeight: 'bold', overflow: 'hidden' }}>
                  {user?.photo ? <img src={user.photo} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : (user?.initials || 'JD')}
                </div>
                <div className="cam-overlay" style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.2s' }}><CameraLg /></div>
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: '26px', height: '26px', borderRadius: '50%', background: '#ff751f', border: '2.5px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}><Camera /></div>
              </div>
              <input ref={profilePhotoInputRef} type="file" accept="image/*" onChange={handleProfilePhotoSelect} style={{ display: 'none' }} />

              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b', marginBottom: '4px' }}>{user?.name || 'John Doe'}</h2>
              {/* User Rank badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: rank.bg, color: rank.color, padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '700', marginBottom: '8px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20 }}>{getRankIcon(rank.label, rank.color)}</span>
                {rank.label} Hiker
              </div>
              <p style={{ color: '#64748b', marginBottom: '4px' }}>{user?.bio || 'Adventure Enthusiast'}</p>
              {user?.location && <p style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '4px' }}>📍 {user.location}</p>}
              {user?.email && <p style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '16px' }}>✉️ {user.email}</p>}

              {/* Edit Profile removed from profile page */}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', padding: '16px 0', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
                <div><div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff751f' }}>{userStats.trails}</div><div style={{ fontSize: '12px', color: '#64748b' }}>Trails</div></div>
                <div><div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff751f' }}>{userStats.miles}</div><div style={{ fontSize: '12px', color: '#64748b' }}>Miles</div></div>
                <div><div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff751f' }}>{userStats.elevation.toLocaleString()}</div><div style={{ fontSize: '12px', color: '#64748b' }}>Elevation</div></div>
              </div>
            </div>

            {/* Ranks embedded inside profile page (moved from footer) */}
            <div style={{ marginTop: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>Ranks</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '16px' }}>
                {[
                  { label: 'Newbie', desc: '0–5 hikes', color: '#059669', bg: '#d1fae5' },
                  { label: 'Intermediate', desc: '6–15 hikes', color: '#d97706', bg: '#fef3c7' },
                  { label: 'Expert', desc: '16+ hikes', color: '#7c3aed', bg: '#ede9fe' },
                ].map(r => {
                  const isIntermediate = r.label === 'Intermediate';
                  return (
                    <button key={r.label} onClick={() => { setRankFilter(r.label); setShowRankModal(true); }}
                      style={{ background: r.bg, borderRadius: '14px', padding: isIntermediate ? '8px' : '12px', textAlign: 'center', border: 'none', cursor: 'pointer' }}>
                      <div style={{ width: isIntermediate ? 28 : 40, height: isIntermediate ? 28 : 40, margin: '0 auto 6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {getRankIcon(r.label, r.color)}
                      </div>
                      <div style={{ fontSize: isIntermediate ? '11px' : '12px', fontWeight: '700', color: r.color }}>{r.label}</div>
                      <div style={{ fontSize: isIntermediate ? '9px' : '10px', color: r.color, opacity: 0.8 }}>{r.desc}</div>
                    </button>
                  );
                })}
              </div>

              <div style={{ background: 'white', borderRadius: '16px', padding: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>Top Hikers</h4>
                {leaderboardData.slice(0, 4).map((entry, idx) => {
                  const entryRank = getRank(entry.trails);
                  return (
                    <div key={entry.id} onClick={() => { setSelectedUser(entry); setShowUserModal(true); }}
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: idx < 3 ? '1px solid #f1f5f9' : 'none', cursor: 'pointer' }}>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: `hsl(${entry.id * 47 + 180},55%,55%)`, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>{entry.initials}</div>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b' }}>{entry.name}</div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>{entry.miles} mi · {entry.elevation.toLocaleString()} ft</div>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                        <div style={{ fontSize: '12px', background: entryRank.bg, color: entryRank.color, padding: '4px 8px', borderRadius: 8, fontWeight: 700 }}>{entryRank.label}</div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '16px', fontWeight: '800', color: '#ff751f' }}>{entry.trails}</div>
                          <div style={{ fontSize: '11px', color: '#94a3b8' }}>trails</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Upcoming Trips */}
            {adventures.filter(a => a.status === 'Planned').length > 0 && (
              <>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' }}>📅 Upcoming Trips</h3>
                {adventures.filter(a => a.status === 'Planned').map(adventure => (
                  <div key={adventure.id} onClick={() => setSelectedAdventure(adventure)}
                    style={{ background: 'linear-gradient(135deg, #fff7ed, #fef3c7)', border: '1.5px solid #fb923c', borderRadius: '16px', padding: '16px', marginBottom: '12px', display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer' }}>
                    <img src={adventure.image} alt={adventure.name} style={{ width: '60px', height: '60px', borderRadius: '12px', objectFit: 'cover' }} />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>{adventure.name}</h4>
                      <p style={{ fontSize: '14px', color: '#92400e', display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar /> {adventure.date}</p>
                    </div>
                    <div style={{ padding: '4px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', background: '#fef3c7', color: '#92400e' }}>Planned</div>
                  </div>
                ))}
              </>
            )}

            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '12px', marginTop: '8px' }}>My Adventures</h3>
            {adventures.filter(a => a.status === 'Completed').map(adventure => (
              <div key={adventure.id} onClick={() => setSelectedAdventure(adventure)}
                style={{ background: 'white', borderRadius: '16px', padding: '16px', marginBottom: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer' }}>
                <img src={adventure.image} alt={adventure.name} style={{ width: '60px', height: '60px', borderRadius: '12px', objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>{adventure.name}</h4>
                  <p style={{ fontSize: '14px', color: '#64748b' }}>{adventure.date}</p>
                </div>
                <div style={{ padding: '4px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', background: '#d1fae5', color: '#065f46', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Check /> Completed
                </div>
              </div>
            ))}

            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginBottom: '12px', marginTop: '24px' }}>Saved Trails</h3>
            {favorites.length > 0 ? (
              trails.filter(t => favorites.includes(t.id)).map(trail => (
                <div key={trail.id} onClick={() => setSelectedTrail(trail)}
                  style={{ background: 'white', borderRadius: '16px', padding: '16px', marginBottom: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer' }}>
                  <img src={trail.image} alt={trail.name} style={{ width: '60px', height: '60px', borderRadius: '12px', objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>{trail.name}</h4>
                    <p style={{ fontSize: '14px', color: '#64748b' }}>{trail.distance} • {trail.difficulty}</p>
                  </div>
                  <Star filled />
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '32px', background: 'white', borderRadius: '16px' }}>
                <p style={{ color: '#64748b' }}>No saved trails yet</p>
              </div>
            )}
          </div>
        );

      default: return null;
    }
  };

  if (splashVisible) return <Splash />;
  if (!user) return <Login onLogin={(u) => setUser(u)} />;

  return (
    <div style={styles.container} onClick={() => { if (showSettingsMenu) setShowSettingsMenu(false); }}>
      {popupVisible && <div style={styles.toast}>{popupMessage}</div>}

      {/* ── Simulated Route Map Modal (with Satellite / Terrain toggle) ── */}
      {showNavigateModal && navigateTrail && (
        <div style={{ ...styles.overlay, paddingTop: '60px' }} onClick={() => setShowNavigateModal(false)}>
          <div style={{ ...styles.modal, maxWidth: modalMaxWidth, padding: '14px' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <button onClick={() => setMapView('satellite')} style={{ flex: 1, padding: '8px 12px', background: mapView === 'satellite' ? '#ff751f' : '#f1f5f9', color: mapView === 'satellite' ? 'white' : '#475569', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '700' }}>🛰️ Satellite</button>
              <button onClick={() => setMapView('terrain')} style={{ flex: 1, padding: '8px 12px', background: mapView === 'terrain' ? '#ff751f' : '#f1f5f9', color: mapView === 'terrain' ? 'white' : '#475569', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: '700' }}>🏔️ Terrain</button>
            </div>
            <TrailRouteMap trail={navigateTrail} mapView={mapView} onClose={() => setShowNavigateModal(false)} />
          </div>
        </div>
      )}

      {/* ── Rank Modal (shows users for selected rank) ── */}
      {showRankModal && rankFilter && (
        <div style={styles.overlay} onClick={() => setShowRankModal(false)}>
          <div style={styles.modal} onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowRankModal(false)} style={{ position: 'absolute', top: '16px', right: '16px', background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}><X /></button>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>{rankFilter} Hikers</h3>
            <p style={{ color: '#64748b', marginBottom: '12px' }}>People classified as <strong>{rankFilter}</strong>.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[...leaderboardData, myEntry].filter(e => getRank(e.trails).label === rankFilter).sort((a,b) => b.trails - a.trails).map((entry, idx) => {
                const position = idx + 1;
                const medal = position === 1 ? '🥇' : position === 2 ? '🥈' : position === 3 ? '🥉' : null;
                return (
                  <div key={entry.id} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #f1f5f9' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {entry.photo
                        ? <img src={entry.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `hsl(${entry.id * 47 + 180},55%,55%)`, color: 'white', fontWeight: '700' }}>{entry.initials}</div>
                      }
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <button onClick={() => { setSelectedUser(entry); setShowUserModal(true); }}
                              style={{ background: 'none', border: 'none', padding: 0, margin: 0, color: '#1e293b', fontWeight: 700, cursor: 'pointer', textAlign: 'left' }}>
                              {entry.name}{entry.isMe ? ' (You)' : ''}
                            </button>
                            <div style={{ fontSize: '12px', color: '#64748b' }}>{entry.miles} mi · {entry.elevation.toLocaleString()} ft</div>
                          </div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', minWidth: 72 }}>
                      <div style={{ fontWeight: '800', color: '#ff751f', fontSize: 16 }}>{medal ? medal : `#${position}`}</div>
                      <div style={{ fontSize: '11px', color: '#94a3b8' }}>{entry.trails} trails</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ── User Stats Modal ── */}
      {showUserModal && selectedUser && (
        <div style={styles.overlay} onClick={() => setShowUserModal(false)}>
          <div style={styles.modal} onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowUserModal(false)} style={{ position: 'absolute', top: '16px', right: '16px', background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}><X /></button>
            <div style={{ textAlign: 'center', paddingTop: 8 }}>
              <div style={{ width: 88, height: 88, borderRadius: 44, margin: '0 auto 12px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: selectedUser.photo ? 'transparent' : `hsl(${selectedUser.id * 47 + 180},55%,55%)`, color: 'white', fontWeight: 700 }}>
                {selectedUser.photo ? <img src={selectedUser.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : (selectedUser.initials || selectedUser.name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase())}
              </div>
              <h3 style={{ margin: '6px 0', fontSize: 20, fontWeight: 700, color: '#1e293b' }}>{selectedUser.name}{selectedUser.isMe ? ' (You)' : ''}</h3>
              <div style={{ marginBottom: 12, color: '#64748b' }}>{getRank(selectedUser.trails).label} • {selectedUser.trails} trails</div>
              <div style={{ display: 'flex', justifyContent: 'space-around', gap: 12, marginTop: 12 }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: '#ff751f' }}>{selectedUser.miles}</div>
                  <div style={{ fontSize: 12, color: '#64748b' }}>miles</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: '#ff751f' }}>{selectedUser.elevation.toLocaleString()}</div>
                  <div style={{ fontSize: 12, color: '#64748b' }}>elevation ft</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Adventure Detail Modal ── */}
      {selectedAdventure && (
        <div style={styles.overlay} onClick={() => setSelectedAdventure(null)}>
          <div style={styles.modal} onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedAdventure(null)} style={{ position: 'absolute', top: '16px', right: '16px', background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}><X /></button>
            <div style={{ textAlign: 'center', paddingTop: 8 }}>
              <div style={{ width: '100%', height: 180, borderRadius: 12, overflow: 'hidden', marginBottom: 12 }}>
                <img src={selectedAdventure.image} alt={selectedAdventure.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ margin: '6px 0', fontSize: 20, fontWeight: 700, color: '#1e293b' }}>{selectedAdventure.name}</h3>
              <div style={{ marginBottom: 8, color: '#64748b' }}>{selectedAdventure.date} · {selectedAdventure.status}</div>
              {selectedAdventure.description && <p style={{ color: '#475569', lineHeight: 1.4 }}>{selectedAdventure.description}</p>}
              <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center', gap: 8 }}>
                <button onClick={() => { setSelectedAdventure(null); showToast('Adventure opened'); }} style={{ padding: '8px 14px', borderRadius: 10, border: 'none', background: '#ff751f', color: 'white', fontWeight: 700, cursor: 'pointer' }}>OK</button>
                <button onClick={() => setSelectedAdventure(null)} style={{ padding: '8px 14px', borderRadius: 10, border: '1px solid #e2e8f0', background: 'white', color: '#475569', fontWeight: 700, cursor: 'pointer' }}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Calendar Picker Modal ── */}
      {showCalendar && calendarTrail && (
        <CalendarPicker trail={calendarTrail} onConfirm={handleConfirmPlan} onClose={() => { setShowCalendar(false); setCalendarTrail(null); }} />
      )}

      {/* Header */}
      <header style={styles.header}>
          <div style={{ maxWidth: contentMax, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: isMobile ? 44 : 52, height: isMobile ? 44 : 52, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isMobile ? 2 : 4, borderRadius: 12, background: 'transparent' }}>
              <img src={process.env.PUBLIC_URL + '/mountain-logo.png'} alt="PeakFinder" style={{ width: isMobile ? 36 : 44, height: isMobile ? 36 : 44, objectFit: 'contain', display: 'block' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <span style={{ fontSize: '36px', display: 'none' }} aria-hidden>🏔️</span>
            </div>
            <div>
              <div style={{ fontSize: isMobile ? '20px' : '24px', fontWeight: 'bold', color: '#1c6203' }}>PeakFinder</div>
              <div style={{ fontSize: isMobile ? '10px' : '11px', color: '#64748b', fontWeight: '500' }}>{isMobile ? '' : 'Discover your adventure'}</div>
            </div>
          </div>
          {/* Rank badge + Settings */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {rank.label !== 'Intermediate' && (
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: rank.bg, color: rank.color, padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20 }}>{getRankIcon(rank.label, rank.color)}</span>
                {rank.label} Hiker
              </div>
            )}
            {/* Settings button + dropdown */}
            <div style={{ position: 'relative' }}>
              <button onClick={(e) => { e.stopPropagation(); setShowSettingsMenu(v => !v); }}
                style={{ background: showSettingsMenu ? '#f1f5f9' : 'transparent', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}>
                <Settings />
              </button>
              {showSettingsMenu && (
                <div style={{ position: 'absolute', right: 0, top: 'calc(100% + 8px)', background: 'white', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.15)', border: '1px solid #e2e8f0', minWidth: '180px', zIndex: 200, overflow: 'hidden' }}
                  onClick={e => e.stopPropagation()}>
                  <div style={{ padding: '12px 16px', borderBottom: '1px solid #f1f5f9' }}>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#1e293b' }}>{user.name}</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>{user.email}</div>
                  </div>
                  <button onClick={() => { setShowSettingsMenu(false); setActiveTab('profile'); openEditProfile(); }}
                    style={{ width: '100%', padding: '12px 16px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#475569', fontWeight: '500' }}>
                    <Edit /> Edit Profile
                  </button>
                  <button onClick={() => { setShowSettingsMenu(false); setUser(null); showToast('Logged out'); }}
                    style={{ width: '100%', padding: '12px 16px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#ef4444', fontWeight: '600', borderTop: '1px solid #f1f5f9' }}>
                    <LogOut /> Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ── Edit Profile Modal ── */}
      {showEditProfile && editForm && (
        <div style={styles.overlay} onClick={() => setShowEditProfile(false)}>
          <div style={styles.modal} onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowEditProfile(false)} style={{ position: 'absolute', top: '16px', right: '16px', background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}><X /></button>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '20px' }}>Edit Profile</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              {[['FULL NAME', 'name', 'text', 'Your full name'], ['BIO', 'bio', 'text', 'e.g. Adventure Enthusiast'], ['EMAIL', 'email', 'email', 'your@email.com'], ['LOCATION', 'location', 'text', 'e.g. Denver, CO']].map(([label, field, type, placeholder]) => (
                <div key={field}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', display: 'block', marginBottom: '6px' }}>{label}</label>
                  <input type={type} value={editForm[field]} onChange={e => setEditForm({ ...editForm, [field]: e.target.value })} style={styles.input} placeholder={placeholder} />
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <button onClick={() => setShowEditProfile(false)} style={{ padding: '14px', background: '#f1f5f9', color: '#64748b', border: 'none', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', fontSize: '15px' }}>Cancel</button>
              <button onClick={saveProfile} style={{ padding: '14px', background: 'linear-gradient(135deg, #1c6203, #2d8a05)', color: 'white', border: 'none', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}><Save /> Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Trail Details Modal ── */}
      {selectedTrail && (
        <div style={styles.overlay} onClick={() => setSelectedTrail(null)}>
          <div style={styles.modal} onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedTrail(null)} style={{ position: 'absolute', top: '16px', right: '16px', background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', zIndex: 10 }}><X /></button>
            <img src={selectedTrail.image} alt={selectedTrail.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px', marginBottom: '20px' }} />
            <div style={{ marginBottom: '16px', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ ...getDifficultyStyle(selectedTrail.difficulty), padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' }}>{selectedTrail.difficulty}</span>
              <button onClick={() => handleShareTrail(selectedTrail)} style={{ padding: '6px 12px', background: '#f1f5f9', color: '#64748b', border: 'none', borderRadius: '12px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}><Share /> Share</button>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>{selectedTrail.name}</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '14px', marginBottom: '16px' }}><MapPin /><span>{selectedTrail.location}</span></div>
            <div style={{ display: 'flex', gap: '24px', marginBottom: '16px', padding: '16px', background: '#f8fafc', borderRadius: '12px' }}>
              <div><div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Distance</div><div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b' }}>{selectedTrail.distance}</div></div>
              <div><div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Elevation</div><div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b' }}>{selectedTrail.elevation}</div></div>
              <div><div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Rating</div><div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '4px' }}><Star filled />{selectedTrail.rating}</div></div>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Description</h3>
              <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>{selectedTrail.description}</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>Features</h3>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {selectedTrail.tags.map((tag, idx) => (
                  <span key={idx} style={{ padding: '6px 12px', background: '#f1f5f9', color: '#475569', borderRadius: '8px', fontSize: '12px', fontWeight: '500' }}>{tag}</span>
                ))}
              </div>
            </div>
            {/* 4-button grid: Save, Plan, Done, Navigate */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <button onClick={() => toggleFavorite(selectedTrail.id)}
                style={{ padding: '13px 8px', background: favorites.includes(selectedTrail.id) ? '#fef3c7' : '#f1f5f9', color: favorites.includes(selectedTrail.id) ? '#92400e' : '#64748b', border: 'none', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <Star filled={favorites.includes(selectedTrail.id)} />{favorites.includes(selectedTrail.id) ? 'Saved' : 'Save'}
              </button>
              <button onClick={() => handlePlanTrail(selectedTrail)}
                style={{ padding: '13px 8px', background: '#dbeafe', color: '#1d4ed8', border: 'none', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <Calendar /> Plan
              </button>
              <button onClick={() => handleCompleteTrail(selectedTrail.id)}
                style={{ padding: '13px 8px', background: '#1c6203', color: 'white', border: 'none', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <Check /> Done
              </button>
              <button onClick={() => handleStartNavigation(selectedTrail)}
                style={{ padding: '13px 8px', background: 'linear-gradient(135deg, #ff6a00, #ff8c42)', color: 'white', border: 'none', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <Navigation /> Navigate
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Add Trail Modal ── */}
      {showAddTrailModal && (
        <div style={{ ...styles.overlay, paddingTop: '60px' }} onClick={() => setShowAddTrailModal(false)}>
          <div style={styles.modal} onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowAddTrailModal(false)} style={{ position: 'absolute', top: '16px', right: '16px', background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}><X /></button>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '4px' }}>Add New Trail</h3>
            <p style={{ color: '#64748b', marginBottom: '20px', fontSize: '14px' }}>Submit a trail to share with the community!</p>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', display: 'block', marginBottom: '8px' }}>TRAIL PHOTO</label>
              {trailPhotoPreview ? (
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '160px', marginBottom: '8px' }}>
                  <img src={trailPhotoPreview} alt="Trail preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <button onClick={() => { setTrailPhotoPreview(null); setTrailPhotoFile(null); }} style={{ position: 'absolute', top: '8px', right: '8px', background: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '50%', width: '28px', height: '28px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}><X /></button>
                </div>
              ) : (
                <div style={{ border: '2px dashed #cbd5e1', borderRadius: '16px', padding: '24px', textAlign: 'center', marginBottom: '8px' }}>
                  <div style={{ fontSize: '36px', marginBottom: '8px' }}>🏔️</div>
                  <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '16px' }}>Add a photo of your trail</p>
                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button onClick={() => cameraInputRef.current?.click()} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 16px', background: 'linear-gradient(135deg, #ff6a00, #ff8c42)', color: 'white', border: 'none', borderRadius: '12px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}><CameraLg /> Take Photo</button>
                    <button onClick={() => fileInputRef.current?.click()} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 16px', background: '#f1f5f9', color: '#475569', border: 'none', borderRadius: '12px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}><Upload /> Upload</button>
                  </div>
                </div>
              )}
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhotoSelect} style={{ display: 'none' }} />
              <input ref={cameraInputRef} type="file" accept="image/*" capture="environment" onChange={handlePhotoSelect} style={{ display: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              {[['TRAIL NAME *', 'name', 'e.g. Sunset Ridge Trail'], ['LOCATION *', 'location', 'e.g. Rocky Mountains, CO']].map(([label, field, placeholder]) => (
                <div key={field}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', display: 'block', marginBottom: '6px' }}>{label}</label>
                  <input type="text" placeholder={placeholder} value={newTrailForm[field]} onChange={e => setNewTrailForm({ ...newTrailForm, [field]: e.target.value })} style={styles.input} />
                </div>
              ))}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[['DISTANCE *', 'distance', 'e.g. 5.2 mi'], ['ELEVATION *', 'elevation', 'e.g. 1,200 ft']].map(([label, field, placeholder]) => (
                  <div key={field}>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', display: 'block', marginBottom: '6px' }}>{label}</label>
                    <input type="text" placeholder={placeholder} value={newTrailForm[field]} onChange={e => setNewTrailForm({ ...newTrailForm, [field]: e.target.value })} style={styles.input} />
                  </div>
                ))}
              </div>
              <div>
                <label style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', display: 'block', marginBottom: '6px' }}>DIFFICULTY</label>
                <select value={newTrailForm.difficulty} onChange={e => setNewTrailForm({ ...newTrailForm, difficulty: e.target.value })} style={{ ...styles.input, cursor: 'pointer' }}>
                  <option value="Easy">Easy</option><option value="Moderate">Moderate</option><option value="Hard">Hard</option>
                </select>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <button onClick={() => { setShowAddTrailModal(false); setTrailPhotoPreview(null); setTrailPhotoFile(null); }} style={{ padding: '14px', background: '#f1f5f9', color: '#64748b', border: 'none', borderRadius: '12px', fontWeight: '600', cursor: 'pointer', fontSize: '15px' }}>Cancel</button>
              <button onClick={handleAddTrail} style={{ padding: '14px', background: newTrailForm.name && newTrailForm.location && newTrailForm.distance && newTrailForm.elevation ? 'linear-gradient(135deg, #ff6a00, #ff8c42)' : '#cbd5e1', color: 'white', border: 'none', borderRadius: '12px', fontWeight: '600', cursor: newTrailForm.name && newTrailForm.location ? 'pointer' : 'not-allowed', fontSize: '15px' }}>Submit Trail</button>
            </div>
          </div>
        </div>
      )}

      <main style={{ maxWidth: contentMax, margin: '0 auto', padding: '32px 20px' }}>
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)', borderTop: '1px solid #e2e8f0', boxShadow: '0 -4px 12px rgba(0,0,0,0.05)', zIndex: 50, padding: '12px 16px' }}>
        <div style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          {[
            { tab: 'trails', icon: <Mountain />, label: 'Trails' },
            { tab: 'map', icon: <MapPin />, label: 'Map' },
          ].map(({ tab, icon, label }) => (
            <button key={tab} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', padding: '8px 12px', background: 'none', border: 'none', cursor: 'pointer', color: activeTab === tab ? '#ff751f' : '#64748b' }}
              onClick={() => setActiveTab(tab)}>
              {icon}<span style={{ fontSize: '12px', fontWeight: '600' }}>{label}</span>
            </button>
          ))}

          <div style={{ marginTop: '-32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <button style={{ background: '#1c6203', padding: '16px', borderRadius: '16px', boxShadow: '0 8px 20px rgba(28,98,3,0.25)', color: 'white', border: 'none', cursor: 'pointer', transition: 'transform 0.3s' }}
              onClick={() => { setShowAddTrailModal(true); showToast('Add a new trail!'); }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
              <Plus />
            </button>
            <span style={{ fontSize: '12px', fontWeight: '600', color: '#1c6203' }}>Add Trail</span>
          </div>

          {/* Ranks moved into Profile page; footer button removed */}

          <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', padding: '8px 12px', background: 'none', border: 'none', cursor: 'pointer', color: activeTab === 'notifications' ? '#ff751f' : '#64748b', position: 'relative' }}
            onClick={() => { setActiveTab('notifications'); setNotificationCount(0); setSelectedNotification(null); }}>
            <Bell /><span style={{ fontSize: '12px', fontWeight: '600' }}>Alerts</span>
            {notificationCount > 0 && (
              <div style={{ position: 'absolute', top: '6px', right: '6px', background: '#ef4444', color: 'white', borderRadius: '50%', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold' }}>{notificationCount}</div>
            )}
          </button>

          <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', padding: '8px 12px', background: 'none', border: 'none', cursor: 'pointer', color: activeTab === 'profile' ? '#ff751f' : '#64748b' }}
            onClick={() => setActiveTab('profile')}>
            <User /><span style={{ fontSize: '12px', fontWeight: '600' }}>Profile</span>
          </button>
        </div>
      </nav>

      <div style={{ textAlign: 'center', padding: '24px 16px', color: '#94a3b8', fontSize: '12px' }}>
        © 2026 PeakFinder. Stay safe, respect nature, and happy trails!
      </div>
    </div>
  );
}
