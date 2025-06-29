import { Star } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { testimonials } from "@/data/testimonials";
import { COMMON_STYLES } from "@/constants/styles";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className={`w-full ${COMMON_STYLES.sectionPadding} bg-gradient-to-b from-amber-50 to-cream-100 relative`}
    >
      <div className={`${COMMON_STYLES.containerBase} relative`}>
        <SectionHeader
          title="What families are saying about our"
          subtitle="learning journey together"
        />

        <div className="grid gap-8 md:grid-cols-3 relative max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`${COMMON_STYLES.cardBase} p-8`}>
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-amber-800 mb-8 italic text-lg leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center gap-4 mt-auto border-t border-amber-200 pt-6">
                <div className="rounded-full bg-amber-200 h-12 w-12 flex items-center justify-center">
                  <span className="font-semibold text-amber-800 text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-amber-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-amber-600">
                    {testimonial.relation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
