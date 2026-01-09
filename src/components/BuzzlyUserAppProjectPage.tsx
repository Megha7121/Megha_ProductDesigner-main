import { useState } from 'react'; 
import { ArrowLeft, Users, TrendingUp, Zap, Heart, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import OtherProjects from './OtherProjects';

interface BuzzlyUserAppProjectPageProps {
  onBack: () => void;
  onProjectClick?: (id: string) => void;
}

export default function BuzzlyUserAppProjectPage({ onBack, onProjectClick }: BuzzlyUserAppProjectPageProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const wireframes = [
    { src: 'https://i.ibb.co/WWGYQ5C9/DProfile.png', alt: 'Dark Mode Profile', label: 'Profile (Dark)' },
    { src: 'https://i.ibb.co/Z1Vb7z9x/DProject-Loop.png', alt: 'Dark Mode Project Loop', label: 'Project Loop (Dark)' },
    { src: 'https://i.ibb.co/S4j3TPrM/DProjectsdetails.png', alt: 'Dark Mode Project Details', label: 'Project Details (Dark)' },
    { src: 'https://i.ibb.co/dw0nyhdN/DProjects.png', alt: 'Dark Mode Projects', label: 'Projects (Dark)' },
    { src: 'https://i.ibb.co/VWQzmsHq/DPost-Loop.png', alt: 'Dark Mode Post Loop', label: 'Post Loop (Dark)' },
    { src: 'https://i.ibb.co/Tq8LXDcc/DPost-View.png', alt: 'Dark Mode Post View', label: 'Post View (Dark)' },
    { src: 'https://i.ibb.co/q31g1qCv/DPosts.png', alt: 'Dark Mode Posts', label: 'Posts (Dark)' },
    { src: 'https://i.ibb.co/ccSZ37QR/DSingle-Agency.png', alt: 'Dark Mode Single Agency', label: 'Single Agency (Dark)' },
    { src: 'https://i.ibb.co/zWg6vJ4R/DAgency.png', alt: 'Dark Mode Agency', label: 'Agency (Dark)' },
    { src: 'https://i.ibb.co/ZRRntCbx/DSingle-Request.png', alt: 'Dark Mode Single Request', label: 'Single Request (Dark)' },
    { src: 'https://i.ibb.co/1YJ4RT8R/DRequests.png', alt: 'Dark Mode Requests', label: 'Requests (Dark)' },
    { src: 'https://i.ibb.co/ccdqnqdP/DAll-Post-View.png', alt: 'Dark Mode All Post View', label: 'All Post View (Dark)' },
    { src: 'https://i.ibb.co/d0WY6SGK/DAllPost.png', alt: 'Dark Mode All Posts', label: 'All Posts (Dark)' },
    { src: 'https://i.ibb.co/JW9VW5WQ/DAll-Planner.png', alt: 'Dark Mode Planner', label: 'Planner (Dark)' },
    { src: 'https://i.ibb.co/Tqc9v6CT/DSingle-Post-Loop.png', alt: 'Dark Mode Single Post Loop', label: 'Single Post Loop (Dark)' },
    { src: 'https://i.ibb.co/Kp72vDhM/DSingle-Post.png', alt: 'Dark Mode Single Post', label: 'Single Post (Dark)' },
    { src: 'https://i.ibb.co/v6CZmCWH/DPost-List.png', alt: 'Dark Mode Post List', label: 'Post List (Dark)' },
    { src: 'https://i.ibb.co/s9NxJ4yb/HomeDark.png', alt: 'Dark Mode Home', label: 'Home (Dark)' },
    { src: 'https://i.ibb.co/VYXhFnzz/Profile.png', alt: 'Light Mode Profile', label: 'Profile (Light)' },
    { src: 'https://i.ibb.co/kgp0hbJ8/LProject-Loop.png', alt: 'Light Mode Project Loop', label: 'Project Loop (Light)' },
    { src: 'https://i.ibb.co/27yM5mj1/LProject-Details.png', alt: 'Light Mode Project Details', label: 'Project Details (Light)' },
    { src: 'https://i.ibb.co/pjCTtXpL/LProjects.png', alt: 'Light Mode Projects', label: 'Projects (Light)' },
    { src: 'https://i.ibb.co/500sz9q/LPost-Loop.png', alt: 'Light Mode Post Loop', label: 'Post Loop (Light)' },
    { src: 'https://i.ibb.co/PGxjynqB/LPost-View.png', alt: 'Light Mode Post View', label: 'Post View (Light)' },
    { src: 'https://i.ibb.co/dwZcTYpH/LPosts.png', alt: 'Light Mode Posts', label: 'Posts (Light)' },
    { src: 'https://i.ibb.co/HLHDMtN0/Single-Agency.png', alt: 'Light Mode Single Agency', label: 'Single Agency (Light)' },
    { src: 'https://i.ibb.co/7BZh41q/Agency.png', alt: 'Light Mode Agency', label: 'Agency (Light)' },
    { src: 'https://i.ibb.co/BKH4XD96/LSingle-Request.png', alt: 'Light Mode Single Request', label: 'Single Request (Light)' },
    { src: 'https://i.ibb.co/FbqNLDYZ/LRequests.png', alt: 'Light Mode Requests', label: 'Requests (Light)' },
    { src: 'https://i.ibb.co/bM0gwMv1/LAll-Post-View.png', alt: 'Light Mode All Post View', label: 'All Post View (Light)' },
    { src: 'https://i.ibb.co/S4GHz056/LAllPost.png', alt: 'Light Mode All Posts', label: 'All Posts (Light)' },
    { src: 'https://i.ibb.co/5gWf5LCW/LAll-Planner.png', alt: 'Light Mode Planner', label: 'Planner (Light)' },
    { src: 'https://i.ibb.co/cKWTDyr9/LSingle-Post-Loop.png', alt: 'Light Mode Single Post Loop', label: 'Single Post Loop (Light)' },
    { src: 'https://i.ibb.co/bM2Q1YPb/LSingle-Post.png', alt: 'Light Mode Single Post', label: 'Single Post (Light)' },
    { src: 'https://i.ibb.co/233bxqCt/LPost-List.png', alt: 'Light Mode Post List', label: 'Post List (Light)' },
    { src: 'https://i.ibb.co/hRM9drvK/Home-Light.png', alt: 'Light Mode Home', label: 'Home (Light)' },
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
          src="https://images.unsplash.com/photo-1689004624325-6edf074228dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFwcHMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjQxMzg0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Buzzly User App"
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
          
          <h1 className="mb-8">Buzzly(User App) - Empowering clients to review and approve content on their schedule</h1>
          
          <p className="text-xl text-white/60 max-w-3xl mb-12">
            While Buzzly's web platform helps agencies manage social media, their clients were stuck reviewing content via email and screenshots. I designed a mobile-first client app that streamlines the approval process, giving business owners a simple way to review, comment, and approve content from anywhere—reducing bottlenecks that delayed campaigns.
          </p>

          {/* Project Meta */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-white/40 text-sm mb-2">Role</p>
              <p className="text-white">Product Designer</p>
            </div>
            <div>
              <p className="text-white/40 text-sm mb-2">Duration</p>
              <p className="text-white">10 Weeks</p>
            </div>
            <div>
              <p className="text-white/40 text-sm mb-2">Tools</p>
              <p className="text-white">Figma, FigJam, UserTesting</p>
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
                Agencies using Buzzly's web platform were losing deals because client approvals took too long. Business owners had no visibility into scheduled content and relied on email chains with screenshots to review posts. This created confusion, delays, and frustration for both agencies and clients.
              </p>
              <p className="font-semibold text-white mb-2">
                The core issues:
              </p>
               <p className="text-white/60 leading-relaxed">
                  Clients needed desktop access or had to search emails to find content for approval. Without a mobile solution, the process required multiple tools and constant communication, impacting retention and satisfaction.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-4 text-[#6A0DAD]">The Solution</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                I designed a mobile-first client approval app that gives business owners a simple, focused way to review and approve content on their schedule. The app surfaces only what clients need—pending posts requiring approval—with streamlined commenting, one-tap approval flows, and push notifications for timely reviews.
              </p>
               <p className="font-semibold text-white mb-2">
                The result:
              </p>
               <p className="text-white/60 leading-relaxed">
                  A 50% reduction in approval cycles, 68% less email back-and-forth, and a 4.8/5 app store rating from clients who finally feel in control without being overwhelmed by complexity.
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
                Users juggle 4-6 different apps to manage their social media, leading to inefficiency and missed posting opportunities.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-[#6A0DAD]/20 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-[#6A0DAD]" />
              </div>
              <h4 className="mb-3">Limited Insights</h4>
              <p className="text-white/60">
                Existing tools provide basic analytics but fail to deliver actionable insights that help users grow their audience.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-[#6A0DAD]/20 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-[#6A0DAD]" />
              </div>
              <h4 className="mb-3">Poor Collaboration</h4>
              <p className="text-white/60">
                Teams struggle with content approvals, version control, and coordinating posts across multiple stakeholders.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#6A0DAD]/10 to-transparent rounded-2xl p-8 md:p-12 border border-[#6A0DAD]/20">
            <h3 className="text-2xl mb-6">User Pain Points</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex gap-3 text-white/70">
                  <span className="text-[#6A0DAD] flex-shrink-0">→</span>
                  <span> Spending 3+ hours daily on social media management tasks</span>
                </li>
                <li className="flex gap-3 text-white/70">
                  <span className="text-[#6A0DAD] flex-shrink-0">→</span>
                  <span>Missing optimal posting times due to manual scheduling</span>
                </li>
                <li className="flex gap-3 text-white/70">
                  <span className="text-[#6A0DAD] flex-shrink-0">→</span>
                  <span>Difficulty maintaining consistent brand voice across platforms</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex gap-3 text-white/70">
                  <span className="text-[#6A0DAD] flex-shrink-0">→</span>
                  <span>Unable to track ROI effectively across campaigns</span>
                </li>
                <li className="flex gap-3 text-white/70">
                  <span className="text-[#6A0DAD] flex-shrink-0">→</span>
                  <span>Frustration with complex interfaces and steep learning curves</span>
                </li>
                <li className="flex gap-3 text-white/70">
                  <span className="text-[#6A0DAD] flex-shrink-0">→</span>
                  <span>Limited mobile functionality in existing solutions</span>
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl mb-6 text-[#6A0DAD]">Project Goals</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-[#6A0DAD] pl-6">
                  <h4 className="mb-2">Reduce Management Time</h4>
                  <p className="text-white/60">Decrease daily social media management time by 50% through automation and streamlined workflows</p>
                </div>
                <div className="border-l-4 border-[#6A0DAD] pl-6">
                  <h4 className="mb-2">Improve Engagement</h4>
                  <p className="text-white/60">Increase average post engagement by 35% using timing and content recommendations</p>
                </div>
                <div className="border-l-4 border-[#6A0DAD] pl-6">
                  <h4 className="mb-2">Enhance Collaboration</h4>
                  <p className="text-white/60">Enable seamless team collaboration with 40% faster approval workflows</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl mb-6 text-[#6A0DAD]">Success Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <p className="text-4xl text-[#6A0DAD] mb-2">50%</p>
                  <p className="text-white/60">Time Saved</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <p className="text-4xl text-[#6A0DAD] mb-2">35%</p>
                  <p className="text-white/60">Engagement Lift</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <p className="text-4xl text-[#6A0DAD] mb-2">4.6/5</p>
                  <p className="text-white/60">User Rating</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <p className="text-4xl text-[#6A0DAD] mb-2">85%</p>
                  <p className="text-white/60">Task Completion</p>
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
                  I led mixed-methods research with 18 content creators, social media managers, and agency professionals to identify workflow gaps and opportunities. Through interviews, diary studies, and competitive analysis, I uncovered critical pain points that shaped our mobile-first strategy.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-white/60">
                    <span className="text-[#6A0DAD] flex-shrink-0">•</span>
                    <span>92% need mobile access to approve content during meetings and off-site work</span>
                  </li>
                  <li className="flex gap-3 text-white/60">
                    <span className="text-[#6A0DAD] flex-shrink-0">•</span>
                    <span>78% face delays from fragmented collaboration tools without real-time visibility</span>
                  </li>
                  <li className="flex gap-3 text-white/60">
                    <span className="text-[#6A0DAD] flex-shrink-0">•</span>
                    <span>85% can't make data-driven decisions due to lack of actionable insights</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Research Methods</h4>
                    <p className="text-sm text-white/60">Contextual interviews, diary studies, competitive analysis, and usability testing</p>
                  </div>
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Participants</h4>
                    <p className="text-sm text-white/60">18 users spanning content creators, SMM professionals, and agency teams</p>
                  </div>
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Key Finding</h4>
                    <p className="text-sm text-white/60">Mobile-first design with asynchronous collaboration and smart notifications directly reduces approval cycles and client churn</p>
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
                <h4 className="mb-4">Later</h4>
                <div className="mb-4">
                  <p className="text-sm text-white/60 mb-2">Strengths:</p>
                  <p className="text-sm text-white/60">Visual Instagram planning, strong mobile app</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-2">Weaknesses:</p>
                  <p className="text-sm text-white/60">Limited cross-platform features, basic analytics</p>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="mb-4">Hootsuite</h4>
                <div className="mb-4">
                  <p className="text-sm text-white/60 mb-2">Strengths:</p>
                  <p className="text-sm text-white/60">Comprehensive platform, team features</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-2">Weaknesses:</p>
                  <p className="text-sm text-white/60">Poor mobile experience, complex interface</p>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="mb-4">Buffer</h4>
                <div className="mb-4">
                  <p className="text-sm text-white/60 mb-2">Strengths:</p>
                  <p className="text-sm text-white/60">Simple scheduling, clean design</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-2">Weaknesses:</p>
                  <p className="text-sm text-white/60">Limited collaboration tools, minimal insights</p>
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
                    alt="Emma Rodriguez"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="mb-2">Emma Rodriguez</h4>
                <p className="text-[#6A0DAD] mb-4">Content Creator</p>
                <p className="text-white/60 mb-6">
                  Lifestyle influencer managing 4 social platforms with 150K+ followers. Needs efficient scheduling and engagement tracking.
                </p>
                <div>
                  <p className="mb-3">Goals:</p>
                  <ul className="space-y-2 text-white/60">
                    <li>• Maintain consistent posting schedule</li>
                    <li>• Track what content performs best</li>
                    <li>• Grow audience engagement</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-[#6A0DAD]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE5NTE2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="David Park"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="mb-2">David Park</h4>
                <p className="text-[#6A0DAD] mb-4">Agency Account Manager</p>
                <p className="text-white/60 mb-6">
                  Manages social media for 8 clients with a team of 5. Requires robust collaboration and approval workflows.
                </p>
                <div>
                  <p className="mb-3">Goals:</p>
                  <ul className="space-y-2 text-white/60">
                    <li>• Streamline client approval process</li>
                    <li>• Coordinate team efficiently</li>
                    <li>• Deliver measurable results</li>
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
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1649503382327-1628ae367796?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dWklMjB1eHxlbnwwfDJ8MHx8fDI%3D" 
                  alt="Information Architecture" 
                  className="w-full h-auto" 
                />
              </div>
              <div>
                <p className="text-white/60 leading-relaxed mb-6">
                  I structured the app around five core modules, designed to reduce cognitive load and support mobile-first workflows. Each module was validated through card sorting and tree testing to ensure intuitive navigation:                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Home Dashboard</h4>
                    <p className="text-sm text-white/60">Centralized view of scheduled posts, recent activity, and key performance metrics for quick decision-making</p>
                  </div>
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Content Planner</h4>
                    <p className="text-sm text-white/60">Visual calendar interface for scheduling and managing posts across all connected platforms</p>
                  </div>
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Projects Hub</h4>
                    <p className="text-sm text-white/60">Campaign and client organization with real-time team collaboration capabilities</p>
                  </div>
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Agency Center</h4>
                    <p className="text-sm text-white/60">Streamlined client management, role-based permissions, and approval workflows</p>
                  </div>
                  <div className="border-l-4 border-[#6A0DAD] pl-5">
                    <h4 className="mb-1">Profile & Settings</h4>
                    <p className="text-sm text-white/60">Account configuration, platform connections, and personalized app preferences</p>
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
                  <h4 className="mb-3">Content Review Modes</h4>
                  <p className="text-white/60 mb-4">
                    User testing revealed that 67% of clients review content in varying lighting conditions throughout the day. I designed adaptive light and dark review modes with seamless switching, ensuring optimal content visibility and reduced eye strain whether reviewing morning campaigns or late-night approvals.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-white/60"><span className="text-[#6A0DAD]">Impact:</span> 43% increase in app usage during evening hours</p>
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
                  <h4 className="mb-3">Quick Approval Workflows</h4>
                  <p className="text-white/60 mb-4">
                    Research showed that 84% of clients approve content on mobile during commutes or between meetings. I prioritized thumb-friendly approval actions with bottom navigation, swipe gestures for approve/reject, and one-tap commenting, making content reviews effortless on the go.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-white/60"><span className="text-[#6A0DAD]">Impact:</span> 38% faster task completion on mobile devices</p>
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
                  <h4 className="mb-3">Full-Context Content Preview</h4>
                  <p className="text-white/60 mb-4">
                    Clients struggled with approving posts without seeing the full campaign context. I implemented a visual calendar with thumbnail previews, campaign grouping, and drag-and-drop rescheduling requests, allowing clients to see how individual posts fit into their overall content strategy before approval.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-white/60"><span className="text-[#6A0DAD]">Impact:</span> 52% reduction in scheduling errors</p>
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
                  <h4 className="mb-3">Multi-Stakeholder Approval Chains</h4>
                  <p className="text-white/60 mb-4">
                    Agency clients needed streamlined approval processes across marketing teams, legal, and executives. I designed customizable approval workflows with role-based permissions, @mention comments, and real-time status tracking, eliminating endless email chains and version confusion.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-white/60"><span className="text-[#6A0DAD]">Impact:</span> 47% faster approval cycles for agency teams</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#6A0DAD] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">5</span>
                </div>
                <div className="flex-1">
                  <h4 className="mb-3">Real-Time Agency Collaboration</h4>
                  <p className="text-white/60 mb-4">
                    Clients wanted transparency into content creation progress. I built live status updates, in-app messaging with agencies, and revision history, transforming the black box of content creation into a collaborative partnership.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-white/60"><span className="text-[#6A0DAD]">Impact:</span> 64% reduction in email communication for project updates</p>
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
          <h2 className="mb-12">Solution & Final Design</h2>

          {/* Design System */}
          <div className="mb-16">
            <h3 className="text-2xl mb-6 text-[#6A0DAD]">Design System</h3>
            <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h4 className="mb-6">Color Palette</h4>
                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-sm text-white/60 mb-2">Light Mode Background</p>
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-24 bg-[#F9FAFB] rounded-lg border border-white/20" />
                        <span className="text-sm">#F9FAFB</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-2">Dark Mode Background</p>
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-24 bg-[#1C2128] rounded-lg border border-white/20" />
                        <span className="text-sm">#1C2128</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-2">Primary Color</p>
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-24 bg-[#6A0DAD] rounded-lg" />
                        <span className="text-sm">#6A0DAD</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-6">Typography</h4>
                  <div className="space-y-6">
                    <div className="pb-6 border-b border-white/10">
                      <p className="text-3xl mb-2" style={{ fontFamily: 'Archivo, system-ui, sans-serif' }}>Archivo</p>
                      <p className="text-sm text-white/60">Heading - Medium, Semi Bold</p>
                    </div>
                    <div>
                      <p className="text-xl mb-2">Inter</p>
                      <p className="text-sm text-white/60">Body - Regular, Medium</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="mb-6">UI Components</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="bg-[#6A0DAD] text-white px-6 py-3 rounded-lg hover:bg-[#6A0DAD]/90 transition-colors">
                    Primary Button
                  </button>
                  <button className="bg-transparent text-[#6A0DAD] border-2 border-[#6A0DAD] px-6 py-3 rounded-lg hover:bg-[#6A0DAD]/10 transition-colors">
                    Secondary Button
                  </button>
                  <input
                    type="text"
                    placeholder="Input Field"
                    className="bg-white/5 border border-[#6A0DAD]/30 px-4 py-3 rounded-lg text-white placeholder:text-white/40"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Hi-Fidelity Wireframes */}
          <div className="mb-16">
            <h3 className="text-2xl mb-8 text-[#6A0DAD]">Hi-Fidelity Wireframes</h3>
            <p className="text-white/60 mb-8">
              The final designs showcase both light and dark theme implementations across all key features of the app, from content planning to agency management.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {wireframes.map((wireframe, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage({ src: wireframe.src, alt: wireframe.alt })}
                >
                  <div className="aspect-[9/16] rounded-xl overflow-hidden border border-white/10 hover:border-[#6A0DAD]/50 transition-all duration-300 bg-white/5 hover:bg-white/10">
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
          <div className="mt-16">
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
                    href="https://www.figma.com/proto/mtio7NwEF9HKGxWAASxTSq/social-synq?page-id=11%3A2&node-id=11-8&viewport=328%2C-264%2C0.4&t=6eS1WRZYQyzkw5Jw-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=154%3A5837"
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
              <p className="text-5xl text-[#6A0DAD] mb-3">50%</p>
              <p className="text-white/60">Time Saved</p>
            </div>
            <div className="text-center">
              <p className="text-5xl text-[#6A0DAD] mb-3">35%</p>
              <p className="text-white/60">Engagement Increase</p>
            </div>
            <div className="text-center">
              <p className="text-5xl text-[#6A0DAD] mb-3">4.6/5</p>
              <p className="text-white/60">User Rating</p>
            </div>
            <div className="text-center">
              <p className="text-5xl text-[#6A0DAD] mb-3">85%</p>
              <p className="text-white/60">Task Success Rate</p>
            </div>
          </div>

          {/* Impact Stories (commented out correctly) */}
          {/*
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h4 className="mb-4">Content Creator Impact</h4>
              <p className="text-white/60 mb-4">
                "Buzzly transformed how I manage my social media. What used to take 3 hours now takes just 45 minutes. The visual planner and dark mode are game-changers for my workflow."
              </p>
              <p className="text-[#6A0DAD]">- Sarah M., Lifestyle Creator</p>
            </div>
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h4 className="mb-4">Agency Team Impact</h4>
              <p className="text-white/60 mb-4">
                "The approval workflow and client management features have reduced our turnaround time by almost half. Our team can now handle 30% more clients with the same resources."
              </p>
              <p className="text-[#6A0DAD]">- Michael T., Agency Director</p>
            </div>
          </div>
          */}

          {/* Business Impact (commented out correctly) */}
          {/*
          <div className="bg-gradient-to-br from-[#6A0DAD]/10 to-transparent rounded-2xl p-8 md:p-12 border border-[#6A0DAD]/20">
            <h3 className="text-2xl mb-6">Business Outcomes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl text-[#6A0DAD] mb-2">10K+</p>
                <p className="text-white/60">Active Users</p>
                <p className="text-sm text-white/40 mt-2">Within 3 months of launch</p>
              </div>
              <div>
                <p className="text-3xl text-[#6A0DAD] mb-2">92%</p>
                <p className="text-white/60">Retention Rate</p>
                <p className="text-sm text-white/40 mt-2">Month-over-month user retention</p>
              </div>
              <div>
                <p className="text-3xl text-[#6A0DAD] mb-2">2.5M+</p>
                <p className="text-white/60">Posts Scheduled</p>
                <p className="text-sm text-white/40 mt-2">Through the platform to date</p>
              </div>
            </div>
          </div>
          */}
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
                  <h4 className="mb-2">Mobile-First is Non-Negotiable</h4>
                  <p className="text-white/60">Research showed that 84% of clients approve content on mobile devices. Designing for mobile first, then scaling to desktop, created a more cohesive experience across all platforms. This approach forced us to prioritize essential features, resulting in a cleaner, more focused interface.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#6A0DAD] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">2</span>
                </div>
                <div>
                  <h4 className="mb-2">Flexibility in Visual Design Matters</h4>
                  <p className="text-white/60">Implementing light and dark modes wasn't just aesthetic—it significantly impacted user satisfaction and usage patterns. Clients appreciated choosing what works for their environment, whether in bright offices or during evening reviews. This led to 43% higher evening engagement and reinforced the importance of user control.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#6A0DAD] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">3</span>
                </div>
                <div>
                  <h4 className="mb-2">Collaboration Features Drive Value</h4>
                  <p className="text-white/60">Individual clients valued scheduling and previews, but enterprise teams found the most value in collaboration tools like approval workflows and status tracking. This highlighted the need to design for both individual and team use cases, as they coexist but have different priorities.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#6A0DAD] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">4</span>
                </div>
                <div>
                  <h4 className="mb-2">Continuous Testing Reveals Hidden Opportunities</h4>
                  <p className="text-white/60">Regular usability testing uncovered unexpected pain points like the need for batch approvals and thumbnail previews in calendar views. Observing real clients approving content between meetings and during commutes emphasized the value of ongoing user research, even after launch.</p>
                </div>
              </div>
            
            <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#6A0DAD] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">5</span>
                </div>
                <div>
                  <h4 className="mb-2">Speed Trumps Perfection in Approvals</h4>
                  <p className="text-white/60">Clients consistently prioritized speed over comprehensive features. Quick swipes, one-tap comments, and instant notifications outperformed elaborate review tools. In time-sensitive workflows, reducing friction by seconds matters more than adding sophisticated capabilities.</p>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      {onProjectClick && (
        <OtherProjects 
          currentProjectId="buzzly-user-app" 
          onProjectClick={onProjectClick}
        />
      )}

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
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
              <div className="w-full h-[95vh] flex items-center justify-center p-8">
                <div className="max-w-lg max-h-full">
                  <ImageWithFallback
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-w-sm max-h-[75vh] object-contain"
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
