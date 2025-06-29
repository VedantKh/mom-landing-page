import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageSquare,
  Star,
  Heart,
  Users,
  Award,
  House,
  Monitor,
  Calculator,
  Microscope,
  Book,
  CheckCircle,
  Mail,
  Clock,
  Video,
  FileText,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-amber-50 via-cream-50 to-amber-50">
      <header className="sticky top-0 z-40 border-b border-amber-200 bg-cream-50/95 backdrop-blur supports-[backdrop-filter]:bg-cream-50/90">
        <div className="container max-w-7xl mx-auto flex h-20 items-center justify-between py-4 px-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <span
                className="text-2xl font-light italic text-amber-700"
                style={{ fontFamily: "serif" }}
              >
                Shivani&apos;s
              </span>
              <span className="text-xl font-bold tracking-wide text-amber-900 -mt-1">
                TUTORING
              </span>
              <div className="w-16 h-px bg-amber-600 mt-1"></div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-amber-800 font-medium">
            <Link
              href="#about"
              className="text-sm hover:text-amber-600 transition-colors"
            >
              Meet Shivani
            </Link>
            <Link
              href="#approach"
              className="text-sm hover:text-amber-600 transition-colors"
            >
              My Approach
            </Link>
            <Link
              href="#testimonials"
              className="text-sm hover:text-amber-600 transition-colors"
            >
              Kind Words
            </Link>
            <Link
              href="#contact"
              className="text-sm hover:text-amber-600 transition-colors"
            >
              Let&apos;s Chat
            </Link>
          </nav>
          <Link
            href="https://wa.me/971505964988?text=Hi Shivani, I'd like to book a consultation for my child."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-700 hover:bg-amber-800 text-cream-50 rounded-full px-6 py-3 font-medium inline-flex items-center justify-center transition-colors"
          >
            Book a Chat
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-amber-50 to-cream-100">
          {/* Subtle decorative elements */}
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -translate-x-1/2"></div>
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl translate-x-1/2"></div>

          <div className="container max-w-7xl mx-auto px-4 md:px-6 relative">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl font-light leading-tight sm:text-5xl md:text-6xl lg:text-7xl text-amber-900">
                  Making your child&apos;s potential
                  <span
                    className="block italic font-light text-amber-700"
                    style={{ fontFamily: "serif" }}
                  >
                    bloom
                  </span>
                </h1>
                <p className="max-w-[600px] text-amber-800 text-lg md:text-xl leading-relaxed">
                  I&apos;m Shivani, and I love teaching children. As a mother
                  myself, I understand the hopes and dreams parents have for
                  their little ones, and love joining each family on their
                  journey to get there.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://wa.me/971505964988?text=Hi Shivani, I'd like to book a consultation for my child."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-700 hover:bg-amber-800 text-cream-50 rounded-full px-8 py-3 text-lg font-medium inline-flex items-center justify-center transition-colors"
                  >
                    Start Our Journey Together
                  </Link>
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

        {/* About Section */}
        <section
          id="about"
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-cream-100 to-amber-50 relative"
        >
          <div className="container max-w-7xl mx-auto px-4 md:px-6 relative">
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
                    className="italic font-light text-amber-700 block"
                    style={{ fontFamily: "serif" }}
                  >
                    Shivani Khanna
                  </span>
                </h2>
                <div className="w-20 h-0.5 bg-amber-600"></div>

                <div className="space-y-4 text-amber-800 leading-relaxed">
                  <p className="text-lg">
                    Teaching isn&apos;t just my profession—it&apos;s my calling.
                    For the past 15 years, I&apos;ve been blessed to guide young
                    learners on their educational journey, and each day brings
                    new joy as I watch their confidence blossom.
                  </p>
                  <p>
                    My approach is simple: every child is unique, brilliant, and
                    deserving of an education that honors their individual
                    learning style. Whether we&apos;re exploring the wonders of
                    mathematics, diving into exciting scientific discoveries, or
                    crafting beautiful stories together, I believe learning
                    should feel nurturing and empowering.
                  </p>
                  <p>
                    As a mother myself, I understand the hopes and dreams
                    parents have for their children. My goal is to be a partner
                    in your child&apos;s success—creating a warm, supportive
                    space where they can truly thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="w-full py-16 md:py-24 bg-gradient-to-b from-amber-50 to-cream-100 relative"
        >
          <div className="container max-w-7xl mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <h2 className="text-3xl font-light sm:text-4xl md:text-5xl text-amber-900 max-w-3xl leading-tight">
                What families are saying about our
                <span
                  className="italic font-light text-amber-700 block"
                  style={{ fontFamily: "serif" }}
                >
                  learning journey together
                </span>
              </h2>
              <div className="w-20 h-0.5 bg-amber-600"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-3 relative max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-amber-100 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 relative"
                >
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

        {/* Learning Approach Section */}
        <section
          id="approach"
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-cream-100 to-amber-50 relative"
        >
          <div className="container max-w-7xl mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <h2 className="text-3xl font-light sm:text-4xl text-amber-900 max-w-3xl leading-tight">
                Learning that feels like
                <span
                  className="italic font-light text-amber-700 block"
                  style={{ fontFamily: "serif" }}
                >
                  coming home
                </span>
              </h2>
              <p className="max-w-2xl text-amber-700 text-lg leading-relaxed">
                Every child learns differently, and I celebrate those
                differences. Here&apos;s how we&apos;ll create magic together in
                Math, Science, and English.
              </p>
              <div className="w-20 h-0.5 bg-amber-600"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              <Card className="bg-white border-2 border-amber-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden rounded-3xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                    <Calculator className="h-8 w-8 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-4">
                    Mathematics with Wonder
                  </h3>
                  <ul className="space-y-3 text-amber-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Visual storytelling with numbers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Real-world connections that spark curiosity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Confidence-building through gentle challenge</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-amber-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden rounded-3xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                    <Microscope className="h-8 w-8 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-4">
                    Science as Discovery
                  </h3>
                  <ul className="space-y-3 text-amber-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Hands-on experiments that amaze</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Nature-connected learning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>
                        Questions that lead to &quot;aha!&quot; moments
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-amber-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden rounded-3xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                    <Book className="h-8 w-8 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-4">
                    English as Expression
                  </h3>
                  <ul className="space-y-3 text-amber-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Stories that come alive</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>Writing that flows from the heart</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <span>
                        Reading adventures we&apos;ll treasure together
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Learning Options */}
            <div className="mt-20 pt-16 border-t border-amber-200">
              <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
                <h3 className="text-2xl font-light sm:text-3xl text-amber-900">
                  How we&apos;ll{" "}
                  <span
                    className="italic font-light text-amber-700"
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
                <Card className="bg-white border-2 border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden rounded-3xl relative">
                  <div className="absolute top-4 right-4 bg-amber-600 text-cream-50 px-3 py-1 text-xs font-medium rounded-full">
                    RECOMMENDED
                  </div>
                  <CardContent className="p-8">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                      <House className="h-8 w-8 text-amber-700" />
                    </div>
                    <h4 className="text-xl font-semibold text-amber-900 mb-4">
                      In Your Home
                    </h4>
                    <div className="space-y-3 text-amber-700">
                      <div className="flex items-start gap-3">
                        <Heart className="h-5 w-5 text-amber-600 mt-0.5 fill-amber-600" />
                        <span>
                          <strong>Personal connection</strong> in your
                          child&apos;s comfort zone
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-amber-600 mt-0.5" />
                        <span>
                          <strong>Hands-on learning</strong> with real materials
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-amber-600 mt-0.5" />
                        <span>
                          <strong>Fewer distractions,</strong> deeper focus
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-2 border-amber-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden rounded-3xl">
                  <CardContent className="p-8">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                      <Monitor className="h-8 w-8 text-amber-700" />
                    </div>
                    <h4 className="text-xl font-semibold text-amber-900 mb-4">
                      Virtual Classroom
                    </h4>
                    <div className="space-y-3 text-amber-700">
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-amber-600 mt-0.5" />
                        <span>
                          <strong>Flexible scheduling</strong> for busy families
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Video className="h-5 w-5 text-amber-600 mt-0.5" />
                        <span>
                          <strong>Interactive tools</strong> that make learning
                          fun
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-amber-600 mt-0.5" />
                        <span>
                          <strong>Recordings available</strong> for review and
                          reinforcement
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-amber-50 to-cream-100 relative"
        >
          <div className="container max-w-7xl mx-auto px-4 md:px-6 relative">
            <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="space-y-8">
                <h2 className="text-3xl font-light sm:text-4xl text-amber-900 leading-tight">
                  Ready to discover your child&apos;s
                  <span
                    className="italic font-light text-amber-700 block"
                    style={{ fontFamily: "serif" }}
                  >
                    unique brilliance?
                  </span>
                </h2>
                <div className="w-20 h-0.5 bg-amber-600"></div>
                <p className="text-amber-800 text-lg leading-relaxed">
                  I&apos;d love to meet you and your child. Let&apos;s have a
                  conversation about their interests and how we can make
                  learning a process they&apos;ll cherish.
                </p>
                <Link
                  href="https://wa.me/971505964988?text=Hi Shivani, I'd like to book a consultation for my child."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-700 hover:bg-amber-800 text-cream-50 rounded-full px-8 py-3 text-lg font-medium inline-flex items-center justify-center transition-colors w-fit"
                >
                  Book a Chat
                </Link>
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
      </main>

      <footer className="w-full border-t border-amber-200 py-8 bg-gradient-to-b from-cream-100 to-amber-100">
        <div className="container max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <span
                className="text-lg italic text-amber-700"
                style={{ fontFamily: "serif" }}
              >
                Shivani&apos;s
              </span>
              <span className="text-sm font-bold text-amber-900">TUTORING</span>
            </div>
            <p className="text-center text-sm text-amber-700 md:text-left">
              © {new Date().getFullYear()} • Made with love for every
              child&apos;s journey
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
    </div>
  );
}

const testimonials = [
  {
    name: "Sarah Thompson",
    relation: "Parent of 3rd grader",
    content:
      "Shivani has been a blessing for our family. My son struggled with math anxiety, but after just a few sessions, he's approaching problems with confidence. Her patience and teaching methods are exceptional.",
  },
  {
    name: "Michael Rodriguez",
    relation: "Parent of 6th grader",
    content:
      "Our daughter's science grades have improved dramatically since working with Shivani. She makes complex concepts easy to understand and keeps learning fun and engaging.",
  },
  {
    name: "Vedant Khanna",
    relation: "Son of Shivani Khanna",
    content:
      "I have been a student of Shivani Khanna for 18 years. She has been the best teacher I have ever had because no one else cares as much about her students as she does. I am now studying Math at Stanford University.",
  },
];
