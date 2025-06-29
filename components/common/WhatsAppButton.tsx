import Link from "next/link";
import { WHATSAPP_LINK, COMMON_STYLES } from "@/constants/styles";

interface WhatsAppButtonProps {
  children: React.ReactNode;
  size?: "small" | "large";
  className?: string;
}

export default function WhatsAppButton({
  children,
  size = "large",
  className = "",
}: WhatsAppButtonProps) {
  const sizeClasses = size === "large" ? "px-8 py-3 text-lg" : "px-6 py-3";

  return (
    <Link
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${COMMON_STYLES.buttonPrimary} ${sizeClasses} ${className}`}
    >
      {children}
    </Link>
  );
}
