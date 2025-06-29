import {
  Calculator,
  Microscope,
  Book,
  CheckCircle,
  House,
  Monitor,
  Heart,
  Users,
  Award,
  Clock,
  Video,
  FileText,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/common/SectionHeader";
import IconContainer from "@/components/common/IconContainer";
import { COMMON_STYLES } from "@/constants/styles";

const subjects = [
  {
    icon: Calculator,
    title: "Mathematics with Wonder",
    features: [
      "Visual storytelling with numbers",
      "Real-world connections that spark curiosity",
      "Confidence-building through gentle challenge",
    ],
  },
  {
    icon: Microscope,
    title: "Science as Discovery",
    features: [
      "Hands-on experiments that amaze",
      "Nature-connected learning",
      'Questions that lead to "aha!" moments',
    ],
  },
  {
    icon: Book,
    title: "English as Expression",
    features: [
      "Stories that come alive",
      "Writing that flows from the heart",
      "Reading adventures we'll treasure together",
    ],
  },
];

const learningOptions = [
  {
    icon: House,
    title: "In Your Home",
    isRecommended: true,
    features: [
      {
        icon: Heart,
        text: "Personal connection in your child's comfort zone",
        isFilled: true,
      },
      {
        icon: Users,
        text: "Hands-on learning with real materials",
        isFilled: false,
      },
      {
        icon: Award,
        text: "Fewer distractions, deeper focus",
        isFilled: false,
      },
    ],
  },
  {
    icon: Monitor,
    title: "Virtual Classroom",
    features: [
      {
        icon: Clock,
        text: "Flexible scheduling for busy families",
        isFilled: false,
      },
      {
        icon: Video,
        text: "Interactive tools that make learning fun",
        isFilled: false,
      },
      {
        icon: FileText,
        text: "Recordings available for review and reinforcement",
        isFilled: false,
      },
    ],
  },
];

export default function LearningApproachSection() {
  return (
    <section
      id="approach"
      className={`w-full ${COMMON_STYLES.sectionPadding} bg-gradient-to-b from-cream-100 to-amber-50 relative`}
    >
      <div className={`${COMMON_STYLES.containerBase} relative`}>
        <SectionHeader
          title="Learning that feels like"
          subtitle="coming home"
          description="Every child learns differently, and I celebrate those differences. Here's how we'll create magic together in Math, Science, and English."
        />

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {subjects.map((subject, index) => (
            <Card key={index} className={COMMON_STYLES.cardBase}>
              <CardContent className="p-8">
                <IconContainer className="mb-6">
                  <subject.icon className="h-8 w-8 text-amber-700" />
                </IconContainer>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">
                  {subject.title}
                </h3>
                <ul className="space-y-3 text-amber-700">
                  {subject.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Options */}
        <div className="mt-20 pt-16 border-t border-amber-200">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <h3 className="text-2xl font-light sm:text-3xl text-amber-900">
              How we&apos;ll{" "}
              <span
                className={`${COMMON_STYLES.serifFont} text-amber-700`}
                style={{ fontFamily: "serif" }}
              >
                learn together
              </span>
            </h3>
            <p className="max-w-2xl text-amber-700 leading-relaxed">
              Whether in the comfort of your home or through our virtual
              classroom, every session is designed around your child&apos;s
              unique needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {learningOptions.map((option, index) => (
              <Card
                key={index}
                className={
                  option.isRecommended
                    ? COMMON_STYLES.cardFeatured
                    : COMMON_STYLES.cardBase
                }
              >
                {option.isRecommended && (
                  <div className="absolute top-4 right-4 bg-amber-600 text-cream-50 px-3 py-1 text-xs font-medium rounded-full">
                    RECOMMENDED
                  </div>
                )}
                <CardContent className="p-8">
                  <IconContainer className="mb-6">
                    <option.icon className="h-8 w-8 text-amber-700" />
                  </IconContainer>
                  <h4 className="text-xl font-semibold text-amber-900 mb-4">
                    {option.title}
                  </h4>
                  <div className="space-y-3 text-amber-700">
                    {option.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <feature.icon
                          className={`h-5 w-5 text-amber-600 mt-0.5 ${
                            feature.isFilled ? "fill-amber-600" : ""
                          }`}
                        />
                        <span>
                          <strong>{feature.text.split(" ")[0]}</strong>{" "}
                          {feature.text.split(" ").slice(1).join(" ")}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
