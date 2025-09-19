import React from "react";
import { SiWhatsapp } from "react-icons/si";

type WaButtonProps = {
  /** Nomor tanpa tanda +, contoh: 6281234567890 */
  phone?: string;
  /** Pesan default yang akan diisi ke WhatsApp */
  message?: string;
  /** Posisi tombol */
  position?: "br" | "bl" | "tr" | "tl";
  /** Ukuran tombol */
  size?: "sm" | "md" | "lg";
  /** Tooltip kecil di atas tombol */
  tooltip?: string;
  /** Tambahan className jika perlu override */
  className?: string;
};

const posClass: Record<NonNullable<WaButtonProps["position"]>, string> = {
  br: "right-[calc(1.5rem+env(safe-area-inset-right))] bottom-[calc(1.5rem+env(safe-area-inset-bottom))]",
  bl: "left-[calc(1.5rem+env(safe-area-inset-left))] bottom-[calc(1.5rem+env(safe-area-inset-bottom))]",
  tr: "right-[calc(1.5rem+env(safe-area-inset-right))] top-[calc(1.5rem+env(safe-area-inset-top))]",
  tl: "left-[calc(1.5rem+env(safe-area-inset-left))] top-[calc(1.5rem+env(safe-area-inset-top))]",
};

const sizeClass: Record<NonNullable<WaButtonProps["size"]>, string> = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

const iconSize: Record<NonNullable<WaButtonProps["size"]>, string> = {
  sm: "w-6 h-6",
  md: "w-7 h-7",
  lg: "w-7 h-7",
};

function WaButton({
  phone = "6281234567890",
  message = "Halo, saya tertarik dengan layanan Anda.",
  position = "br",
  size = "lg",
  tooltip = "Chat via WhatsApp",
  className = "",
}: WaButtonProps) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className={[
        "fixed z-50 print:hidden group",
        posClass[position],
        className,
      ].join(" ")}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Buka WhatsApp untuk konsultasi"
        className={[
          "flex items-center justify-center rounded-full text-white",
          "bg-green-500 hover:bg-green-600",
          sizeClass[size],
          "shadow-lg shadow-green-500/20 ring-1 ring-inset ring-white/20",
          "transition-all motion-safe:hover:scale-110",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
        ].join(" ")}
      >
        <SiWhatsapp className={iconSize[size]} aria-hidden="true" />
      </a>

      {/* Tooltip (opsional) */}
      {tooltip && (
        <span
          role="tooltip"
          className={[
            "pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full",
            "rounded-full bg-neutral-900/90 text-white text-xs px-2 py-1",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
            "whitespace-nowrap",
          ].join(" ")}
        >
          {tooltip}
        </span>
      )}
    </div>
  );
}

export default WaButton;