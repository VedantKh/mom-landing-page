import { COMMON_STYLES } from "@/constants/styles";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
}: SectionHeaderProps) {
  const containerClass = centered
    ? "flex flex-col items-center justify-center space-y-6 text-center mb-16"
    : "space-y-6 mb-12";

  return (
    <div className={containerClass}>
      <h2 className="text-3xl font-light sm:text-4xl md:text-5xl text-amber-900 max-w-3xl leading-tight">
        {title}
        {subtitle && (
          <span
            className={`${COMMON_STYLES.serifFont} text-amber-700 block`}
            style={{ fontFamily: "serif" }}
          >
            {subtitle}
          </span>
        )}
      </h2>
      <div className={COMMON_STYLES.sectionDivider}></div>
      {description && (
        <p className="max-w-2xl text-amber-700 text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
