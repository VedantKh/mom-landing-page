import Link from "next/link";
import Logo from "@/components/common/Logo";
import { COMMON_STYLES } from "@/constants/styles";

export default function Footer() {
  return (
    <footer
      className={`w-full border-t border-amber-200 py-8 bg-gradient-to-b from-cream-100 to-amber-100`}
    >
      <div
        className={`${COMMON_STYLES.containerBase} flex flex-col items-center justify-between gap-4 md:flex-row`}
      >
        <div className="flex flex-col items-center md:items-start gap-2">
          <Logo size="small" />
          <p className="text-center text-sm text-amber-700 md:text-left">
            © {new Date().getFullYear()} • Made with love for every child&apos;s
            journey
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="#"
            className="text-sm text-amber-700 hover:text-amber-600 transition-colors"
          >
            Privacy & Care
          </Link>
          <Link
            href="#"
            className="text-sm text-amber-700 hover:text-amber-600 transition-colors"
          >
            Learning Agreement
          </Link>
        </div>
      </div>
    </footer>
  );
}
