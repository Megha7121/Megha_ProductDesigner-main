import { useState } from 'react';
import { ArrowLeft, Zap, Battery, Globe, TrendingUp, Users, Target, X } from 'lucide-react';
import revolvImage from 'figma:asset/d72e16b6ca96440ea8c228c1ef8bafe474daa383.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import OtherProjects from './OtherProjects';

interface RevolvProjectPageProps {
  onBack: () => void;
  onProjectClick?: (id: string) => void;
}

export default function RevolvProjectPage({ onBack, onProjectClick }: RevolvProjectPageProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const wireframes = [
    { src: 'https://i.ibb.co/XkDTRvZJ/Home.png', alt: 'Home Page Wireframe', label: 'Home' },
    { src: 'https://i.ibb.co/KBXkQDb/About-us.png', alt: 'About Us Page Wireframe', label: 'About Us' },
    { src: 'https://i.ibb.co/1GVGL5Rz/Features.png', alt: 'Features Page Wireframe', label: 'Features' },
    { src: 'https://i.ibb.co/WWC9CxV1/Solutions.png', alt: 'Solutions Page Wireframe', label: 'Solutions' },
    { src: 'https://i.ibb.co/WWcmDC98/Technology.png', alt: 'Technology Page Wireframe', label: 'Technology' },
    { src: 'https://i.ibb.co/MDJKyPBn/Case-studies.png', alt: 'Case Studies Page Wireframe', label: 'Case Studies' },
    { src: 'https://i.ibb.co/5xWSWd31/Blogs.png', alt: 'Blogs Page Wireframe', label: 'Blogs' },
    { src: 'https://i.ibb.co/bjz0yN3y/Single-Blog.png', alt: 'Single Blog Page Wireframe', label: 'Single Blog' },
    { src: 'https://i.ibb.co/PZSrjNJg/Support-center.png', alt: 'Support Center Page Wireframe', label: 'Support Center' },
    { src: 'https://i.ibb.co/fdF2hHWM/Contact.png', alt: 'Contact Page Wireframe', label: 'Contact' },
    { src: 'https://i.ibb.co/xK9L5R0k/Security.png', alt: 'Security Page Wireframe', label: 'Security' },
    { src: 'https://i.ibb.co/CKwj7qcF/Compliance.png', alt: 'Compliance Page Wireframe', label: 'Compliance' },
    { src: 'https://i.ibb.co/BVJnCWmz/Legal.png', alt: 'Legal Page Wireframe', label: 'Legal' },
    { src: 'https://i.ibb.co/Z6j1Wt4w/System-status.png', alt: 'System Status Page Wireframe', label: 'System Status' },
    { src: 'https://i.ibb.co/qLVYhFNj/App-Content.png', alt: 'FAQ Page Wireframe', label: 'FAQ' },
    { src: 'https://i.ibb.co/rKWhKQVQ/Coming-soon.png', alt: 'Coming Soon Page Wireframe', label: 'Coming Soon' },
    { src: 'https://i.ibb.co/j9Zxwx5Z/404.png', alt: '404 Page Wireframe', label: '404 Page' },
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
          src="https://images.unsplash.com/photo-1619913387719-a43ee8859d9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBjaGFyZ2luZyUyMHN0YXRpb258ZW58MXx8fHwxNzYyMTAwOTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Revolv EV charging platform"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]"></div>
      </section>

      {/* Hero Section */}
      <section className="pt-12 pb-20 px-6 md:px-12 lg:px-24 border-b border-white/5 relative -mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <span className="text-[#03FF68]">Case Study 2024</span>
          </div>
          
          <h1 className="mb-8">Revolv</h1>
          
          <p className="text-xl text-white/60 max-w-3xl mb-12">
            A comprehensive EV charging platform designed to revolutionize electric mobility infrastructure. Revolv connects charging station operators, fleet managers, and EV drivers through a unified ecosystem that drives measurable impact.
          </p>

          {/* Project Meta */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-white/40 text-sm mb-2">Role</p>
              <p className="text-white">Product Designer</p>
            </div>
            <div>
              <p className="text-white/40 text-sm mb-2">Duration</p>
              <p className="text-white">12 Weeks</p>
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
              <h3 className="text-2xl mb-4 text-[#03FF68]">The Challenge</h3>
              <p className="text-white/60 leading-relaxed">
                The electric vehicle charging infrastructure faces fragmentation—operators struggle with managing stations efficiently, drivers can't easily find reliable charging points, and fleet managers lack visibility into charging operations. This creates friction in EV adoption and hinders the transition to sustainable mobility.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-4 text-[#03FF68]">The Solution</h3>
              <p className="text-white/60 leading-relaxed">
                Revolv provides a unified platform that connects all stakeholders in the EV charging ecosystem. With real-time monitoring, intelligent operations management, and comprehensive analytics, the platform streamlines station operations while delivering reliable charging experiences that accelerate EV adoption.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl mb-8">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#03FF68] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">Real-Time Monitoring</h4>
                  <p className="text-white/60">Live station status, performance metrics, and instant alerts for operators</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#03FF68] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">Operations Center</h4>
                  <p className="text-white/60">Streamlined maintenance scheduling and incident management workflows</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#03FF68] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">Analytics Hub</h4>
                  <p className="text-white/60">Revenue tracking, usage patterns, and optimization insights</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#03FF68] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">Fleet Management</h4>
                  <p className="text-white/60">Comprehensive tools for managing electric vehicle fleets</p>
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
            <h3 className="text-2xl mb-6 text-[#03FF68]">User Research</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-white/60 leading-relaxed mb-6">
                  I conducted extensive research with charging station operators, fleet managers, and EV infrastructure companies to understand the challenges in the current ecosystem. The research included 15 stakeholder interviews and analysis of existing platforms.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-white/60">
                    <span className="text-[#03FF68] flex-shrink-0">•</span>
                    <span>78% of operators struggle with real-time visibility into station performance</span>
                  </li>
                  <li className="flex gap-3 text-white/60">
                    <span className="text-[#03FF68] flex-shrink-0">•</span>
                    <span>65% face challenges coordinating maintenance across multiple locations</span>
                  </li>
                  <li className="flex gap-3 text-white/60">
                    <span className="text-[#03FF68] flex-shrink-0">•</span>
                    <span>82% lack comprehensive analytics for optimization decisions</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-[#03FF68] pl-5">
                    <h4 className="mb-1">Station Downtime</h4>
                    <p className="text-sm text-white/60">Average 18% downtime due to delayed maintenance response</p>
                  </div>
                  <div className="border-l-4 border-[#03FF68] pl-5">
                    <h4 className="mb-1">Management Time</h4>
                    <p className="text-sm text-white/60">Operators spend 3+ hours daily managing station issues</p>
                  </div>
                  <div className="border-l-4 border-[#03FF68] pl-5">
                    <h4 className="mb-1">Data Fragmentation</h4>
                    <p className="text-sm text-white/60">Information scattered across 4-6 different systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Competitive Analysis */}
          <div className="mb-16">
            <h3 className="text-2xl mb-6 text-[#03FF68]">Competitive Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="mb-4">ChargePoint</h4>
                <div className="mb-4">
                  <p className="text-sm text-white/60 mb-2">Strengths:</p>
                  <p className="text-sm text-white/60">Large network, established platform</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-2">Weaknesses:</p>
                  <p className="text-sm text-white/60">Limited customization, high costs</p>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="mb-4">EVBox</h4>
                <div className="mb-4">
                  <p className="text-sm text-white/60 mb-2">Strengths:</p>
                  <p className="text-sm text-white/60">Good hardware integration</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-2">Weaknesses:</p>
                  <p className="text-sm text-white/60">Basic analytics, dated interface</p>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="mb-4">Greenlots</h4>
                <div className="mb-4">
                  <p className="text-sm text-white/60 mb-2">Strengths:</p>
                  <p className="text-sm text-white/60">Enterprise features, scalable</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-2">Weaknesses:</p>
                  <p className="text-sm text-white/60">Complex setup, steep learning curve</p>
                </div>
              </div>
            </div>
          </div>

          {/* User Personas */}
          <div>
            <h3 className="text-2xl mb-6 text-[#03FF68]">User Personas</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-[#03FF68]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTk1MTY5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Lisa Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="mb-2">Lisa Chen</h4>
                <p className="text-[#03FF68] mb-4">Station Operator Manager</p>
                <p className="text-white/60 mb-6">
                  Manages 50+ charging stations across multiple locations. Needs efficient monitoring and quick issue resolution.
                </p>
                <div>
                  <p className="mb-3">Goals:</p>
                  <ul className="space-y-2 text-white/60">
                    <li>• Minimize station downtime</li>
                    <li>• Streamline maintenance operations</li>
                    <li>• Track revenue and utilization</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-[#03FF68]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE5NTE2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Marcus Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="mb-2">Marcus Johnson</h4>
                <p className="text-[#03FF68] mb-4">Fleet Operations Director</p>
                <p className="text-white/60 mb-6">
                  Oversees an EV fleet of 200+ vehicles. Requires reliable charging infrastructure and detailed analytics.
                </p>
                <div>
                  <p className="mb-3">Goals:</p>
                  <ul className="space-y-2 text-white/60">
                    <li>• Ensure fleet charging availability</li>
                    <li>• Optimize charging schedules</li>
                    <li>• Control charging costs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12">Design Process</h2>
          
          {/* Information Architecture */}
          <div className="mb-16">
            <h3 className="text-2xl mb-6 text-[#03FF68]">Information Architecture</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <ImageWithFallback src="https://media.istockphoto.com/id/1476091270/photo/programmers-are-meeting-to-make-mobile-app-systems-more-modern-and-easier-to-use-and-meet-the.jpg?s=612x612&w=0&k=20&c=SmarISMNAl6MZWwHKk0mvv2VHsLyCOolfhHuY029fzA=" alt="Information Architecture" className="w-full h-auto" />
              </div>
              <div>
                <p className="text-white/60 leading-relaxed mb-6">
                  I organized the platform into three primary modules based on user workflows and operational priorities:
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#03FF68] pl-5">
                    <h4 className="mb-1">Monitoring Dashboard</h4>
                    <p className="text-sm text-white/60">Real-time station status, performance metrics, and alerts</p>
                  </div>
                  <div className="border-l-4 border-[#03FF68] pl-5">
                    <h4 className="mb-1">Operations Center</h4>
                    <p className="text-sm text-white/60">Maintenance scheduling, incident management, and analytics</p>
                  </div>
                  <div className="border-l-4 border-[#03FF68] pl-5">
                    <h4 className="mb-1">Analytics Hub</h4>
                    <p className="text-sm text-white/60">Revenue tracking, usage patterns, and optimization insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wireframes & Iterations */}
          <div className="mb-16">
            <h3 className="text-2xl mb-6 text-[#03FF68]">Wireframes & Iterations</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-white/60 leading-relaxed mb-6">
                  I developed wireframes focusing on operator workflows and rapid information access. After multiple testing rounds with station operators, I refined the dashboard layout and alert system to prioritize critical information.
                </p>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="mb-4">Key Insights from Testing:</h4>
                  <ul className="space-y-2 text-white/60">
                    <li>• Operators need station status at-a-glance</li>
                    <li>• Alert prioritization is critical for fast response</li>
                    <li>• Mobile access is essential for field technicians</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center p-12">
                <div className="text-center">
                  <Battery className="w-16 h-16 text-[#03FF68] mx-auto mb-4" />
                  <p className="text-white/60">Wireframe iterations focused on</p>
                  <p className="text-white/60">real-time data visualization</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hi-Fidelity Wireframes */}
          <div className="mb-16">
            <h3 className="text-2xl mb-6 text-[#03FF68]">Hi-Fidelity Wireframes</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {wireframes.map((wireframe, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage({ src: wireframe.src, alt: wireframe.alt })}
                >
                  <div className="aspect-square rounded-xl overflow-hidden border border-white/10 hover:border-[#03FF68]/50 transition-all duration-300 bg-white/5 hover:bg-white/10">
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

          {/* Design System */}
          <div>
            <h3 className="text-2xl mb-6 text-[#03FF68]">Design System</h3>
            <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h4 className="mb-6">Color Palette</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="h-20 bg-[#212529] rounded-lg border border-[#03FF68]/30 mb-3" />
                      <p className="text-sm text-white/60">Background</p>
                      <p className="text-sm">#212529</p>
                    </div>
                    <div>
                      <div className="h-20 bg-[#03FF68] rounded-lg mb-3" />
                      <p className="text-sm text-white/60">Primary</p>
                      <p className="text-sm">#03FF68</p>
                    </div>
                    <div>
                      <div className="h-20 bg-white rounded-lg mb-3" />
                      <p className="text-sm text-white/60">Text Primary</p>
                      <p className="text-sm">#FFFFFF</p>
                    </div>
                    <div>
                      <div className="h-20 bg-white/60 rounded-lg mb-3" />
                      <p className="text-sm text-white/60">Text Secondary</p>
                      <p className="text-sm">rgba(255,255,255,0.6)</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-6">Typography</h4>
                  <div className="space-y-6">
                    <div className="pb-6 border-b border-white/10">
                      <p className="text-3xl mb-2">Space Grotesk</p>
                      <p className="text-sm text-white/60">Heading - Medium</p>
                    </div>
                    <div>
                      <p className="text-xl mb-2">DM Sans</p>
                      <p className="text-sm text-white/60">Body - Regular</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="mb-6">UI Components</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="bg-[#03FF68] text-[#212529] px-6 py-3 rounded-lg hover:bg-[#03FF68]/90 transition-colors">
                    Primary Button
                  </button>
                  <button className="bg-transparent text-[#03FF68] border-2 border-[#03FF68] px-6 py-3 rounded-lg hover:bg-[#03FF68]/10 transition-colors">
                    Secondary Button
                  </button>
                  <input
                    type="text"
                    placeholder="Input Field"
                    className="bg-white/5 border border-[#03FF68]/30 px-4 py-3 rounded-lg text-white placeholder:text-white/40"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Design */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white/[0.02] border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-16 text-center">Design Principles</h2>
          
          {/* Design Principles - Stacked Card Layout */}
          <div className="space-y-6">
            {/* Principle 1 - Large Featured Card */}
            <div className="group relative bg-gradient-to-br from-[#03FF68]/20 to-transparent rounded-3xl p-8 md:p-12 border border-[#03FF68]/30 hover:border-[#03FF68]/50 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#03FF68]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-16 h-16 bg-[#03FF68] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#03FF68]/30">
                  <Zap className="w-8 h-8 text-[#212529]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl mb-3">Speed & Efficiency</h3>
                  <p className="text-lg text-white/70">Real-time data visibility with {'<'}200ms response times. Every interaction is optimized for quick decision-making and immediate action.</p>
                </div>
              </div>
            </div>

            {/* Principle 2 & 3 - Side by Side Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group relative bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#03FF68]/30 hover:bg-white/[0.07] transition-all duration-500">
                <div className="w-14 h-14 bg-[#03FF68]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#03FF68]/30 transition-colors duration-300">
                  <Battery className="w-7 h-7 text-[#03FF68]" />
                </div>
                <h3 className="text-2xl mb-3">Reliability First</h3>
                <p className="text-white/70">89.8% success rate with predictive maintenance alerts that prevent issues before they impact operations.</p>
              </div>

              <div className="group relative bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#03FF68]/30 hover:bg-white/[0.07] transition-all duration-500">
                <div className="w-14 h-14 bg-[#03FF68]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#03FF68]/30 transition-colors duration-300">
                  <Globe className="w-7 h-7 text-[#03FF68]" />
                </div>
                <h3 className="text-2xl mb-3">Scalability</h3>
                <p className="text-white/70">Built to manage 50K+ charging sessions with a unified platform that grows with your infrastructure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Link */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white/[0.02] border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#03FF68]/10 via-transparent to-transparent"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12">
              <div className="flex-1">
                <div className="inline-block px-4 py-1.5 bg-[#03FF68]/20 border border-[#03FF68]/30 rounded-full text-sm text-[#03FF68] mb-4">
                  Interactive Prototype
                </div>
                <h3 className="text-3xl mb-3">Try the Live Prototype</h3>
                <p className="text-white/60 text-lg max-w-xl">
                  Navigate through the complete operator dashboard and explore all features in our interactive Figma prototype.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="https://www.figma.com/proto/DUWDasoTI6l5yYbPLk60ho/Revolv?page-id=0%3A1&node-id=1-876&viewport=-100%2C282%2C0.05&t=UoKRedWf3MgUYqDt-1&scaling=min-zoom&content-scaling=fixed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#03FF68] hover:bg-[#02dd5c] text-[#212529] rounded-xl transition-all duration-300 overflow-hidden"
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
      </section>

      {/* Outcomes & Impact */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12">Outcomes & Impact</h2>
          
          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <p className="text-5xl text-[#03FF68] mb-3">89.8%</p>
              <p className="text-white/60">System Uptime</p>
            </div>
            <div className="text-center">
              <p className="text-5xl text-[#03FF68] mb-3">60%</p>
              <p className="text-white/60">Faster Response</p>
            </div>
            <div className="text-center">
              <p className="text-5xl text-[#03FF68] mb-3">50K+</p>
              <p className="text-white/60">Sessions Monthly</p>
            </div>
            <div className="text-center">
              <p className="text-5xl text-[#03FF68] mb-3">4.7/5</p>
              <p className="text-white/60">Operator Rating</p>
            </div>
          </div>

          {/* Key Learnings */}
          <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl mb-8">Key Learnings</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#03FF68] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">1</span>
                </div>
                <div>
                  <h4 className="mb-2">Real-Time Data is Non-Negotiable</h4>
                  <p className="text-white/60">Station operators need instant visibility into system status. Any delay in data updates can lead to extended downtime and lost revenue.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#03FF68] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">2</span>
                </div>
                <div>
                  <h4 className="mb-2">Mobile-First for Field Operations</h4>
                  <p className="text-white/60">Technicians and operators are often on the move. The mobile experience must be as robust as the desktop platform for effective field operations.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#03FF68] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">3</span>
                </div>
                <div>
                  <h4 className="mb-2">Predictive Insights Drive Value</h4>
                  <p className="text-white/60">The ability to predict maintenance needs and optimize operations through analytics became the platform's strongest differentiator in user testing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      {onProjectClick && (
        <OtherProjects 
          currentProjectId="revolv" 
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
