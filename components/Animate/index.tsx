"use client";
import React from "react";

const AnimatedStreamingCurve: React.FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      className={className}
      width="221"
      height="67"
      viewBox="0 0 221 67"
      fill="none"
      role="img"
      aria-label="Animated streaming path"
    >
      <defs>
        {/* Gradasi sesuai contoh */}
        <linearGradient
          id="streamGradient"
          x1="57.718354603566695"
          y1="210.01154110126663"
          x2="88.1269733766967"
          y2="140.8861576311756"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3291FF" stopOpacity="0" />
          <stop offset="0.5" stopColor="#3291FF" />
          <stop offset="1" stopColor="#61DAFB" stopOpacity="0" />
        </linearGradient>

        {/* Glow halus */}
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* 
        pathLength="1" memudahkan: dasharray & dashoffset pakai unit 0..1 
        jadi tidak perlu hitung getTotalLength() via JS.
      */}
      <path
        d="M220.5 1.5H178C177.448 1.5 177 1.94772 177 2.5V32.5C177 33.0523 176.552 33.5 176 33.5H130C129.448 33.5 129 33.9477 129 34.5V58C129 62.1421 125.642 65.5 121.5 65.5H1"
        stroke="url(#streamGradient)"
        strokeWidth="1.2630650689534377"
        strokeLinecap="round"
        pathLength={1}
        // Tailwind untuk ukuran responsif opsional
        className="origin-left"
        style={{
          filter: "url(#softGlow)",
          strokeDasharray: 1,
          strokeDashoffset: 1,
          animation:
            // 1) gambar garis sekali (0.9s)
            "draw 0.9s ease-out forwards, " +
            // 2) lalu looping pulse halus
            "pulse 1.8s 0.9s ease-in-out infinite",
        }}
      />
      <style jsx>{`
        @keyframes draw {
          0% {
            stroke-dashoffset: 1;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @keyframes pulse {
          0% {
            opacity: 1;
            filter: url(#softGlow) drop-shadow(0 0 0px rgba(50, 145, 255, 0.0));
          }
          50% {
            opacity: 0.9;
            filter: url(#softGlow) drop-shadow(0 0 6px rgba(50, 145, 255, 0.6));
          }
          100% {
            opacity: 1;
            filter: url(#softGlow) drop-shadow(0 0 0px rgba(50, 145, 255, 0.0));
          }
        }
      `}</style>
    </svg>
  );
};

export default AnimatedStreamingCurve;
