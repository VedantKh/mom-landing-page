import Link from "next/link";
import Logo from "@/components/common/Logo";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const navigationItems = [
  { href: "#about", label: "About me" },
  { href: "#approach", label: "My Approach" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact me" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-amber-200 bg-white/50 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="container max-w-7xl mx-auto flex h-20 items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center gap-3">
          <Logo size="large" />
        </div>

        <nav className="hidden md:flex items-center gap-8 text-amber-800 font-medium">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm hover:text-amber-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <WhatsAppButton size="small">Book a Chat</WhatsAppButton>
      </div>
    </header>
  );
}
