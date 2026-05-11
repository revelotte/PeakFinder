import React from 'react';

export default function MountainLogo({ size = 64, alt = 'PeakFinder' }) {
  // Use SVG asset with transparent background so the logo appears white
  const src = '/mountain-logo.svg';
  return (
    <img src={src} alt={alt} width={size} height={size} style={{ display: 'block', objectFit: 'contain' }} />
  );
}
