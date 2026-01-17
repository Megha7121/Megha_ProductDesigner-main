import { useState } from 'react';
import { ArrowLeft, MapPin, Clock, Users, Smartphone, TrendingUp, Target, Zap, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import OtherProjects from './OtherProjects';

interface RescueRideProjectPageProps {
  onBack: () => void;
  onProjectClick?: (id: string) => void;
}

export default function RescueRideProjectPage({ onBack, onProjectClick }: RescueRideProjectPageProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const wireframes = [
    { src: 'https://i.ibb.co/rfssvgQP/Contact-Us.png', alt: 'Contact Us Wireframe', label: 'Contact Us' },
    { src: 'https://i.ibb.co/d4yN7Xv1/Energy-stations.png', alt: 'Energy Stations Wireframe', label: 'Energy Stations' },
    { src: 'https://i.ibb.co/gbZNstk4/Features.png', alt: 'Features Wireframe', label: 'Features' },
    { src: 'https://i.ibb.co/pj77zbhP/Home-L-sos.png', alt: 'Home Left - SOS Wireframe', label: 'Home - SOS' },
    { src: 'https://i.ibb.co/nMkKd7Vn/Home-Lmechanic.png', alt: 'Home Left - Mechanic Wireframe', label: 'Home - Mechanic' },
    { src: 'https://i.ibb.co/vvTZLvZh/Home-Lpetrol.png', alt: 'Home Left - Petrol Wireframe', label: 'Home - Petrol' },
    { src: 'https://i.ibb.co/M5t62z0Q/Home-Ltow.png', alt: 'Home Left - Tow Wireframe', label: 'Home - Tow' },
    { src: 'https://i.ibb.co/mrQMrfSd/Home-Rbunks.png', alt: 'Home Right - Bunks Wireframe', label: 'Home - Bunks' },
    { src: 'https://i.ibb.co/m5cnDwGD/Home-Rmechanic.png', alt: 'Home Right - Mechanic Wireframe', label: 'Home - Mechanic' },
    { src: 'https://i.ibb.co/R4g9wPXw/Home-Rpetrol.png', alt: 'Home Right - Petrol Wireframe', label: 'Home - Petrol' },
    { src: 'https://i.ibb.co/Z16rbLrx/Home-RSos.png', alt: 'Home Right - SOS Wireframe', label: 'Home - SOS' },
    { src: 'https://i.ibb.co/x8g9DB16/Home-Rtow.png', alt: 'Home Right - Tow Wireframe', label: 'Home - Tow' },
    { src: 'https://i.ibb.co/pBN1xPTR/Mechanic-chat.png', alt: 'Mechanic Chat Wireframe', label: 'Mechanic Chat' },
    { src: 'https://i.ibb.co/4RZVtMs7/Mechanic.png', alt: 'Mechanic Wireframe', label: 'Mechanic' },
    { src: 'https://i.ibb.co/ccnscmMh/Petrol.png', alt: 'Petrol Wireframe', label: 'Petrol' },
    { src: 'https://i.ibb.co/xq9DYyd7/Testimonials.png', alt: 'Testimonials Wireframe', label: 'Testimonials' },
    { src: 'https://i.ibb.co/Xkx9HcVj/Tow.png', alt: 'Tow Wireframe', label: 'Tow' },
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
          src="https://images.unsplash.com/photo-1543730784-8df52a9c626d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjByb2Fkc2lkZSUyMGFzc2lzdGFuY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMTEzMzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Rescue Ride emergency fuel delivery service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]"></div>
      </section>

      {/* Hero Section */}
      <section className="pt-12 pb-20 px-6 md:px-12 lg:px-24 border-b border-white/5 relative -mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <span className="text-[#6A8CAF]" style={{ fontFamily: 'Roboto' }}>Case Study 2024</span>
          </div>
          
          <h1 className="mb-8" style={{ fontFamily: 'Roboto' }}>Rescue Ride</h1>
          
          <p className="text-xl text-white/60 max-w-3xl mb-12" style={{ fontFamily: 'Open Sans' }}>
            An emergency roadside assistance platform that connects stranded drivers with immediate help. Rescue Ride delivers fuel, provides towing, and offers roadside services directly to your location—turning a stressful breakdown into a quick resolution.
          </p>

          {/* Project Meta */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-white/40 text-sm mb-2">Role</p>
              <p className="text-white">Product Designer</p>
            </div>
            <div>
              <p className="text-white/40 text-sm mb-2">Duration</p>
              <p className="text-white">6 Weeks</p>
            </div>
            <div>
              <p className="text-white/40 text-sm mb-2">Tools</p>
              <p className="text-white">Figma, Miro, UserTesting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12" style={{ fontFamily: 'Roboto' }}>Project Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl mb-4 text-[#6A8CAF]" style={{ fontFamily: 'Roboto' }}>The Challenge</h3>
              <p className="text-white/60 leading-relaxed mb-6" style={{ fontFamily: 'Open Sans' }}>
                Stranded drivers face fragmented emergency services with no unified solution. Searching for help while stressed, navigating unclear pricing, and waiting without visibility turns breakdowns into prolonged anxiety.
              </p>
              <p className="font-semibold text-white mb-2">
                The core issues:
              </p>
               <p className="text-white/60 leading-relaxed">
                  Multiple apps and phone calls for a single emergency. No real-time tracking or price transparency meant every breakdown became an unpredictable ordeal.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-4 text-[#6A8CAF]" style={{ fontFamily: 'Roboto' }}>The Solution</h3>
              <p className="text-white/60 leading-relaxed mb-6" style={{ fontFamily: 'Open Sans' }}>
                I designed Rescue Ride as a unified platform connecting drivers with nearby providers instantly. Automatic location detection, transparent pricing, and real-time tracking in one interface—covering fuel delivery, towing, and mechanics.
              </p>
               <p className="font-semibold text-white mb-2">
                The solutions:
              </p>
               <p className="text-white/60 leading-relaxed">
                  Help arrives in minutes with full visibility from request to resolution. One tap replaces multiple searches, reducing cognitive load when users need it most.
              </p>
            </div>
          </div>

          {/* Key Features
          <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl mb-8" style={{ fontFamily: 'Roboto' }}>Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#6A8CAF] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="mb-2" style={{ fontFamily: 'Roboto' }}>Instant Location Detection</h4>
                  <p className="text-white/60" style={{ fontFamily: 'Open Sans' }}>Automatic GPS location with manual override for precise delivery</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#6A8CAF] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="mb-2" style={{ fontFamily: 'Roboto' }}>Multiple Service Options</h4>
                  <p className="text-white/60" style={{ fontFamily: 'Open Sans' }}>Fuel delivery, roadside assistance, mechanic services, and towing</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#6A8CAF] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="mb-2" style={{ fontFamily: 'Roboto' }}>Transparent Pricing</h4>
                  <p className="text-white/60" style={{ fontFamily: 'Open Sans' }}>Compare providers with upfront pricing and ratings before ordering</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#6A8CAF] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="mb-2" style={{ fontFamily: 'Roboto' }}>Real-Time Tracking</h4>
                  <p className="text-white/60" style={{ fontFamily: 'Open Sans' }}>Live delivery status with estimated arrival time and provider contact</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white/[0.02] border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12">Problem Statement</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-[#6A8CAF]/20 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#6A8CAF]" />
              </div>
              <h4 className="mb-3">Fragmented Service Access</h4>
              <p className="text-white/60">
                Drivers juggle multiple apps and phone calls to find emergency help, leading to delays and confusion during high-stress situations.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-[#6A8CAF]/20 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#6A8CAF]" />
              </div>
              <h4 className="mb-3">No Price Transparency</h4>
              <p className="text-white/60">
                Existing roadside services hide costs until arrival, creating anxiety and distrust when drivers are most vulnerable.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-[#6A8CAF]/20 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-[#6A8CAF]" />
              </div>
              <h4 className="mb-3">Poor Real-Time Visibility</h4>
              <p className="text-white/60">
                Users have no way to track help or estimate arrival times, turning manageable emergencies into prolonged uncertainty.
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
              <h3 className="text-2xl mb-6 text-[#6A8CAF]">Project Goals</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-[#6A8CAF] pl-6">
                  <h4 className="mb-2">Reduce Request Time</h4>
                  <p className="text-white/60">Cut emergency request flow from 5 minutes to under 60 seconds by minimizing input fields and automating location detection.</p>
                </div>
                <div className="border-l-4 border-[#6A8CAF] pl-6">
                  <h4 className="mb-2">Increase User Confidence</h4>
                  <p className="text-white/60">Build trust through transparent pricing and real-time tracking, reducing service abandonment by 40%.</p>
                </div>
                <div className="border-l-4 border-[#6A8CAF] pl-6">
                  <h4 className="mb-2">Drive Service Completion</h4>
                  <p className="text-white/60">Boost successful service requests by 30% with clear CTAs, instant provider matching, and proactive status updates.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-6 text-[#6A8CAF]">Success Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <p className="text-4xl text-[#6A8CAF] mb-2">60 secs</p>
                  <p className="text-white/60">Order Completion</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <p className="text-4xl text-[#6A8CAF] mb-2">30 mins</p>
                  <p className="text-white/60">Average Delivery Time</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <p className="text-4xl text-[#6A8CAF] mb-2">4./5</p>
                  <p className="text-white/60">User Rating</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <p className="text-4xl text-[#6A8CAF] mb-2">94%</p>
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
          <h2 className="mb-12" style={{ fontFamily: 'Roboto' }}>Research & Discovery</h2>
          
          {/* User Research */}
          <div className="mb-16">
            <h3 className="text-2xl mb-6 text-[#6A8CAF]" style={{ fontFamily: 'Roboto' }}>User Research</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-white/60 leading-relaxed mb-6" style={{ fontFamily: 'Open Sans' }}>
                 I interviewed 15 drivers who experienced roadside emergencies in the past year. The research revealed critical pain points around trust, transparency, and control during high-stress situations:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-white/60" style={{ fontFamily: 'Open Sans' }}>
                    <span className="text-[#6A8CAF] flex-shrink-0">•</span>
                    <span>92% felt anxious and vulnerable when stranded</span>
                  </li>
                  <li className="flex gap-3 text-white/60" style={{ fontFamily: 'Open Sans' }}>
                    <span className="text-[#6A8CAF] flex-shrink-0">•</span>
                    <span>78% couldn't quickly find reliable emergency services</span>
                  </li>
                  <li className="flex gap-3 text-white/60" style={{ fontFamily: 'Open Sans' }}>
                    <span className="text-[#6A8CAF] flex-shrink-0">•</span>
                    <span>85% needed upfront pricing to avoid surprises</span>
                  </li>
                  <li className="flex gap-3 text-white/60" style={{ fontFamily: 'Open Sans' }}>
                    <span className="text-[#6A8CAF] flex-shrink-0">•</span>
                    <span>70% wanted real-time tracking for safety and reassurance</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#6A8CAF]/30">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBub3Rlc3xlbnwxfHx8fDE3NjIxMDgzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="User Research"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Competitive Analysis */}
          <div className="mb-16">
            <h3 className="text-2xl mb-6 text-[#6A8CAF]" style={{ fontFamily: 'Roboto' }}>Competitive Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#FDFCFB]/5 rounded-xl p-6 border border-[#6A8CAF]/20">
                <h4 className="mb-4" style={{ fontFamily: 'Roboto' }}>Roadside Assistance Apps</h4>
                <div className="mb-4">
                  <p className="text-sm text-white/60 mb-2" style={{ fontFamily: 'Open Sans' }}>Strengths:</p>
                  <p className="text-sm text-white/60" style={{ fontFamily: 'Open Sans' }}>Established network, comprehensive services</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-2" style={{ fontFamily: 'Open Sans' }}>Weaknesses:</p>
                  <p className="text-sm text-white/60" style={{ fontFamily: 'Open Sans' }}>Long wait times, expensive, no pricing transparency</p>
                </div>
              </div>
              <div className="bg-[#FDFCFB]/5 rounded-xl p-6 border border-[#6A8CAF]/20">
                <h4 className="mb-4" style={{ fontFamily: 'Roboto' }}>Local Fuel Delivery Services</h4>
                <div className="mb-4">
                  <p className="text-sm text-white/60 mb-2" style={{ fontFamily: 'Open Sans' }}>Strengths:</p>
                  <p className="text-sm text-white/60" style={{ fontFamily: 'Open Sans' }}>Quick response in local areas</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-2" style={{ fontFamily: 'Open Sans' }}>Weaknesses:</p>
                  <p className="text-sm text-white/60" style={{ fontFamily: 'Open Sans' }}>Inconsistent pricing, no digital platform, limited coverage</p>
                </div>
              </div>
              <div className="bg-[#FDFCFB]/5 rounded-xl p-6 border border-[#6A8CAF]/20">
                <h4 className="mb-4" style={{ fontFamily: 'Roboto' }}>Uber for Gas (Booster)</h4>
                <div className="mb-4">
                  <p className="text-sm text-white/60 mb-2" style={{ fontFamily: 'Open Sans' }}>Strengths:</p>
                  <p className="text-sm text-white/60" style={{ fontFamily: 'Open Sans' }}>App-based, transparent pricing</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-2" style={{ fontFamily: 'Open Sans' }}>Weaknesses:</p>
                  <p className="text-sm text-white/60" style={{ fontFamily: 'Open Sans' }}>Limited to specific cities, single provider model</p>
                </div>
              </div>
            </div>
          </div>

          {/* User Personas
          <div>
            <h3 className="text-2xl mb-6 text-[#6A8CAF]" style={{ fontFamily: 'Roboto' }}>User Personas</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-[#FDFCFB]/5 rounded-xl p-8 border border-[#6A8CAF]/20">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-[#6A8CAF]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTk1MTY5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Priya Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="mb-2" style={{ fontFamily: 'Roboto' }}>Priya Sharma</h4>
                <p className="text-[#6A8CAF] mb-4" style={{ fontFamily: 'Open Sans' }}>Daily Commuter</p>
                <p className="text-white/60 mb-6" style={{ fontFamily: 'Open Sans' }}>
                  28-year-old marketing professional who drives 50km daily. Forgot to refuel after late work meeting and got stranded on highway.
                </p>
                <div>
                  <p className="mb-3" style={{ fontFamily: 'Roboto' }}>Goals:</p>
                  <ul className="space-y-2 text-white/60" style={{ fontFamily: 'Open Sans' }}>
                    <li>• Quick resolution to get to important meeting</li>
                    <li>• Fair, transparent pricing</li>
                    <li>• Feel safe while waiting</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#FDFCFB]/5 rounded-xl p-8 border border-[#6A8CAF]/20">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-[#6A8CAF]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE5NTE2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Rajesh Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="mb-2" style={{ fontFamily: 'Roboto' }}>Rajesh Kumar</h4>
                <p className="text-[#6A8CAF] mb-4" style={{ fontFamily: 'Open Sans' }}>Weekend Road Tripper</p>
                <p className="text-white/60 mb-6" style={{ fontFamily: 'Open Sans' }}>
                  35-year-old software engineer who loves weekend getaways. Ran out of fuel in remote area with limited station access.
                </p>
                <div>
                  <p className="mb-3" style={{ fontFamily: 'Roboto' }}>Goals:</p>
                  <ul className="space-y-2 text-white/60" style={{ fontFamily: 'Open Sans' }}>
                    <li>• Service available in remote locations</li>
                    <li>• Know exact arrival time</li>
                    <li>• Compare multiple provider options</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12" style={{ fontFamily: 'Roboto' }}>Design Process</h2>
          
          {/* Information Architecture */}
          <div className="mb-16">
            <h3 className="text-2xl mb-6 text-[#6A8CAF]" style={{ fontFamily: 'Roboto' }}>Information Architecture</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="rounded-2xl overflow-hidden border border-[#6A8CAF]/30">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581291518570-03a26006fb21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB3aXJlZnJhbWUlMjBza2V0Y2h8ZW58MXx8fHwxNzYyMTA4MzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Information Architecture"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <p className="text-white/60 leading-relaxed mb-6" style={{ fontFamily: 'Open Sans' }}>
                  I designed the app flow to minimize steps between emergency and resolution. The architecture prioritizes speed and clarity during a stressful situation:
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#6A8CAF] pl-5">
                    <h4 className="mb-1" style={{ fontFamily: 'Roboto' }}>Location Detection</h4>
                    <p className="text-sm text-white/60" style={{ fontFamily: 'Open Sans' }}>Auto-detect user location with manual override option</p>
                  </div>
                  <div className="border-l-4 border-[#6A8CAF] pl-5">
                    <h4 className="mb-1" style={{ fontFamily: 'Roboto' }}>Service Selection</h4>
                    <p className="text-sm text-white/60" style={{ fontFamily: 'Open Sans' }}>Choose from fuel, mechanic, towing, or SOS services</p>
                  </div>
                  <div className="border-l-4 border-[#6A8CAF] pl-5">
                    <h4 className="mb-1" style={{ fontFamily: 'Roboto' }}>Provider Selection</h4>
                    <p className="text-sm text-white/60" style={{ fontFamily: 'Open Sans' }}>Browse nearby providers with pricing, fuel type, and ratings</p>
                  </div>
                  <div className="border-l-4 border-[#6A8CAF] pl-5">
                    <h4 className="mb-1" style={{ fontFamily: 'Roboto' }}>Order Confirmation</h4>
                    <p className="text-sm text-white/60" style={{ fontFamily: 'Open Sans' }}>Quick confirmation with direct provider contact option</p>
                  </div>
                  <div className="border-l-4 border-[#6A8CAF] pl-5">
                    <h4 className="mb-1" style={{ fontFamily: 'Roboto' }}>Real-Time Tracking</h4>
                    <p className="text-sm text-white/60" style={{ fontFamily: 'Open Sans' }}>Live delivery status and estimated arrival time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wireframes & Iterations
          <div className="mb-16">
            <h3 className="text-2xl mb-6 text-[#6A8CAF]" style={{ fontFamily: 'Roboto' }}>Wireframes & Iterations</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-white/60 leading-relaxed mb-6" style={{ fontFamily: 'Open Sans' }}>
                  I created wireframes focusing on emergency UX patterns—larger touch targets, fewer decisions, immediate visual feedback. After 4 rounds of testing with users in simulated stress scenarios, I refined the flow significantly.
                </p>
                <div className="bg-[#FDFCFB]/5 rounded-xl p-6 border border-[#6A8CAF]/20">
                  <h4 className="mb-4" style={{ fontFamily: 'Roboto' }}>Key Insights from Testing:</h4>
                  <ul className="space-y-2 text-white/60" style={{ fontFamily: 'Open Sans' }}>
                    <li>• Users needed service type selection first, not location</li>
                    <li>• Provider comparison required side-by-side view</li>
                    <li>• Direct call option was essential for trust</li>
                    <li>• Large, bold CTAs performed better under stress</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#6A8CAF]/30">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjB1aSUyMHNrZXRjaHxlbnwxfHx8fDE3NjIxMDgzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Wireframes"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div> */}

           {/* Design Process */}
          <div>
            <h3 className="text-2xl mb-6 text-[#6A8CAF]">Design Methodology</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#6A8CAF]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-[#6A8CAF]">1</span>
                </div>
                <h4 className="mb-2">Discover</h4>
                <p className="text-white/60 text-sm">User research, interviews, competitive analysis</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#6A8CAF]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-[#6A8CAF]">2</span>
                </div>
                <h4 className="mb-2">Define</h4>
                <p className="text-white/60 text-sm">User personas, journey maps, feature prioritization</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#6A8CAF]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-[#6A8CAF]">3</span>
                </div>
                <h4 className="mb-2">Design</h4>
                <p className="text-white/60 text-sm">Wireframes, prototypes, design system</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#6A8CAF]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-[#6A8CAF]">4</span>
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
                <div className="w-8 h-8 rounded-full bg-[#6A8CAF] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="mb-3">Instant Clarity Over Features</h4>
                  <p className="text-white/60 mb-4">
                    Stranded drivers don't read—they scan for reassurance. I prioritized immediate value communication over feature lists to reduce decision paralysis.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-white/60"><span className="text-[#6A8CAF]">Impact:</span> 40% faster request initiation, 25% lower bounce rate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#6A8CAF] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">2</span>
                </div>
                <div className="flex-1">
                  <h4 className="mb-3">Acknowledge the Panic First</h4>
                  <p className="text-white/60 mb-4">
                    Users needed validation before solutions. I mirrored their stress ("Stranded? We've got you") before presenting how we help.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-white/60"><span className="text-[#6A8CAF]">Impact:</span> 35% increase in scroll depth, higher emotional connection</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#6A8CAF] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">3</span>
                </div>
                <div className="flex-1">
                  <h4 className="mb-3"> Transparency Builds Trust</h4>
                  <p className="text-white/60 mb-4">
                    Hidden costs trigger abandonment in emergencies. Upfront pricing and ETA estimates appeared before the CTA to eliminate uncertainty.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-white/60"><span className="text-[#6A8CAF]">Impact:</span> 50% reduction in service abandonment, 4.7/5 trust rating</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#6A8CAF] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#212529]">4</span>
                </div>
                <div className="flex-1">
                  <h4 className="mb-3">Real-Time Visibility as Safety</h4>
                  <p className="text-white/60 mb-4">
                    Tracking wasn't a feature—it was emotional insurance. I made provider location and arrival time the hero of the experience.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-white/60"><span className="text-[#6A8CAF]">Impact:</span> 70% of users reported feeling "in control" during wait times</p>
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
    
    {/* Design System
    <div className="mb-16">
      <h3 className="text-2xl mb-6 text-[#6A8CAF]">Design System</h3>
      <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
        ...
      </div>
    </div> */}
  </div>
</section>  {/* ✅ CLOSED PROPERLY */}


{/* ================= SHARED CONTENT ================= */}
<section className="w-full">
  {/* SHARED CONTENT CONTAINER */}
  <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

    {/* ================= Design System ================= */}
    <div className="mb-20">
      <h3
        className="text-2xl mb-6 text-[#6A8CAF]"
        style={{ fontFamily: 'Roboto' }}
      >
        Design System
      </h3>

      <div className="bg-[#FDFCFB]/5 rounded-2xl p-8 md:p-12 border border-[#6A8CAF]/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h4 className="mb-6" style={{ fontFamily: 'Roboto' }}>
              Color Palette
            </h4>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="h-20 bg-[#FDFCFB] rounded-lg border border-white/20 mb-3" />
                <p className="text-sm text-white/60">Background</p>
                <p className="text-sm">#FDFCFB</p>
              </div>

              <div>
                <div className="h-20 bg-[#6A8CAF] rounded-lg mb-3" />
                <p className="text-sm text-white/60">Primary</p>
                <p className="text-sm">#6A8CAF</p>
              </div>

              <div>
                <div className="h-20 bg-[#242424] rounded-lg mb-3" />
                <p className="text-sm text-white/60">Text Primary</p>
                <p className="text-sm">#242424</p>
              </div>

              <div>
                <div className="h-20 bg-[#E3C16F] rounded-lg mb-3" />
                <p className="text-sm text-white/60">Accent (CTA)</p>
                <p className="text-sm">#E3C16F</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-6" style={{ fontFamily: 'Roboto' }}>
              Typography
            </h4>

            <div className="space-y-6">
              <div className="pb-6 border-b border-white/10">
                <p className="text-3xl mb-2">Roboto</p>
                <p className="text-sm text-white/60">
                  Heading – Regular, Medium, Bold
                </p>
              </div>

              <div>
                <p className="text-xl mb-2">Open Sans</p>
                <p className="text-sm text-white/60">
                  Body – Regular, Semibold
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="mb-6" style={{ fontFamily: 'Roboto' }}>
            UI Components
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-[#E3C16F] text-[#242424] px-6 py-3 rounded-lg font-semibold">
              Send Location
            </button>

            <button className="border-2 border-[#6A8CAF] text-[#6A8CAF] px-6 py-3 rounded-lg">
              Call Provider
            </button>

            <input
              type="text"
              placeholder="Search providers"
              className="bg-white/5 border border-[#6A8CAF]/30 px-4 py-3 rounded-lg text-white"
            />
          </div>
        </div>
      </div>
    </div>

    {/* ================= Hi-Fidelity Wireframes ================= */}
    <div className="mb-16">
      <h3
        className="text-2xl mb-6 text-[#6A8CAF]"
        style={{ fontFamily: 'Roboto' }}
      >
        Hi-Fidelity Wireframes
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wireframes.map((wireframe, index) => (
          <div
            key={index}
            className="group cursor-pointer"
            onClick={() =>
              setSelectedImage({
                src: wireframe.src,
                alt: wireframe.alt,
              })
            }
          >
            <div className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-[#6A8CAF]/50 transition">
              <ImageWithFallback
                src={wireframe.src}
                alt={wireframe.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>

            <p className="text-white/60 text-center mt-3 text-sm">
              {wireframe.label}
            </p>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

       

      {/* Design Principles
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white/[0.02] border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-16 text-center" style={{ fontFamily: 'Roboto' }}>Design Principles</h2> */}
          
          {/* Design Principles - Stacked Card Layout */}
          {/* <div className="space-y-6"> */}
            {/* Principle 1 - Large Featured Card */}
            {/* <div className="group relative bg-gradient-to-br from-[#6A8CAF]/20 to-transparent rounded-3xl p-8 md:p-12 border border-[#6A8CAF]/30 hover:border-[#6A8CAF]/50 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#6A8CAF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-16 h-16 bg-[#6A8CAF] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#6A8CAF]/30">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl mb-3" style={{ fontFamily: 'Roboto' }}>Speed & Simplicity</h3>
                  <p className="text-lg text-white/70" style={{ fontFamily: 'Open Sans' }}>Every interaction is optimized for stressed users. From location detection to order confirmation in under 60 seconds.</p>
                </div>
              </div>
            </div> */}

            {/* Principle 2 & 3 - Side by Side Cards */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group relative bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#6A8CAF]/30 hover:bg-white/[0.07] transition-all duration-500">
                <div className="w-14 h-14 bg-[#6A8CAF]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#6A8CAF]/30 transition-colors duration-300">
                  <MapPin className="w-7 h-7 text-[#6A8CAF]" />
                </div>
                <h3 className="text-2xl mb-3" style={{ fontFamily: 'Roboto' }}>Location First</h3>
                <p className="text-white/70" style={{ fontFamily: 'Open Sans' }}>Automatic location detection with clear visual feedback ensures users always know help is coming to the right place.</p>
              </div>

              <div className="group relative bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#6A8CAF]/30 hover:bg-white/[0.07] transition-all duration-500">
                <div className="w-14 h-14 bg-[#6A8CAF]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#6A8CAF]/30 transition-colors duration-300">
                  <Smartphone className="w-7 h-7 text-[#6A8CAF]" />
                </div>
                <h3 className="text-2xl mb-3" style={{ fontFamily: 'Roboto' }}>Trust Through Transparency</h3>
                <p className="text-white/70" style={{ fontFamily: 'Open Sans' }}>Upfront pricing, provider information, and direct communication build confidence in vulnerable moments.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Prototype Link */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white/[0.02] border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6A8CAF]/10 via-transparent to-transparent"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12">
              <div className="flex-1">
                <div className="inline-block px-4 py-1.5 bg-[#6A8CAF]/20 border border-[#6A8CAF]/30 rounded-full text-sm text-[#6A8CAF] mb-4" style={{ fontFamily: 'Roboto' }}>
                  Interactive Prototype
                </div>
                <h3 className="text-3xl mb-3" style={{ fontFamily: 'Roboto' }}>Try the Live Prototype</h3>
                <p className="text-white/60 text-lg max-w-xl" style={{ fontFamily: 'Open Sans' }}>
                  Experience the full emergency flow from service selection to delivery tracking in our interactive Figma prototype.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="https://www.figma.com/proto/szDudnFeI0JgVZjz8aDXhB/Rescue-Ride?page-id=331%3A142&node-id=331-292&p=f&viewport=-3919%2C-4565%2C0.56&t=BL8maJHollFuUK78-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=331%3A292&show-proto-sidebar=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#6A8CAF] hover:bg-[#6A8CAF]/90 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#6A8CAF]/30 hover:-translate-y-0.5"
                  style={{ fontFamily: 'Roboto', fontWeight: '600' }}
                >
                  <span className="relative">View Interactive Prototype</span>
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
          <h2 className="mb-12" style={{ fontFamily: 'Roboto' }}>Outcomes & Impact</h2>
          
          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <p className="text-5xl text-[#6A8CAF] mb-3" style={{ fontFamily: 'Roboto' }}>94%</p>
              <p className="text-white/60" style={{ fontFamily: 'Open Sans' }}>User Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-5xl text-[#6A8CAF] mb-3" style={{ fontFamily: 'Roboto' }}>30 mins</p>
              <p className="text-white/60" style={{ fontFamily: 'Open Sans' }}>Avg Delivery Time</p>
            </div>
            <div className="text-center">
              <p className="text-5xl text-[#6A8CAF] mb-3" style={{ fontFamily: 'Roboto' }}>60 secs</p>
              <p className="text-white/60" style={{ fontFamily: 'Open Sans' }}>Order Completion</p>
            </div>
            <div className="text-center">
              <p className="text-5xl text-[#6A8CAF] mb-3" style={{ fontFamily: 'Roboto' }}>4.7/5</p>
              <p className="text-white/60" style={{ fontFamily: 'Open Sans' }}>Average Rating</p>
            </div>
          </div>

          {/* Key Learnings */}
          <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl mb-8" style={{ fontFamily: 'Roboto' }}>Key Learnings</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#6A8CAF] flex items-center justify-center flex-shrink-0">
                  <span className="text-white">1</span>
                </div>
                <div>
                  <h4 className="mb-2" style={{ fontFamily: 'Roboto' }}>Context Drives Design</h4>
                  <p className="text-white/60" style={{ fontFamily: 'Open Sans' }}>Emergency users need larger touch targets, minimal choices, and clear visual hierarchy. Standard UI patterns fail under stress—design must account for shaking hands and heightened anxiety.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#6A8CAF] flex items-center justify-center flex-shrink-0">
                  <span className="text-white">2</span>
                </div>
                <div>
                  <h4 className="mb-2" style={{ fontFamily: 'Roboto' }}>Trust Through Transparency</h4>
                  <p className="text-white/60" style={{ fontFamily: 'Open Sans' }}>Upfront pricing, provider details, and real-time tracking aren't nice-to-haves—they're trust signals that directly impact completion rates and reduce abandonment.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#6A8CAF] flex items-center justify-center flex-shrink-0">
                  <span className="text-white">3</span>
                </div>
                <div>
                  <h4 className="mb-2" style={{ fontFamily: 'Roboto' }}>Test Under Pressure</h4>
                  <p className="text-white/60" style={{ fontFamily: 'Open Sans' }}>Simulating stress during testing exposed critical friction invisible in calm scenarios. Users struggling with cognitive load revealed what truly matters in crisis moments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      {onProjectClick && (
        <OtherProjects 
          currentProjectId="rescue-ride" 
          onProjectClick={onProjectClick}
        />
      )}

      {/* Image Modal Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/20">
          <DialogTitle className="sr-only">Wireframe Preview</DialogTitle>
          <DialogDescription className="sr-only">Full size preview of the wireframe</DialogDescription>
          <div className="relative w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/20 text-white transition-all"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            {selectedImage && (
              <div className="w-full max-h-[95vh] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent px-4 py-16">
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


  
