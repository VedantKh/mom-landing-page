import Image from "next/image";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { COMMON_STYLES } from "@/constants/styles";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className={`w-full ${COMMON_STYLES.sectionPadding} bg-gradient-to-b from-amber-50 to-white relative`}
    >
      <div className={`${COMMON_STYLES.containerBase} relative`}>
        <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-3xl font-light sm:text-4xl text-amber-900 leading-tight">
              Ready to discover your child&apos;s
              <span
                className={`${COMMON_STYLES.serifFont} text-amber-700 block`}
                style={{ fontFamily: "serif" }}
              >
                unique brilliance?
              </span>
            </h2>
            <div className={COMMON_STYLES.sectionDivider}></div>
            <p className="text-amber-800 text-lg leading-relaxed">
              I&apos;d love to meet you and your child. Let&apos;s have a
              conversation about their interests and how we can make learning a
              process they&apos;ll cherish.
            </p>
            <WhatsAppButton className="w-fit">Book a Chat</WhatsAppButton>
          </div>

          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/10 to-transparent z-10"></div>
              <Image
                src="/assets/contact.png"
                alt="Free consultation with Shivani - A warm conversation about your child's learning journey"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
