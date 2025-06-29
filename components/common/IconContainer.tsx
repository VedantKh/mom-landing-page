import { ReactNode } from "react";
import { COMMON_STYLES } from "@/constants/styles";

interface IconContainerProps {
  children: ReactNode;
  className?: string;
}

export default function IconContainer({
  children,
  className = "",
}: IconContainerProps) {
  return (
    <div className={`${COMMON_STYLES.iconContainer} ${className}`}>
      {children}
    </div>
  );
}
