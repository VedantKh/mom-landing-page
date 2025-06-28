import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, MessageSquare, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-purple-50 to-white">
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between py-4 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-700">
              Khanna Tutoring
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-gray-800">
            <Link
              href="#services"
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Book a Session
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div>

          <div className="container max-w-7xl mx-auto px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-2">
                  Grades K-8 Tutoring
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500">
                  Inspiring Young Minds to Excel
                </h1>
                <p className="max-w-[600px] text-slate-700 md:text-xl">
                  Personalized tutoring in Math, Science, and English for
                  students up to Grade 8. Available both online and in-person,
                  with in-person sessions recommended for optimal engagement and
                  learning outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-purple-600 hover:bg-purple-700 rounded-full px-6">
                    Schedule a Free Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-300 text-purple-700 hover:bg-purple-50 bg-transparent rounded-full px-6"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent z-10"></div>
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Happy students learning"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

                {/* About Section */}
                <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-white relative"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full opacity-30 translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-100 rounded-full opacity-30 -translate-x-1/3 translate-y-1/3"></div>

          <div className="container max-w-7xl mx-auto px-4 md:px-6 relative">
            <div className="grid gap-10 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-200 rounded-full opacity-50"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full opacity-50"></div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-purple-100">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent z-10"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Shivani Khanna teaching"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                  Meet Your Tutor
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-800">
                  Shivani Khanna
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
                <p className="text-slate-700 text-lg">
                  With over 15 years of teaching experience, Shivani Khanna has
                  a passion for helping children discover their potential. Her
                  patient and nurturing approach creates a comfortable learning
                  environment where students can thrive.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                      <BookOpen className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-slate-700">
                      Certified Elementary Education Teacher
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                      <GraduationCap className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-slate-700">
                      Worked at British Council for 10 years
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                      <MessageSquare className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-slate-700">
                      Specialized in working with diverse learning styles
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Moved right under hero */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-16 bg-white relative"
        >
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-purple-50 to-white"></div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-0 w-24 h-24 bg-purple-100 rounded-full opacity-50 -translate-x-1/2"></div>
          <div className="absolute top-1/4 right-0 w-32 h-32 bg-purple-100 rounded-full opacity-50 translate-x-1/2"></div>

          <div className="container max-w-7xl mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                Success Stories
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-purple-800">
                What People Say About Shivani
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mx-auto"></div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 relative max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white border border-purple-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow relative z-10"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-purple-400 text-purple-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="rounded-full bg-purple-100 h-10 w-10 flex items-center justify-center">
                      <span className="font-semibold text-purple-700">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-purple-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-500">
                        {testimonial.relation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-purple-50 relative"
        >
          {/* Decorative elements */}
          <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>

          <div className="container max-w-7xl mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                Our Expertise
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-800">
                Subjects We Cover
              </h2>
              <p className="max-w-[700px] text-slate-600 md:text-lg">
                Comprehensive tutoring tailored to your child's unique learning
                style and needs.
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mx-auto"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              <Card className="bg-white border-purple-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
                    <span className="text-2xl">🔢</span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">
                    Mathematics
                  </h3>
                  <p className="text-slate-600">
                    From basic arithmetic to pre-algebra, we make math engaging
                    and understandable through:
                  </p>
                  <ul className="mt-4 space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="#7e22ce"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>Visual learning techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="#7e22ce"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>Real-world problem solving</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="#7e22ce"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>Confidence building exercises</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-purple-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
                    <span className="text-2xl">🔬</span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">
                    Science
                  </h3>
                  <p className="text-slate-600">
                    Exploring the natural world through hands-on activities and
                    clear explanations:
                  </p>
                  <ul className="mt-4 space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="#7e22ce"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>Interactive experiments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="#7e22ce"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>Conceptual understanding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="#7e22ce"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>Curiosity-driven learning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-purple-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">
                    English
                  </h3>
                  <p className="text-slate-600">
                    Building strong reading comprehension, writing, and
                    communication skills:
                  </p>
                  <ul className="mt-4 space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="#7e22ce"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>Critical reading strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="#7e22ce"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>Creative writing development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="#7e22ce"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>Grammar and vocabulary building</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Tutoring Options Section */}
            <div className="mt-16 pt-12 border-t border-purple-100">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                  Flexible Learning Options
                </div>
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-purple-800">
                  Choose Your Preferred Format
                </h3>
                <p className="max-w-[600px] text-slate-600">
                  We offer both online and in-person tutoring to accommodate
                  your family's needs and preferences.
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mx-auto"></div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                {/* In-Person Tutoring - Recommended */}
                <Card className="bg-white border-purple-200 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                    RECOMMENDED
                  </div>
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-700"></div>
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <h4 className="text-xl font-bold text-purple-800 mb-2">
                      In-Person Tutoring
                    </h4>
                    <p className="text-slate-600 mb-4">
                      Face-to-face sessions in the comfort of your home for
                      maximum engagement and personalized attention.
                    </p>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="#7e22ce"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span>
                          <strong>Better engagement</strong> with hands-on
                          activities
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="#7e22ce"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span>
                          <strong>Immediate feedback</strong> and real-time
                          support
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="#7e22ce"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span>
                          <strong>Fewer distractions</strong> in familiar
                          environment
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="#7e22ce"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span>
                          <strong>Proven better outcomes</strong> for elementary
                          students
                        </span>
                      </li>
                    </ul>
                    <div className="mt-6 p-3 bg-purple-50 rounded-lg border border-purple-100">
                      <p className="text-sm text-purple-700">
                        <strong>Why we recommend in-person:</strong> Young
                        learners thrive with direct interaction, tactile
                        learning materials, and the focused attention that comes
                        with face-to-face instruction.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Online Tutoring */}
                <Card className="bg-white border-purple-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-purple-300 to-purple-500"></div>
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
                      <span className="text-2xl">💻</span>
                    </div>
                    <h4 className="text-xl font-bold text-purple-800 mb-2">
                      Online Tutoring
                    </h4>
                    <p className="text-slate-600 mb-4">
                      Convenient virtual sessions using interactive tools and
                      digital resources for flexible learning.
                    </p>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="#7e22ce"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span>
                          <strong>Flexible scheduling</strong> options
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="#7e22ce"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span>
                          <strong>No travel time</strong> required
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="#7e22ce"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span>
                          <strong>Digital tools</strong> and interactive
                          whiteboards
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-purple-100 p-1 mt-0.5">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="#7e22ce"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span>
                          <strong>Session recordings</strong> available for
                          review
                        </span>
                      </li>
                    </ul>
                    <div className="mt-6 p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <p className="text-sm text-slate-600">
                        <strong>Best for:</strong> Students who are comfortable
                        with technology and families with busy schedules or
                        transportation constraints.
                      </p>
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
          className="w-full py-12 md:py-24 lg:py-32 bg-purple-50 relative"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-purple-50"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div>

          <div className="container max-w-7xl mx-auto px-4 md:px-6 relative">
            <div className="grid gap-10 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                  Get Started
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-800">
                  Ready to Help Your Child Excel?
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
                <p className="text-slate-700 text-lg">
                  Contact us today to schedule a free consultation and learn
                  more about our personalized tutoring services.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-600"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <span className="text-slate-700">+971 50 596 4988</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-600"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700">
                      contact@khannatutoring.com
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-600"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <span className="text-slate-700">
                      Reem Island, Abu Dhabi
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100">
                <h3 className="text-xl font-bold text-purple-800 mb-6">
                  Request Information
                </h3>
                <div className="grid gap-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium text-slate-700"
                      >
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-purple-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium text-slate-700"
                      >
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-purple-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-purple-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-slate-700"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-purple-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="child-grade"
                      className="text-sm font-medium text-slate-700"
                    >
                      Child's Grade
                    </label>
                    <select
                      id="child-grade"
                      className="flex h-10 w-full rounded-md border border-purple-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
                    >
                      <option value="" disabled selected>
                        Select grade
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
                      className="text-sm font-medium text-slate-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[100px] w-full rounded-md border border-purple-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
                      placeholder="Tell us about your child's needs"
                    />
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 rounded-md">
                    Submit Request
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-purple-100 py-6 bg-white">
        <div className="container max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-purple-600" />
            <p className="text-center text-sm leading-loose text-slate-600 md:text-left">
              © {new Date().getFullYear()} Khanna Tutoring. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm text-slate-600 hover:text-purple-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-slate-600 hover:text-purple-600 transition-colors"
            >
              Terms of Service
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
