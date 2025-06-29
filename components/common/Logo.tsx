interface LogoProps {
  size?: "small" | "large";
}

export default function Logo({ size = "large" }: LogoProps) {
  const titleSize = size === "large" ? "text-2xl" : "text-lg";
  const subtitleSize = size === "large" ? "text-xl" : "text-sm";
  const dividerWidth = size === "large" ? "w-16" : "w-12";

  return (
    <div className="flex flex-col items-center">
      <span
        className={`${titleSize} font-light italic text-amber-700`}
        style={{ fontFamily: "serif" }}
      >
        Shivani&apos;s
      </span>
      <span
        className={`${subtitleSize} font-bold tracking-wide text-amber-900 -mt-1`}
      >
        TUTORING
      </span>
      <div className={`${dividerWidth} h-px bg-amber-600 mt-1`}></div>
    </div>
  );
}
