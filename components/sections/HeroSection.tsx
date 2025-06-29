import Image from "next/image";
import { Heart, Users } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { COMMON_STYLES } from "@/constants/styles";

export default function HeroSection() {
  return (
    <section
      className={`w-full ${COMMON_STYLES.sectionPadding} relative overflow-hidden bg-gradient-to-b from-amber-50 to-cream-100`}
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl translate-x-1/2"></div>

      <div className={`${COMMON_STYLES.containerBase} relative`}>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl font-light leading-tight sm:text-5xl md:text-6xl lg:text-7xl text-amber-900">
              Making your child&apos;s potential
              <span
                className={`block ${COMMON_STYLES.serifFont} text-amber-700`}
                style={{ fontFamily: "serif" }}
              >
                bloom
              </span>
            </h1>
            <p className="max-w-[600px] text-amber-800 text-lg md:text-xl leading-relaxed">
              I&apos;m Shivani, and I love teaching children. As a mother
              myself, I understand the hopes and dreams parents have for their
              little ones, and love joining each family on their journey to get
              there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton>Start Our Journey Together</WhatsAppButton>
            </div>
            <div className="flex items-center gap-6 pt-4 pl-2">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-amber-600 fill-amber-600" />
                <span className="text-sm text-amber-700">
                  15+ Years of Love & Learning
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-amber-600" />
                <span className="text-sm text-amber-700">
                  Tailored to your child&apos;s needs
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/10 to-transparent z-10"></div>
              <Image
                src="/assets/hero.png"
                alt="Shivani teaching with warmth and care"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
