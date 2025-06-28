import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "K-8 Private Tutor in Abu Dhabi | Shivani's Tutoring & Online Lessons",
  description:
    "15-year veteran tutor and mom offering Math, Science & English coaching for elementary and middle school students in Abu Dhabi. Book a free consultation.",
  keywords: [
    "private tutor Abu Dhabi",
    "K-8 tutoring Abu Dhabi",
    "math tutor Abu Dhabi",
    "science tutor Abu Dhabi",
    "english tutor Abu Dhabi",
    "home tutoring Abu Dhabi",
    "online tutoring Abu Dhabi",
    "elementary tutoring",
    "middle school tutor",
    "personalized learning Abu Dhabi",
  ],
  authors: [{ name: "Shivani Khanna" }],
  creator: "Shivani Khanna",
  publisher: "Shivani's Tutoring",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://shivanitutoring.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shivanitutoring.com/",
    title: "K-8 Private Tutor in Abu Dhabi | Shivani's Tutoring & Online Lessons",
    description:
      "15-year veteran tutor and mom offering Math, Science & English coaching for elementary and middle school students in Abu Dhabi. Book a free consultation.",
    siteName: "Shivani's Tutoring",
    images: [
      {
        url: "https://shivanitutoring.com/assets/hero.png",
        width: 1200,
        height: 630,
        alt: "Shivani Khanna - Professional K-8 Tutor in Abu Dhabi offering Math, Science & English coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "K-8 Private Tutor in Abu Dhabi | Shivani's Tutoring & Online Lessons",
    description:
      "15-year veteran tutor and mom offering Math, Science & English coaching for elementary and middle school students in Abu Dhabi. Book a free consultation.",
    images: ["https://shivanitutoring.com/assets/hero.png"],
    creator: "@shivanitutoring",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  category: "Education",
};

// Structured Data JSON-LD
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://shivanitutoring.com/#business",
      name: "Shivani's Tutoring",
      alternateName: "Shivani Khanna Tutoring",
      description:
        "Professional K-8 tutoring services in Abu Dhabi offering personalized Math, Science, and English coaching with 15+ years of experience.",
      url: "https://shivanitutoring.com/",
      telephone: "+971-50-596-4988",
      email: "hello@shivanitutoring.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abu Dhabi",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.2048,
        longitude: 55.2708,
      },
      openingHours: "Mo-Su 09:00-20:00",
      priceRange: "$$",
      image: "https://shivanitutoring.com/assets/hero.png",
      founder: {
        "@type": "Person",
        name: "Shivani Khanna",
        jobTitle: "Professional Tutor & Educator",
      },
      areaServed: {
        "@type": "City",
        name: "Abu Dhabi",
      },
      serviceArea: {
        "@type": "City",
        name: "Abu Dhabi",
      },
    },
    {
      "@type": "Service",
      "@id": "https://shivanitutoring.com/#service",
      serviceType: "Educational Tutoring",
      name: "K-8 Private Tutoring Services",
      description:
        "Personalized tutoring in Mathematics, Science, and English for elementary and middle school students (Grades K-8).",
      provider: {
        "@id": "https://shivanitutoring.com/#business",
      },
      areaServed: {
        "@type": "City",
        name: "Abu Dhabi",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Tutoring Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mathematics Tutoring",
              description:
                "Visual storytelling with numbers, real-world connections, and confidence-building through gentle challenge.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Science Tutoring",
              description:
                "Hands-on experiments, nature-connected learning, and questions that lead to 'aha!' moments.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "English Tutoring",
              description:
                "Stories that come alive, writing that flows from the heart, and reading adventures to treasure together.",
            },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://shivanitutoring.com/#person",
      name: "Shivani Khanna",
      jobTitle: "Professional K-8 Tutor & Educator",
      description:
        "15+ years experienced educator specializing in personalized learning for elementary and middle school students.",
      url: "https://shivanitutoring.com/",
      image: "https://shivanitutoring.com/assets/about.png",
      telephone: "+971-50-596-4988",
      email: "hello@shivanitutoring.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abu Dhabi",
        addressCountry: "AE",
      },
      worksFor: {
        "@id": "https://shivanitutoring.com/#business",
      },
    },
    {
      "@type": "Review",
      "@id": "https://shivanitutoring.com/#review1",
      reviewBody:
        "Shivani has been a blessing for our family. My son struggled with math anxiety, but after just a few sessions, he's approaching problems with confidence. Her patience and teaching methods are exceptional.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Sarah Thompson",
      },
      itemReviewed: {
        "@id": "https://shivanitutoring.com/#business",
      },
    },
    {
      "@type": "Review",
      "@id": "https://shivanitutoring.com/#review2",
      reviewBody:
        "Our daughter's science grades have improved dramatically since working with Shivani. She makes complex concepts easy to understand and keeps learning fun and engaging.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Michael Rodriguez",
      },
      itemReviewed: {
        "@id": "https://shivanitutoring.com/#business",
      },
    },
    {
      "@type": "Review",
      "@id": "https://shivanitutoring.com/#review3",
      reviewBody:
        "I have been a student of Shivani Khanna for 18 years. She has been the best teacher I have ever had because no one else cares as much about her students as she does. I am now studying Math at Stanford University.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Vedant Khanna",
      },
      itemReviewed: {
        "@id": "https://shivanitutoring.com/#business",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://shivanitutoring.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What subjects do you tutor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I specialize in Mathematics, Science, and English for grades K-8. Each subject is taught with a personalized approach that honors your child's unique learning style.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer in-home or online tutoring?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I offer both in-home tutoring (recommended) and virtual classroom sessions. In-home sessions provide personal connection in your child's comfort zone, while virtual sessions offer flexible scheduling for busy families.",
          },
        },
        {
          "@type": "Question",
          name: "What age groups do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I work with students in grades K-8 (ages 5-14), providing age-appropriate learning experiences that make education feel nurturing and empowering.",
          },
        },
        {
          "@type": "Question",
          name: "How can I schedule a consultation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can call me at (+971) 50 596 4988 or email hello@shivanitutoring.com to schedule a free consultation. I'd love to meet you and your child to discuss their learning journey.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
