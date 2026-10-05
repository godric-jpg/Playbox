import { useState } from 'react';

export default function ProductImage({ src, emoji = '🧸', alt, className = '' }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`grid place-items-center bg-[#eaf4ff] ${className}`}
      >
        {emoji}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}