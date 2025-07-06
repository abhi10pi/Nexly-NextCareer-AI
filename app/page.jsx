import HeroSection from "@/components/hero";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { features } from "@/data/features";
import { Card, CardContent } from "@/components/ui/card";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className=" grid-background"></div>

      <HeroSection />


      <section className="w-full py-24 bg-gradient-to-tr from-black-900 to-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-sm text-primary font-semibold uppercase tracking-widest">
              <Sparkles className="h-4 w-4" /> Features
            </div>
            <h2 className="text-4xl font-extrabold bg-gradient-to-t from-black/30 to-white text-transparent bg-clip-text mt-2">
              Unlock Your Career Potential
            </h2>
            <p className="text-gray-400 text-base max-w-2xl mx-auto mt-4">
              Explore the tools that give you an edge in interviews and job applications.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-md transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Industries Covered" },
              { value: "1000+", label: "Interview Questions" },
              { value: "95%", label: "Success Rate" },
              { value: "24/7", label: "AI Support" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-sm py-8 px-4 text-center"
              >
                <h3 className="text-3xl font-bold text-primary mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-2">How It Works</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Follow four simple steps to get the best out of our platform.
            </p>
          </div>

          <ol className="relative border-l border-gray-700 space-y-12">
            {howItWorks.map((item, index) => (
              <li key={index} className="ml-6 relative">
                <span className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 bg-primary text-white rounded-full text-sm font-medium">
                  {index + 1}
                </span>
                <div className="bg-gray-900 p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="w-full py-20 bg-gray text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">FAQs</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We’ve compiled answers to your most frequent questions.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-base font-medium text-white hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="w-full py-24 bg-gradient-to-r from-gray-900 via-black to-gray-950 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-t from-white/5 via-white to-white text-transparent bg-clip-text">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-lg text-white/80">
            Join thousands of professionals leveling up with AI-powered insights.
          </p>
          <Link href="/dashboard" passHref>
            <Button
              size="lg"
              variant="secondary"
              className="h-12 px-8 animate-bounce bg-white text-gray-900 font-semibold hover:bg-white/80"
            >
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>


    </div>
  );
}
