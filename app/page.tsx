import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  GraduationCap,
  MessageSquare,
  Star,
  Heart,
  Users,
  Award,
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
                Shivani's
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
              Let's Chat
            </Link>
          </nav>
          <Button className="bg-amber-700 hover:bg-amber-800 text-cream-50 rounded-full px-6 font-medium">
            Book a Chat
          </Button>
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
                <div className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium border border-amber-200">
                  Personal Learning Journey • Grades K-8
                </div>
                <h1 className="text-4xl font-light leading-tight sm:text-5xl md:text-6xl lg:text-7xl text-amber-900">
                   Making your child's potential
                  <span
                    className="block italic font-light text-amber-700"
                    style={{ fontFamily: "serif" }}
                  >
                   bloom
                  </span>
                </h1>
                <p className="max-w-[600px] text-amber-800 text-lg md:text-xl leading-relaxed">
                  I'm Shivani, and I love teaching children. As a mother myself, I understand 
                  the hopes and dreams parents have for their little ones, and love joining 
                  each family on their journey to get there.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-amber-700 hover:bg-amber-800 text-cream-50 rounded-full px-8 py-3 text-lg font-medium">
                    Start Our Journey Together
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent rounded-full px-8 py-3 text-lg font-medium"
                  >
                    Learn About My Story
                  </Button>
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
                      Tailored to your child's needs
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-cream-100">
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/10 to-transparent z-10"></div>
                  <Image
                    src="/placeholder.svg?height=600&width=500"
                    alt="Shivani teaching with warmth and care"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-cream-50 p-4 rounded-2xl shadow-lg border border-amber-100">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    <span className="text-sm font-medium text-amber-800">
                      Trusted by families
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-cream-50 p-4 rounded-2xl shadow-lg border border-amber-100">
                  <div className="text-sm font-medium text-amber-800">
                    British Council Certified
                  </div>
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
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=500&width=400"
                    alt="Shivani in her natural teaching environment"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Personal touch elements */}
                <div className="absolute -top-6 -left-6 bg-amber-100 p-3 rounded-full border border-amber-200">
                  <BookOpen className="h-6 w-6 text-amber-700" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-amber-200 p-3 rounded-full border border-amber-300">
                  <Award className="h-6 w-6 text-amber-800" />
                </div>
              </div>

              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium border border-amber-200">
                  A Little About Me
                </div>
                <h2 className="text-3xl font-light sm:text-4xl text-amber-900 leading-tight">
                  Hi, I'm
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
                    Teaching isn't just my profession—it's my calling. For the
                    past 15 years, I've been blessed to guide young learners on
                    their educational journey, and each day brings new joy as I
                    watch their confidence blossom.
                  </p>
                  <p>
                    My approach is simple: every child is unique, brilliant, and
                    deserving of an education that honors their individual
                    learning style. Whether we're exploring the wonders of
                    mathematics, diving into exciting scientific discoveries, or
                    crafting beautiful stories together, I believe learning
                    should feel nurturing and empowering.
                  </p>
                  <p>
                    As a mother myself, I understand the hopes and dreams
                    parents have for their children. My goal is to be a partner
                    in your child's success—creating a warm, supportive space
                    where they can truly thrive.
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
              <div className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium border border-amber-200">
                Heartfelt Words
              </div>
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
                    "{testimonial.content}"
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
              <div className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium border border-amber-200">
                My Teaching Philosophy
              </div>
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
                differences. Here's how we'll create magic together in Math,
                Science, and English.
              </p>
              <div className="w-20 h-0.5 bg-amber-600"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              <Card className="bg-white border-2 border-amber-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden rounded-3xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-amber-100 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-4">
                    Mathematics with Wonder
                  </h3>
                  <p className="text-amber-700 mb-6 leading-relaxed">
                    We turn numbers into stories and problems into adventures.
                    Math becomes a beautiful language your child will love to
                    speak.
                  </p>
                  <ul className="space-y-3 text-amber-700">
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-amber-100 p-1 mt-1">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      </div>
                      <span>Visual storytelling with numbers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-amber-100 p-1 mt-1">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      </div>
                      <span>Real-world connections that spark curiosity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-amber-100 p-1 mt-1">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      </div>
                      <span>Confidence-building through gentle challenge</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-amber-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden rounded-3xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-6 bg-amber-100 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-4">
                    Science as Discovery
                  </h3>
                  <p className="text-amber-700 mb-6 leading-relaxed">
                    Every question is a doorway to wonder. We explore the
                    natural world with curiosity and joy, making science feel
                    like the greatest adventure.
                  </p>
                  <ul className="space-y-3 text-amber-700">
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-amber-100 p-1 mt-1">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      </div>
                      <span>Hands-on experiments that amaze</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-amber-100 p-1 mt-1">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      </div>
                      <span>Nature-connected learning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-amber-100 p-1 mt-1">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      </div>
                      <span>Questions that lead to "aha!" moments</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-amber-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden rounded-3xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                      <div className="w-4 h-2 bg-amber-100 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-4">
                    English as Expression
                  </h3>
                  <p className="text-amber-700 mb-6 leading-relaxed">
                    Words are magic, and every child has their own voice waiting
                    to be heard. We'll unlock the power of language together.
                  </p>
                  <ul className="space-y-3 text-amber-700">
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-amber-100 p-1 mt-1">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      </div>
                      <span>Stories that come alive</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-amber-100 p-1 mt-1">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      </div>
                      <span>Writing that flows from the heart</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-amber-100 p-1 mt-1">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      </div>
                      <span>Reading adventures we'll treasure together</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Learning Options */}
            <div className="mt-20 pt-16 border-t border-amber-200">
              <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
                <h3 className="text-2xl font-light sm:text-3xl text-amber-900">
                  How we'll
                  <span
                    className="italic font-light text-amber-700"
                    style={{ fontFamily: "serif" }}
                  >
                    learn together
                  </span>
                </h3>
                <p className="max-w-2xl text-amber-700 leading-relaxed">
                  Whether in the comfort of your home or through our virtual
                  classroom, every session is designed around your child's
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
                      <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-amber-100 rounded-sm"></div>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-amber-900 mb-4">
                      In Your Home
                    </h4>
                    <p className="text-amber-700 mb-6 leading-relaxed">
                      There's something magical about learning in a familiar
                      space. I come to you, bringing warmth, patience, and all
                      the tools we need to make learning wonderful.
                    </p>
                    <div className="space-y-3 text-amber-700">
                      <div className="flex items-start gap-3">
                        <Heart className="h-5 w-5 text-amber-600 mt-0.5 fill-amber-600" />
                        <span>
                          <strong>Personal connection</strong> in your child's
                          comfort zone
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
                      <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                        <div className="w-3 h-3 bg-amber-100 rounded-full"></div>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-amber-900 mb-4">
                      Virtual Classroom
                    </h4>
                    <p className="text-amber-700 mb-6 leading-relaxed">
                      When distance is a factor, we create our own cozy learning
                      space online. Same warmth, same personal attention, just
                      through a screen.
                    </p>
                    <div className="space-y-3 text-amber-700">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-amber-200 mt-0.5 flex items-center justify-center">
                          <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                        </div>
                        <span>
                          <strong>Flexible scheduling</strong> for busy families
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-amber-200 mt-0.5 flex items-center justify-center">
                          <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                        </div>
                        <span>
                          <strong>Interactive tools</strong> that make learning
                          fun
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-amber-200 mt-0.5 flex items-center justify-center">
                          <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                        </div>
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
                <div className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium border border-amber-200">
                  Let's Begin This Journey
                </div>
                <h2 className="text-3xl font-light sm:text-4xl text-amber-900 leading-tight">
                  Ready to discover your child's
                  <span
                    className="italic font-light text-amber-700 block"
                    style={{ fontFamily: "serif" }}
                  >
                    unique brilliance?
                  </span>
                </h2>
                <div className="w-20 h-0.5 bg-amber-600"></div>
                <p className="text-amber-800 text-lg leading-relaxed">
                  I'd love to meet you and your child. Let's have a warm
                  conversation about their dreams, interests, and how we can
                  make learning an adventure they'll cherish.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                      <MessageSquare className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <p className="font-medium text-amber-900">Let's Chat</p>
                      <p className="text-amber-700">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                      <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-amber-100 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-amber-900">Write to Me</p>
                      <p className="text-amber-700">
                        hello@shivanitutoring.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-amber-100">
                <h3 className="text-xl font-semibold text-amber-900 mb-6">
                  Start with a Friendly Chat
                </h3>
                <div className="grid gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="parent-name"
                        className="text-sm font-medium text-amber-800"
                      >
                        Your name
                      </label>
                      <input
                        id="parent-name"
                        className="flex h-12 w-full rounded-2xl border-2 border-amber-200 bg-cream-50 px-4 py-3 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:border-amber-400"
                        placeholder="Tell me your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="child-name"
                        className="text-sm font-medium text-amber-800"
                      >
                        Your child's name
                      </label>
                      <input
                        id="child-name"
                        className="flex h-12 w-full rounded-2xl border-2 border-amber-200 bg-cream-50 px-4 py-3 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:border-amber-400"
                        placeholder="Your wonderful child"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-amber-800"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-12 w-full rounded-2xl border-2 border-amber-200 bg-cream-50 px-4 py-3 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:border-amber-400"
                      placeholder="How can I reach you?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="child-grade"
                      className="text-sm font-medium text-amber-800"
                    >
                      What grade is your child in?
                    </label>
                    <select
                      id="child-grade"
                      className="flex h-12 w-full rounded-2xl border-2 border-amber-200 bg-cream-50 px-4 py-3 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:border-amber-400"
                    >
                      <option value="" disabled selected>
                        Select their grade
                      </option>
                      <option value="K">Kindergarten</option>
                      <option value="1">Grade 1</option>
                      <option value="2">Grade 2</option>
                      <option value="3">Grade 3</option>
                      <option value="4">Grade 4</option>
                      <option value="5">Grade 5</option>
                      <option value="6">Grade 6</option>
                      <option value="7">Grade 7</option>
                      <option value="8">Grade 8</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-amber-800"
                    >
                      Tell me about your child
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-2xl border-2 border-amber-200 bg-cream-50 px-4 py-3 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:border-amber-400"
                      placeholder="What makes your child special? What are their interests, dreams, or any learning goals you have in mind?"
                    />
                  </div>
                  <Button className="w-full bg-amber-700 hover:bg-amber-800 text-cream-50 rounded-2xl h-12 text-lg font-medium">
                    Let's Start This Beautiful Journey
                  </Button>
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
                Shivani's
              </span>
              <span className="text-sm font-bold text-amber-900">TUTORING</span>
            </div>
            <p className="text-center text-sm text-amber-700 md:text-left">
              © {new Date().getFullYear()} • Made with love for every child's
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
