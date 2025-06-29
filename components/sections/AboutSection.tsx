import Image from "next/image";
import { COMMON_STYLES } from "@/constants/styles";

export default function AboutSection() {
  return (
    <section
      id="about"
      className={`w-full ${COMMON_STYLES.sectionPadding} bg-gradient-to-b from-white to-amber-50 relative`}
    >
      <div className={`${COMMON_STYLES.containerBase} relative`}>
        <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/assets/about.png"
                alt="Shivani in her natural teaching environment"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl font-light sm:text-4xl text-amber-900 leading-tight">
              Hi, I&apos;m
              <span
                className={`${COMMON_STYLES.serifFont} text-amber-700 block`}
                style={{ fontFamily: "serif" }}
              >
                Shivani Khanna
              </span>
            </h2>
            <div className={COMMON_STYLES.sectionDivider}></div>

            <div className="space-y-4 text-amber-800 leading-relaxed">
              <p className="text-lg">
                Teaching isn&apos;t just my profession—it&apos;s my calling. For
                the past 15 years, I&apos;ve been blessed to guide young
                learners on their educational journey, and each day brings new
                joy as I watch their confidence blossom.
              </p>
              <p>
                My approach is simple: every child is unique, brilliant, and
                deserving of an education that honors their individual learning
                style. Whether we&apos;re exploring the wonders of mathematics,
                diving into exciting scientific discoveries, or crafting
                beautiful stories together, I believe learning should feel
                nurturing and empowering.
              </p>
              <p>
                As a mother myself, I understand the hopes and dreams parents
                have for their children. My goal is to be a partner in your
                child&apos;s success—creating a warm, supportive space where
                they can truly thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
