import { useState } from 'react';
import { ArrowLeft, Zap, Clock, Users, TrendingUp, X } from 'lucide-react';
import imgImageWithFallback1 from "figma:asset/2be56dbc2cbfe1bd05afd448a0a4551c6cd808f1.png";
import imgImageWithFallback2 from "figma:asset/401c12182836a8766543477766ca0758ccf30464.png";
import imgImageWithFallback3 from "figma:asset/c3dbfa092f5b65201c7464715ad9fb3c40925efd.png";
import imgImageWithFallback4 from "figma:asset/c0faec2db23724dc4877611b4f51962615dedec8.png";
import imgImageWithFallback5 from "figma:asset/bee0d7335ba9c7d1cb6f76e9c25452666693add1.png";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import OtherProjects from './OtherProjects';

interface BuzzlyProjectPageProps {
  onBack: () => void;
  onProjectClick?: (id: string) => void;
}

export default function BuzzlyProjectPage({ onBack, onProjectClick }: BuzzlyProjectPageProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const wireframes = [
    { src: 'https://i.ibb.co/1Y5P6PwM/Landing.png', alt: 'Landing Page', label: 'Landing Page' },
    { src: 'https://i.ibb.co/Myc3pj4g/About-Us.png', alt: 'About Us Page', label: 'About Us' },
    { src: 'https://i.ibb.co/YBHQ4pzv/Blog.png', alt: 'Blog Page', label: 'Blog' },
    { src: 'https://i.ibb.co/4wZM8Nwx/Calendar.png', alt: 'Calendar Page', label: 'Calendar' },
    { src: 'https://i.ibb.co/XZ4dJzDR/Faq.png', alt: 'FAQ Page', label: 'FAQ' },
    { src: 'https://i.ibb.co/bMydDtrM/Features.png', alt: 'Features Page', label: 'Features' },
    { src: 'https://i.ibb.co/mrRGDsFr/Pricing.png', alt: 'Pricing Page', label: 'Pricing' },
    { src: 'https://i.ibb.co/3mfNbb3w/Support.png', alt: 'Support Page', label: 'Support' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Image */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-6 md:top-8 left-4 md:left-8 lg:left-16 z-20 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/30 hover:border-white/50 text-white/90 hover:text-white transition-all duration-300 group shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm">Back to Projects</span>
        </button>
        
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1676276375742-9e3d10e39d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjIwOTc0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Buzzly social media management platform"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]"></div>
      </section>

      {/* Hero Section */}
      <section className="pt-12 pb-20 px-6 md:px-12 lg:px-24 border-b border-white/5 relative -mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <span className="text-[#6A0DAD]">Case Study 2024</span>
          </div>
          
          <h1 className="mb-8">Buzzly Landing Page - Turning visitors into customers by clarifying value and reducing friction</h1>
          
          <p className="text-xl text-white/60 max-w-3xl mb-12">
            Buzzly's original landing page buried its core value proposition under feature lists, causing confusion and low conversion rates. I redesigned the landing page to clearly communicate who it's for, what problem it solves, and why it matters—resulting in a 20% increase in engagement and 15% reduction in bounce rate.
          </p>

          {/* Project Meta */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-white/40 text-sm mb-2">Role</p>
              <p className="text-white">Product Designer</p>
            </div>
            <div>
              <p className="text-white/40 text-sm mb-2">Duration</p>
              <p className="text-white">8 Weeks</p>
            </div>
            <div>
              <p className="text-white/40 text-sm mb-2">Tools</p>
              <p className="text-white">Figma, FigJam, Maze</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12">Project Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl mb-4 text-[#6A0DAD]">The Challenge</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Buzzly's landing page was driving traffic but failing to convert. Small to medium-sized businesses and marketing agencies couldn't quickly grasp the platform's value, resulting in a 35% bounce rate and low demo sign-ups.
              </p>
              <p className="font-semibold text-white mb-2">
                The core issue:
              </p>
               <p className="text-white/60 leading-relaxed">
                  Visitors were overwhelmed by feature lists without understanding outcomes, the value proposition was buried, and multiple CTAs created decision paralysis. This directly impacted customer acquisition costs and slowed revenue growth.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-4 text-[#6A0DAD]">The Solution</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                I redesigned the landing page to prioritize clarity and conversion by leading with user outcomes instead of features. The new design uses audience-specific messaging for agencies vs. in-house teams, progressive information disclosure to build confidence, and a clear CTA hierarchy that guides users toward one action at each stage.
              </p>
              <p className="font-semibold text-white mb-2">
                The result:
              </p>
               <p className="text-white/60 leading-relaxed">
                  A 20% increase in engagement, 15% reduction in bounce rate, and messaging that helps visitors immediately understand why Buzzly matters to their business.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Problem Statement */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white/[0.02] border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12">Problem Statement</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-[#6A0DAD]/20 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#6A0DAD]" />
              </div>
              <h4 className="mb-3">Fragmented Workflow</h4>
              <p className="text-white/60">
                Social media managers switch between 5-7 tools daily. We weren't just solving for efficiency—we were addressing cognitive load and workflow fatigue.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-[#6A0DAD]/20 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#6A0DAD]" />
              </div>
              <h4 className="mb-3">Approval Bottlenecks</h4>
              <p className="text-white/60">
                Email threads and screenshot approvals create version chaos. The real problem wasn't the tool—it was the async communication breakdown between teams.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-[#6A0DAD]/20 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-[#6A0DAD]" />
              </div>
              <h4 className="mb-3">Insights, Not Just Data</h4>
              <p className="text-white/60">
                Users had analytics but no direction. They could see what happened, but not what to do next. We needed to bridge the gap between metrics and action.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Goals and Metrics */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12">Goals and Metrics</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl mb-6 text-[#6A0DAD]">Project Goals</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-[#6A0DAD] pl-6">
                  <h4 className="mb-2">Communicate Value Faster</h4>
                  <p className="text-white/60">Cut comprehension time from 45 to 10 seconds by leading with outcomes over features.</p>
                </div>
                <div className="border-l-4 border-[#6A0DAD] pl-6">
                  <h4 className="mb-2">Increase Visitor Engagement</h4>
                  <p className="text-white/60">Extend session time from 2 to 3+ minutes through clearer narrative flow and confidence-building content.</p>
                </div>
                <div className="border-l-4 border-[#6A0DAD] pl-6">
                  <h4 className="mb-2">Drive Qualified Conversions</h4>
                  <p className="text-white/60">Boost demo requests by 25% with sharper CTAs, strategic social proof, and pain-point-focused messaging.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-6 text-[#6A0DAD]">Success Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <p className="text-4xl text-[#6A0DAD] mb-2">40%</p>
                  <p className="text-white/60">Time Saved</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <p className="text-4xl text-[#6A0DAD] mb-2">50%</p>
                  <p className="text-white/60">Faster Approvals</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <p className="text-4xl text-[#6A0DAD] mb-2">4.8/5</p>
                  <p className="text-white/60">User Rating</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <p className="text-4xl text-[#6A0DAD] mb-2">92%</p>
                  <p className="text-white/60">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white/[0.02] border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12">Research & Discovery</h2>
          
          {/* User Research */}
          <div className="mb-16">
            <h3 className="text-2xl mb-6 text-[#6A0DAD]">User Research</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                 <p className="text-white/60 leading-relaxed mb-6">
                  12 interviews with social media managers and small business owners revealed how they evaluate new tools. I combined contextual inquiries with competitive analysis to understand what messaging converts and what causes bounce.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-white/60">
                    <span className="text-[#6A0DAD] flex-shrink-0">•</span>
                    <span>85% spend over 2 hours daily switching between platforms and tools</span>
                  </li>
                  <li className="flex gap-3 text-white/60">
                    <span className="text-[#6A0DAD] flex-shrink-0">•</span>
                    <span>70% struggle with team collaboration and client approval workflows</span>
                  </li>
                  <li className="flex gap-3 text-white/60">
                    <span className="text-[#6A0DAD] flex-shrink-0">•</span>
                    <span>60% find existing tools too complex, expensive, or feature-limited</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Research Methods</h4>
                    <p className="text-sm text-white/60">User interviews, contextual inquiry, diary studies, competitive analysis, heuristic evaluation</p>
                  </div>
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Participants</h4>
                    <p className="text-sm text-white/60">12 users—social media managers, agencies, and business owners</p>
                  </div>
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Key Finding</h4>
                    <p className="text-sm text-white/60">Users don't care about features. They ask one question: "Will this save me time?" We had 10 seconds to prove it.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Competitive Analysis */}
          <div className="mb-16">
            <h3 className="text-2xl mb-6 text-[#6A0DAD]">Competitive Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="mb-4">Hootsuite</h4>
                <div className="mb-4">
                  <p className="text-sm text-white/60 mb-2">Strengths:</p>
                  <p className="text-sm text-white/60">Comprehensive features, established brand, enterprise-ready</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-2">Weaknesses:</p>
                  <p className="text-sm text-white/60">Complex UI, expensive pricing, steep learning curve</p>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="mb-4">Buffer</h4>
                <div className="mb-4">
                  <p className="text-sm text-white/60 mb-2">Strengths:</p>
                  <p className="text-sm text-white/60">Simple interface, affordable, easy to learn</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-2">Weaknesses:</p>
                  <p className="text-sm text-white/60">Limited analytics, basic features, lacks team workflows</p>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="mb-4">Sprout Social</h4>
                <div className="mb-4">
                  <p className="text-sm text-white/60 mb-2">Strengths:</p>
                  <p className="text-sm text-white/60">Powerful analytics, team features, reporting</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-2">Weaknesses:</p>
                  <p className="text-sm text-white/60">Very expensive, overwhelming interface for small teams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process/Approach */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12">Process & Approach</h2>
          
          {/* Information Architecture */}
          <div className="mb-16">
            <h3 className="text-2xl mb-6 text-[#6A0DAD]">Information Architecture</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img src={imgImageWithFallback1} alt="Information Architecture" className="w-full h-auto" />
              </div>
              <div>
                
                <p className="text-white/60 leading-relaxed mb-6">
                  I reorganized the landing page content based on the visitor's decision-making journey, prioritizing information that answers their core questions in order: "What is this?", "Why should I care?", "Does it work?", and "What do I do next?"
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Hero Section</h4>
                    <p className="text-sm text-white/60">Outcome-focused headline with quantified value proposition and single primary CTA</p>
                  </div>
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Problem-Solution</h4>
                    <p className="text-sm text-white/60">Mirror user pain points discovered in research, then show how Buzzly specifically solves each</p>
                  </div>
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">How It Works</h4>
                    <p className="text-sm text-white/60">Visual demonstration of the unified workflow replacing fragmented tools</p>
                  </div>
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Social Proof</h4>
                    <p className="text-sm text-white/60">Customer logos, testimonials, and key metrics positioned at the trust-building moment</p>
                  </div>
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Pricing & CTA</h4>
                    <p className="text-sm text-white/60">Clear next steps with transparent pricing and low-friction demo request</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Process */}
          <div>
            <h3 className="text-2xl mb-6 text-[#6A0DAD]">Design Methodology</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#6A0DAD]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-[#6A0DAD]">1</span>
                </div>
                <h4 className="mb-2">Discover</h4>
                <p className="text-white/60 text-sm">User research, interviews, competitive analysis</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#6A0DAD]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-[#6A0DAD]">2</span>
                </div>
                <h4 className="mb-2">Define</h4>
                <p className="text-white/60 text-sm">User personas, journey maps, feature prioritization</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#6A0DAD]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-[#6A0DAD]">3</span>
                </div>
                <h4 className="mb-2">Design</h4>
                <p className="text-white/60 text-sm">Wireframes, prototypes, design system</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#6A0DAD]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-[#6A0DAD]">4</span>
                </div>
                <h4 className="mb-2">Deliver</h4>
                <p className="text-white/60 text-sm">Testing, iteration, handoff to development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights and Design Decisions */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white/[0.02] border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12">Key Insights & Design Decisions</h2>
          
          <div className="space-y-8">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#6A0DAD] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="mb-3">Outcome-First Hero</h4>
                  <p className="text-white/60 mb-4">
                    Generic messaging caused immediate bounces. I led with quantified outcomes and visual workflows to make value instantly clear.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-white/60"><span className="text-[#6A0DAD]">Impact:</span> 25% increase in scroll depth, 18% better clarity scores</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#6A0DAD] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">2</span>
                </div>
                <div className="flex-1">
                  <h4 className="mb-3">Problem-Solution Mirroring</h4>
                  <p className="text-white/60 mb-4">
                    Users needed to see their pain points reflected first. I used exact language from interviews before introducing solutions.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-white/60"><span className="text-[#6A0DAD]">Impact:</span> 30% more time on feature sections</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#6A0DAD] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">3</span>
                </div>
                <div className="flex-1">
                  <h4 className="mb-3">Progressive Trust Building</h4>
                  <p className="text-white/60 mb-4">
                    Skepticism was high around complexity claims. I layered proof strategically—logos early, detailed testimonials near CTAs.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-white/60"><span className="text-[#6A0DAD]">Impact:</span> 22% more demo requests from qualified visitors</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#6A0DAD] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">4</span>
                </div>
                <div className="flex-1">
                  <h4 className="mb-3">Segmented Messaging</h4>
                  <p className="text-white/60 mb-4">
                    Two distinct audiences needed different narratives. I designed modular sections that adapted based on traffic source.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-white/60"><span className="text-[#6A0DAD]">Impact:</span> 35% improvement in relevance, 20% higher engagement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution/Final Design */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-16">Solution / Final Design</h2>
          
          {/* Design System */}
          <div className="mb-16">
            <h3 className="text-2xl mb-6 text-[#6A0DAD]">Design System</h3>
            <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h4 className="mb-6">Color Palette</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="h-20 bg-[#fdfcfb] rounded-lg border border-white/10 mb-3" />
                      <p className="text-sm text-white/60">Background</p>
                      <p className="text-sm">#FDFCFB</p>
                    </div>
                    <div>
                      <div className="h-20 bg-[#6a0dad] rounded-lg mb-3" />
                      <p className="text-sm text-white/60">Primary</p>
                      <p className="text-sm">#6A0DAD</p>
                    </div>
                    <div>
                      <div className="h-20 bg-[#242424] rounded-lg mb-3" />
                      <p className="text-sm text-white/60">Primary Font</p>
                      <p className="text-sm">#242424</p>
                    </div>
                    <div>
                      <div className="h-20 bg-[#4B5563] rounded-lg mb-3" />
                      <p className="text-sm text-white/60">Body</p>
                      <p className="text-sm">#4B5563</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-6">Typography</h4>
                  <div className="space-y-6">
                    <div className="pb-6 border-b border-white/10">
                      <p className="text-3xl mb-2" style={{ fontFamily: 'DM Sans' }}>DM Sans</p>
                      <p className="text-sm text-white/60">Heading - Semi Bold</p>
                    </div>
                    <div>
                      <p className="text-xl mb-2" style={{ fontFamily: 'DM Sans' }}>DM Sans</p>
                      <p className="text-sm text-white/60">Body - Regular</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="mb-6">UI Components</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="bg-[#6a0dad] text-white px-6 py-3 rounded-lg hover:bg-[#6a0dad]/90 transition-colors">
                    Primary Button
                  </button>
                  <button className="bg-transparent text-[#6a0dad] border-2 border-[#6a0dad] px-6 py-3 rounded-lg hover:bg-[#6a0dad]/10 transition-colors">
                    Secondary Button
                  </button>
                  <input
                    type="text"
                    placeholder="Input Field"
                    className="bg-white/5 border border-white/20 px-4 py-3 rounded-lg text-white placeholder:text-white/40"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Hi-Fidelity Wireframes */}
          <div className="mb-16">
            <h3 className="text-2xl mb-6 text-[#6A0DAD]">Hi-Fidelity Wireframes</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {wireframes.map((wireframe, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage({ src: wireframe.src, alt: wireframe.alt })}
                >
                  <div className="aspect-square rounded-xl overflow-hidden border border-white/10 hover:border-[#6A0DAD]/50 transition-all duration-300 bg-white/5 hover:bg-white/10">
                    <ImageWithFallback
                      src={wireframe.src}
                      alt={wireframe.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-white/60 text-center mt-2 text-sm group-hover:text-white/80 transition-colors">{wireframe.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Prototype */}
          <div>
            <h3 className="text-2xl mb-6 text-[#6A0DAD]">Interactive Prototype</h3>
            <div className="relative bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6A0DAD]/10 via-transparent to-transparent"></div>
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12">
                <div className="flex-1">
                  <div className="inline-block px-4 py-1.5 bg-[#6A0DAD]/20 border border-[#6A0DAD]/30 rounded-full text-sm text-[#6A0DAD] mb-4">
                    Try the Prototype
                  </div>
                  <h4 className="text-3xl mb-3">Experience the Full Workflow</h4>
                  <p className="text-white/60 text-lg max-w-xl">
                    Navigate through the complete user flow and explore all features in our interactive Figma prototype.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="https://www.figma.com/proto/hVP62ArRvImKwzx4nzWpfp/Buzzly?page-id=0%3A1&node-id=1-17704&viewport=42%2C320%2C0.08&t=fmpwRAdTPcuHxEPj-1&scaling=min-zoom&content-scaling=fixed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#6A0DAD] hover:bg-[#5a0b8f] text-white rounded-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative">View Prototype</span>
                    <svg className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white/[0.02] border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12">Results & Impact</h2>
          <p className="text-white/60 leading-relaxed mb-8">
              Metrics based on usability testing and post-task feedback
          </p>
          
          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <p className="text-5xl text-[#6A0DAD] mb-3">40%</p>
              <p className="text-white/60">Time Saved</p>
            </div>
            <div className="text-center">
              <p className="text-5xl text-[#6A0DAD] mb-3">50%</p>
              <p className="text-white/60">Faster Approvals</p>
            </div>
            <div className="text-center">
              <p className="text-5xl text-[#6A0DAD] mb-3">4.8/5</p>
              <p className="text-white/60">User Rating</p>
            </div>
            <div className="text-center">
              <p className="text-5xl text-[#6A0DAD] mb-3">92%</p>
              <p className="text-white/60">User Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learnings & Reflection */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12">Learnings & Reflection</h2>
          
          <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#6A0DAD] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">1</span>
                </div>
                <div>
                  <h4 className="mb-2">Test Early, Test Often</h4>
                  <p className="text-white/60">Our "clear" messaging wasn't clear at all. 5-second tests caught this before launch, and A/B testing showed quantified value beat feature lists by 32%.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#6A0DAD] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">2</span>
                </div>
                <div>
                  <h4 className="mb-2">Progressive Over Comprehensive</h4>
                  <p className="text-white/60">Heatmaps revealed 68% never scrolled past our feature grid. We learned landing pages aren't documentation—they're invitations to learn more.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#6A0DAD] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">3</span>
                </div>
                <div>
                  <h4 className="mb-2">Mirror Their Language</h4>
                  <p className="text-white/60">Using exact phrases from user research ("juggling 5-7 tools") increased engagement by 35%. Resonance beats education every time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#6A0DAD] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">4</span>
                </div>
                <div>
                  <h4 className="mb-2">Earn Trust Gradually</h4>
                  <p className="text-white/60">Strategic social proof—logos early, testimonials mid-page, ROI stories before CTAs—outperformed throwing everything at once. Commitment and credibility need to escalate together.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      {onProjectClick && (
        <OtherProjects 
          currentProjectId="buzzly" 
          onProjectClick={onProjectClick}
        />
      )}

      {/* Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={(open) => { if (!open) setSelectedImage(null); }}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/20">
          <DialogTitle className="sr-only">
            {selectedImage?.alt || 'Wireframe Preview'}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Full size view of the wireframe
          </DialogDescription>
          <div className="relative w-full h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/20 text-white transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            {selectedImage && (
              <div className="w-full h-[95vh] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent px-4 py-16">
                <div className="max-w-md mx-auto">
                  <ImageWithFallback
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
