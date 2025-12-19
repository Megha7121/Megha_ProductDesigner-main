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
          
          <h1 className="mb-8">Buzzly Landing Page</h1>
          
          <p className="text-xl text-white/60 max-w-3xl mb-12">
            A comprehensive web platform designed to help businesses and agencies manage their social media presence, schedule content, collaborate with teams, and analyze performance across multiple social platforms from a single unified dashboard.
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
              <p className="text-white/60 leading-relaxed">
                Small to medium-sized businesses and marketing agencies struggle to manage multiple social media accounts efficiently. They need a unified web platform that allows them to schedule posts, collaborate with team members, manage client approvals, and track performance without switching between multiple tools and platforms.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-4 text-[#6A0DAD]">The Solution</h3>
              <p className="text-white/60 leading-relaxed">
                Buzzly Client App provides an all-in-one web-based social media management solution with intuitive scheduling, real-time collaboration features, multi-level content approval workflows, and comprehensive analytics—all designed with a focus on simplicity, efficiency, and team productivity.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl mb-8">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#6A0DAD] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">Multi-Platform Scheduling</h4>
                  <p className="text-white/60">Schedule and publish content across Facebook, Instagram, Twitter, and LinkedIn from one centralized dashboard</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#6A0DAD] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">Team Collaboration</h4>
                  <p className="text-white/60">Real-time collaboration with role-based permissions and multi-level approval workflows</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#6A0DAD] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">Content Calendar</h4>
                  <p className="text-white/60">Visual calendar with drag-and-drop scheduling and campaign organization</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#6A0DAD] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">Analytics & Reporting</h4>
                  <p className="text-white/60">Comprehensive performance tracking with exportable reports and insights</p>
                </div>
              </div>
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
                Social media managers juggle 5-7 different tools to manage their clients' accounts, leading to inefficiency, context switching, and missed opportunities.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-[#6A0DAD]/20 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#6A0DAD]" />
              </div>
              <h4 className="mb-3">Time-Consuming Approvals</h4>
              <p className="text-white/60">
                Content approval processes rely on email chains and screenshots, causing delays and version control nightmares for agency teams.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-[#6A0DAD]/20 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-[#6A0DAD]" />
              </div>
              <h4 className="mb-3">Limited Visibility</h4>
              <p className="text-white/60">
                Existing tools provide basic analytics but fail to deliver actionable insights that help businesses grow their social presence.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#6A0DAD]/10 to-transparent rounded-2xl p-8 md:p-12 border border-[#6A0DAD]/20">
            <h3 className="text-2xl mb-6">User Pain Points</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex gap-3 text-white/70">
                  <span className="text-[#6A0DAD] flex-shrink-0">→</span>
                  <span>Spending 2+ hours daily switching between platforms and tools</span>
                </li>
                <li className="flex gap-3 text-white/70">
                  <span className="text-[#6A0DAD] flex-shrink-0">→</span>
                  <span>Missing optimal posting times due to manual coordination</span>
                </li>
                <li className="flex gap-3 text-white/70">
                  <span className="text-[#6A0DAD] flex-shrink-0">→</span>
                  <span>Difficulty maintaining consistent brand voice across clients</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex gap-3 text-white/70">
                  <span className="text-[#6A0DAD] flex-shrink-0">→</span>
                  <span>Client approval bottlenecks delaying content publication</span>
                </li>
                <li className="flex gap-3 text-white/70">
                  <span className="text-[#6A0DAD] flex-shrink-0">→</span>
                  <span>Frustration with complex, feature-bloated interfaces</span>
                </li>
                <li className="flex gap-3 text-white/70">
                  <span className="text-[#6A0DAD] flex-shrink-0">→</span>
                  <span>Unable to demonstrate ROI to clients effectively</span>
                </li>
              </ul>
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
                  <h4 className="mb-2">Streamline Workflow</h4>
                  <p className="text-white/60">Reduce daily social media management time by 40% through unified platform and automation</p>
                </div>
                <div className="border-l-4 border-[#6A0DAD] pl-6">
                  <h4 className="mb-2">Accelerate Approvals</h4>
                  <p className="text-white/60">Cut content approval time by 50% with integrated workflow and real-time collaboration</p>
                </div>
                <div className="border-l-4 border-[#6A0DAD] pl-6">
                  <h4 className="mb-2">Improve Performance</h4>
                  <p className="text-white/60">Increase average engagement by 30% using data-driven insights and optimal timing</p>
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
                  I conducted 12 in-depth interviews with social media managers, marketing agencies, and small business owners to understand their workflows, pain points, and needs. The research included contextual inquiries, diary studies, and competitive analysis to identify opportunities for innovation.
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
                    <p className="text-sm text-white/60">User interviews, contextual inquiry, diary studies, competitive analysis</p>
                  </div>
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Participants</h4>
                    <p className="text-sm text-white/60">12 users across social media managers, agencies, and business owners</p>
                  </div>
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Key Finding</h4>
                    <p className="text-sm text-white/60">Calendar-first design with integrated approval workflows is essential</p>
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

          {/* User Personas */}
          <div>
            <h3 className="text-2xl mb-6 text-[#6A0DAD]">User Personas</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-[#6A0DAD]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTk1MTY5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Sarah Martinez"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="mb-2">Sarah Martinez</h4>
                <p className="text-[#6A0DAD] mb-4">Social Media Manager</p>
                <p className="text-white/60 mb-6">
                  Manages social media for 3-5 agency clients. Needs efficient scheduling, approval workflows, and performance tracking.
                </p>
                <div>
                  <p className="mb-3">Goals:</p>
                  <ul className="space-y-2 text-white/60">
                    <li>• Save time on repetitive tasks</li>
                    <li>• Streamline client approvals</li>
                    <li>• Track performance metrics</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-[#6A0DAD]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE5NTE2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="James Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="mb-2">James Chen</h4>
                <p className="text-[#6A0DAD] mb-4">Small Business Owner</p>
                <p className="text-white/60 mb-6">
                  Runs a local cafe and manages social media himself. Looking for a simple, affordable solution.
                </p>
                <div>
                  <p className="mb-3">Goals:</p>
                  <ul className="space-y-2 text-white/60">
                    <li>• Easy to use interface</li>
                    <li>• Affordable pricing</li>
                    <li>• Schedule posts in advance</li>
                  </ul>
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
                  I organized the platform into five main sections based on user workflows, task frequency, and mental models:
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Dashboard</h4>
                    <p className="text-sm text-white/60">Overview of scheduled posts, recent activity, and performance highlights</p>
                  </div>
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Schedule</h4>
                    <p className="text-sm text-white/60">Calendar view for planning and managing content across platforms</p>
                  </div>
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Create</h4>
                    <p className="text-sm text-white/60">Content creation with media library and caption tools</p>
                  </div>
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Approve</h4>
                    <p className="text-sm text-white/60">Team collaboration and multi-level approval workflows</p>
                  </div>
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Analytics</h4>
                    <p className="text-sm text-white/60">Performance metrics, insights, and exportable reports</p>
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
                  <h4 className="mb-3">Calendar-First Approach</h4>
                  <p className="text-white/60 mb-4">
                    User testing revealed that 78% of users prefer a visual calendar as their primary workspace. I designed the calendar as the central hub with drag-and-drop scheduling, color-coded campaigns, and thumbnail previews to make content planning intuitive and enjoyable.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-white/60"><span className="text-[#6A0DAD]">Impact:</span> 52% reduction in scheduling errors and 35% faster content planning</p>
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
                  <h4 className="mb-3">Integrated Approval Workflow</h4>
                  <p className="text-white/60 mb-4">
                    Agency users identified approval bottlenecks as their #1 pain point. I designed a streamlined approval system with commenting, version history, and notification controls built directly into the content creation flow, eliminating the need for email chains and screenshots.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-white/60"><span className="text-[#6A0DAD]">Impact:</span> 50% faster approval cycles and 68% reduction in back-and-forth communication</p>
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
                  <h4 className="mb-3">Simplified Navigation</h4>
                  <p className="text-white/60 mb-4">
                    Competitive analysis showed that users found existing tools overwhelming with too many features competing for attention. I implemented a clean, focused navigation with only 5 main sections and progressive disclosure of advanced features, reducing cognitive load while maintaining power user capabilities.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-white/60"><span className="text-[#6A0DAD]">Impact:</span> 85% task completion rate and 4.8/5 ease-of-use rating</p>
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
                  <h4 className="mb-3">Actionable Analytics</h4>
                  <p className="text-white/60 mb-4">
                    Users expressed frustration with "vanity metrics" that didn't help them improve. I designed analytics dashboards that highlight trends, provide recommendations, and connect directly to content performance, helping users understand not just what happened, but why and what to do next.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-white/60"><span className="text-[#6A0DAD]">Impact:</span> 30% improvement in average post engagement through data-driven insights</p>
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
                  <h4 className="mb-2">User Testing is Non-Negotiable</h4>
                  <p className="text-white/60">Early and frequent testing helped identify usability issues before they became costly to fix. The calendar-first approach emerged directly from user feedback, and it became our strongest feature. This reinforced my belief that assumptions must always be validated with real users.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#6A0DAD] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">2</span>
                </div>
                <div>
                  <h4 className="mb-2">Simplicity Wins Over Feature Lists</h4>
                  <p className="text-white/60">Users consistently preferred a clean interface with essential features over a feature-heavy platform that tried to do everything. This taught me the importance of ruthless prioritization and progressive disclosure—show users what they need when they need it, and keep advanced features accessible but not overwhelming.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#6A0DAD] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">3</span>
                </div>
                <div>
                  <h4 className="mb-2">Design for Multiple Contexts</h4>
                  <p className="text-white/60">Understanding the different use cases between solo entrepreneurs and marketing agencies led to a more flexible design that serves both audiences without compromising on either. This required careful consideration of permissions, workflows, and scalability from the start rather than trying to bolt them on later.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#6A0DAD] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">4</span>
                </div>
                <div>
                  <h4 className="mb-2">Workflow Integration Matters Most</h4>
                  <p className="text-white/60">The biggest wins came from integrating features that typically required switching tools—like approvals and analytics—directly into the primary workflow. Users don't want to context-switch, and reducing friction at these critical moments created the most value and drove the highest satisfaction scores.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-12 bg-gradient-to-br from-[#6A0DAD]/10 to-transparent rounded-2xl p-8 md:p-12 border border-[#6A0DAD]/20">
            <h3 className="text-2xl mb-6">Future Enhancements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <span className="text-[#6A0DAD] flex-shrink-0">→</span>
                <div>
                  <h4 className="mb-1">AI Content Assistant</h4>
                  <p className="text-white/60 text-sm">Develop AI-powered caption suggestions and content recommendations based on brand voice and performance history</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-[#6A0DAD] flex-shrink-0">→</span>
                <div>
                  <h4 className="mb-1">Advanced Team Features</h4>
                  <p className="text-white/60 text-sm">Expand collaboration with role templates, custom workflows, and team performance dashboards</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-[#6A0DAD] flex-shrink-0">→</span>
                <div>
                  <h4 className="mb-1">Content Library</h4>
                  <p className="text-white/60 text-sm">Build a centralized asset management system with smart tagging, search, and brand asset controls</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-[#6A0DAD] flex-shrink-0">→</span>
                <div>
                  <h4 className="mb-1">Platform Expansion</h4>
                  <p className="text-white/60 text-sm">Add support for emerging platforms like TikTok, Pinterest, and YouTube Shorts</p>
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
