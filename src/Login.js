import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email.trim()) return setError('Please enter your email');
    if (!password) return setError('Please enter your password');

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onLogin({ name: email.split('@')[0] || 'User', email });
    }, 700);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(180deg,#0f172a,#0b3b12)',
      padding: 24
    }}>
      <div style={{ width: '100%', maxWidth: 480 }}>

        {/* CARD */}
        <div style={{
          background: '#f8fafc',
          borderRadius: 28,
          padding: '48px 36px 40px',
          boxShadow: '0 30px 70px rgba(0,0,0,0.25)'
        }}>

          {/* LOGO + TITLE — side by side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
            <img
              src="/mountain-logo.png"
              alt="logo"
              style={{ width: 95, height: 95, objectFit: 'contain', display: 'block' }}
            />
            <div>
              <h1 style={{
                fontSize: 34,
                fontWeight: 800,
                color: '#065f46',
                margin: 0,
                lineHeight: 1.1
              }}>
                Welcome back
              </h1>
              <p style={{
                marginTop: 6,
                fontSize: 15,
                color: '#065f46',
                margin: '6px 0 0'
              }}>
                Sign in to continue
              </p>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>

            <div>
              <label style={{ fontSize: 14, color: '#065f46', fontWeight: 600 }}>
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={{
                  width: '100%',
                  marginTop: 8,
                  padding: '18px 20px',
                  borderRadius: 24,
                  border: 'none',
                  fontSize: 16,
                  background: '#e5e7eb',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: 14, color: '#065f46', fontWeight: 600 }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  marginTop: 8,
                  padding: '18px 20px',
                  borderRadius: 24,
                  border: 'none',
                  fontSize: 16,
                  background: '#e5e7eb',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {error && (
              <div style={{ color: '#ef4444', fontSize: 13 }}>
                {error}
              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={submitting}
              style={{
                marginTop: 12,
                height: 58,
                borderRadius: 24,
                background: 'linear-gradient(135deg,#ff6a00,#ff8c42)',
                color: '#fff',
                fontSize: 18,
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {submitting ? 'Signing in...' : 'Sign In'}
            </button>

            <p style={{
              textAlign: 'center',
              fontSize: 14,
              color: '#94a3b8',
              marginTop: 6
            }}>
              Demo login — any credentials will work
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}