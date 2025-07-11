import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CircleCheckIcon, RocketIcon, ShieldIcon, QuoteIcon, HelpCircleIcon } from "lucide-react";

export const metadata = {
  title: "Linki – Effortlessly connect, share, and manage your links",
  description: "Effortlessly connect, share, and manage your links with Linki. Organize your favorite links, personalize your page, and share with anyone, anywhere.",
  keywords: [
    "Linki",
    "link manager",
    "share links",
    "organize links",
    "personal page",
    "portfolio",
    "social links",
    "bio link",
    "link sharing"
  ],
  authors: [{ name: "The Stupid Apps", url: "https://linki.com" }],
  creator: "Linki",
  openGraph: {
    title: "Linki – Effortlessly connect, share, and manage your links",
    description: "Organize and share your favorite links with Linki. Fast, secure, and reliable link management.",
    url: "https://linki.com",
    siteName: "Linki",
    images: [
      {
        url: "https://linki.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Linki – Effortlessly connect, share, and manage your links"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Linki – Effortlessly connect, share, and manage your links",
    description: "Organize and share your favorite links with Linki. Fast, secure, and reliable link management.",
    site: "@linkiapp",
    creator: "@linkiapp",
    images: ["https://linki.com/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-300 flex flex-col items-center">
      <section className="w-full max-w-3xl text-center py-24 px-4">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
          Linki
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Effortlessly connect, share, and manage your links with style.
        </p>
        <Link href="/signup">
          <Button size="lg" className="text-lg px-8 py-6">Get Started</Button>
        </Link>
      </section>

      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 py-16 px-4">
        <FeatureCard
          icon={<RocketIcon className="w-8 h-8 text-blue-600" />}
          title="Fast & Easy"
          description="Create and share links in seconds with a simple, intuitive interface."
        />
        <FeatureCard
          icon={<ShieldIcon className="w-8 h-8 text-green-600" />}
          title="Secure"
          description="Your data is protected with industry-leading security and privacy."
        />
        <FeatureCard
          icon={<CircleCheckIcon className="w-8 h-8 text-purple-600" />}
          title="Reliable"
          description="Built on modern technology for speed, uptime, and scalability."
        />
      </section>

      <section className="w-full max-w-2xl text-center py-12 px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">How it works</h2>
        <p className="text-gray-600 text-lg mb-4">
          Linki helps you organize and share your favorite links with anyone, anywhere. Sign up, add your links, and share your personalized page in just a few clicks.
        </p>
        <ul className="text-left text-gray-700 mx-auto max-w-md space-y-2">
          <li><span className="font-semibold">1.</span> Create an account in seconds</li>
          <li><span className="font-semibold">2.</span> Add, organize, and customize your links</li>
          <li><span className="font-semibold">3.</span> Share your unique Linki page with the world</li>
        </ul>
      </section>

      <section className="w-full max-w-4xl py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">What our users say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Alex J."
            text="Linki made sharing my portfolio and social links so much easier! The design is beautiful and setup took less than 2 minutes."
          />
          <TestimonialCard
            name="Priya S."
            text="I love how simple and secure Linki is. I can update my links anytime and share my page with confidence."
          />
          <TestimonialCard
            name="Chris W."
            text="The best link manager I've used. Fast, reliable, and the support team is fantastic!"
          />
        </div>
      </section>

      <section className="w-full max-w-3xl py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <FAQItem
            question="Is Linki free to use?"
            answer="Yes! Linki offers a free plan with all the essential features. Premium options are available for advanced customization."
          />
          <FAQItem
            question="Can I customize my Linki page?"
            answer="Absolutely. You can personalize your page with your own links, profile image, and more."
          />
          <FAQItem
            question="How secure is my data?"
            answer="We use industry-standard encryption and never share your data with third parties. Your privacy is our priority."
          />
        </div>
      </section>

      <section className="w-full max-w-2xl text-center py-12 px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Ready to get started?</h2>
        <p className="text-gray-600 text-lg mb-6">
          Join thousands of users who trust Linki to manage and share their links.
        </p>
        <Link href="/signup">
          <Button size="lg" className="text-lg px-8 py-6">Sign Up Free</Button>
        </Link>
      </section>

      <footer className="w-full py-8 px-4 bg-slate-800 text-slate-100 text-center mt-8">
        <div className="mb-2">&copy; {new Date().getFullYear()} Linki. All rights reserved.</div>
        <div className="space-x-4">
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <span>|</span>
          <Link href="/terms" className="hover:underline">Terms of Service</Link>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}

function TestimonialCard({ name, text }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
      <QuoteIcon className="w-6 h-6 text-blue-400 mb-2" />
      <p className="text-gray-700 italic mb-4">"{text}"</p>
      <div className="font-semibold text-gray-900">{name}</div>
    </div>
  );
}

function FAQItem({ question, answer }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex items-start gap-4">
      <HelpCircleIcon className="w-6 h-6 text-blue-500 mt-1" />
      <div>
        <div className="font-semibold text-gray-900 mb-1">{question}</div>
        <div className="text-gray-600">{answer}</div>
      </div>
    </div>
  );
}
