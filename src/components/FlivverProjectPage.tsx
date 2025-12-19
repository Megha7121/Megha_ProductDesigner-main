import { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, CreditCard, TrendingUp, Target, Zap, X, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import OtherProjects from './OtherProjects';

interface FlivverProjectPageProps {
  onBack: () => void;
  onProjectClick?: (id: string) => void;
}

export default function FlivverProjectPage({ onBack, onProjectClick }: FlivverProjectPageProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const wireframes = [
    { src: 'https://i.ibb.co/7JgyrCRd/Login-page.png', alt: 'Login Page', label: 'Login Page' },
    { src: 'https://i.ibb.co/JRrbnnrH/Otp-verify.png', alt: 'OTP Verification', label: 'OTP Verify' },
    { src: 'https://i.ibb.co/SXsN4qPd/Home-screen.png', alt: 'Home Screen', label: 'Home Screen' },
    { src: 'https://i.ibb.co/bMm6sVZv/City.png', alt: 'City Selection', label: 'City Selection' },
    { src: 'https://i.ibb.co/k2bXvYxM/Search-page.png', alt: 'Search Page', label: 'Search Page' },
    { src: 'https://i.ibb.co/tM0hLYpM/Search-page-selection.png', alt: 'Search Page Selection', label: 'Search Selection' },
    { src: 'https://i.ibb.co/RGTkT3KL/Start-date-and-time.png', alt: 'Start Date and Time', label: 'Start Date & Time' },
    { src: 'https://i.ibb.co/JjSLXMhv/End-date-and-time.png', alt: 'End Date and Time', label: 'End Date & Time' },
    { src: 'https://i.ibb.co/chmD6Z3L/Search-result.png', alt: 'Search Result', label: 'Search Result' },
    { src: 'https://i.ibb.co/BHNz0MF4/Filters.png', alt: 'Filters', label: 'Filters' },
    { src: 'https://i.ibb.co/TqbV828N/Search-Filter-result.png', alt: 'Search Filter Result', label: 'Filter Result' },
    { src: 'https://i.ibb.co/Gf6HPfgb/Search-list-page.png', alt: 'Search List Page', label: 'Search List' },
    { src: 'https://i.ibb.co/DfntcFfG/Cars.png', alt: 'Car Details', label: 'Car Details' },
    { src: 'https://i.ibb.co/DPXs8dGJ/Booking-details.png', alt: 'Booking Details', label: 'Booking Details' },
    { src: 'https://i.ibb.co/4ZhXX5MJ/payment.png', alt: 'Payment', label: 'Payment' },
    { src: 'https://i.ibb.co/cSnNkBJ1/payment-Success.png', alt: 'Payment Success', label: 'Payment Success' },
    { src: 'https://i.ibb.co/7x57q9b8/Bookings.png', alt: 'Bookings', label: 'My Bookings' },
    { src: 'https://i.ibb.co/wFv33L8H/HOffers.png', alt: 'Offers', label: 'Offers' },
    { src: 'https://i.ibb.co/qFRwfjXT/Offers-brief-2.png', alt: 'Offer Details', label: 'Offer Details' },
    { src: 'https://i.ibb.co/LhJ5qbbZ/Profile.png', alt: 'Profile', label: 'Profile' },
    { src: 'https://i.ibb.co/ynFcx6Wn/manage-Profile.png', alt: 'Manage Profile', label: 'Manage Profile' },
    { src: 'https://i.ibb.co/gZ4FFkDV/Help.png', alt: 'Help', label: 'Help & Support' },
    { src: 'https://i.ibb.co/chxRRBvy/Policy.png', alt: 'Policy', label: 'Privacy Policy' },
    { src: 'https://i.ibb.co/MDjF88QL/feedback-submit.png', alt: 'Feedback Submit', label: 'Feedback' },
    { src: 'https://i.ibb.co/GvC5R9K4/Logout.png', alt: 'Logout', label: 'Logout' },
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
          src="https://images.unsplash.com/photo-1609465397944-be1ce3ebda61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjIxMDI2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Flivver car rental platform"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]"></div>
      </section>

      {/* Hero Section */}
      <section className="pt-12 pb-20 px-6 md:px-12 lg:px-24 border-b border-white/5 relative -mt-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <span className="text-[#6A8CAF]">Case Study 2024</span>
          </div>
          
          <h1 className="mb-8">Flivver</h1>
          
          <p className="text-xl text-white/60 max-w-3xl mb-12">
            A seamless car rental platform that simplifies the booking experience for urban travelers. Flivver connects users with a wide range of vehicles across cities, offering transparent pricing, flexible booking options, and a hassle-free rental process.
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
              <p className="text-white">Figma, FigJam, Synthetic User, Maze</p>
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
              <h3 className="text-2xl mb-4 text-[#6A8CAF]">The Challenge</h3>
              <p className="text-white/60 leading-relaxed">
                Travelers face friction when renting cars—confusing pricing structures, limited vehicle availability information, complex booking flows, and lack of transparency in policies. Many existing platforms overwhelm users with too many options and unclear terms, leading to booking anxiety and abandoned carts.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-4 text-[#6A8CAF]">The Solution</h3>
              <p className="text-white/60 leading-relaxed">
                Flivver streamlines the entire car rental journey with an intuitive mobile-first design. Users can search, compare, and book vehicles in minutes with transparent pricing, smart filters, flexible date selection, secure payment options, and clear policy information—all in a clean, modern interface.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl mb-8">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#6A8CAF] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">Smart Search & Filters</h4>
                  <p className="text-white/60">Advanced filtering by car type, price range, features, and availability with real-time results</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#6A8CAF] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">Flexible Date Selection</h4>
                  <p className="text-white/60">Intuitive date and time picker with visual calendar for easy booking management</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#6A8CAF] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">Transparent Pricing</h4>
                  <p className="text-white/60">Clear breakdown of costs with no hidden fees and exclusive offers for returning users</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#6A8CAF] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">Seamless Booking Management</h4>
                  <p className="text-white/60">Track active bookings, view history, manage profiles, and get support—all in one place</p>
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
            <h3 className="text-2xl mb-6 text-[#6A8CAF]">User Research</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-white/60 leading-relaxed mb-6">
                  I conducted 20 interviews with frequent travelers, business professionals, and occasional car renters to understand their pain points and booking behaviors. The research uncovered critical insights about user expectations:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-white/60">
                    <span className="text-[#6A8CAF] flex-shrink-0">•</span>
                    <span>88% abandoned bookings due to unclear pricing or hidden fees</span>
                  </li>
                  <li className="flex gap-3 text-white/60">
                    <span className="text-[#6A8CAF] flex-shrink-0">•</span>
                    <span>75% wanted to see vehicle availability before entering details</span>
                  </li>
                  <li className="flex gap-3 text-white/60">
                    <span className="text-[#6A8CAF] flex-shrink-0">•</span>
                    <span>82% preferred mobile booking over desktop</span>
                  </li>
                  <li className="flex gap-3 text-white/60">
                    <span className="text-[#6A8CAF] flex-shrink-0">•</span>
                    <span>67% struggled with complex filter systems on competitor apps</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#6A8CAF]/30">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJ2aWV3JTIwcmVzZWFyY2h8ZW58MXx8fHwxNzYyMTA4MzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="User Research"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Competitive Analysis */}
          <div className="mb-16">
            <h3 className="text-2xl mb-6 text-[#6A8CAF]">Competitive Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="mb-4">Zoomcar</h4>
                <div className="mb-4">
                  <p className="text-sm text-white/60 mb-2">Strengths:</p>
                  <p className="text-sm text-white/60">Wide vehicle selection, self-drive model, good availability</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-2">Weaknesses:</p>
                  <p className="text-sm text-white/60">Complex pricing tiers, cluttered UI, slow booking flow</p>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="mb-4">Revv</h4>
                <div className="mb-4">
                  <p className="text-sm text-white/60 mb-2">Strengths:</p>
                  <p className="text-sm text-white/60">Clean interface, doorstep delivery, subscription model</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-2">Weaknesses:</p>
                  <p className="text-sm text-white/60">Limited city coverage, expensive for short trips</p>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="mb-4">Drivezy</h4>
                <div className="mb-4">
                  <p className="text-sm text-white/60 mb-2">Strengths:</p>
                  <p className="text-sm text-white/60">Affordable pricing, bike rentals available</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-2">Weaknesses:</p>
                  <p className="text-sm text-white/60">Inconsistent vehicle quality, poor customer support</p>
                </div>
              </div>
            </div>
          </div>

          {/* User Personas */}
          <div>
            <h3 className="text-2xl mb-6 text-[#6A8CAF]">User Personas</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-[#6A8CAF]">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE5NTE2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Arjun Mehta"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="mb-2">Arjun Mehta</h4>
                <p className="text-[#6A8CAF] mb-4">Business Traveler</p>
                <p className="text-white/60 mb-6">
                  32-year-old consultant who travels to different cities monthly for client meetings. Needs quick, reliable car rentals for 2-3 day trips.
                </p>
                <div>
                  <p className="mb-3">Goals:</p>
                  <ul className="space-y-2 text-white/60">
                    <li>• Fast booking process with minimal clicks</li>
                    <li>• Professional vehicle options</li>
                    <li>• Transparent pricing for expense reports</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-[#6A8CAF]">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTk1MTY5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Neha Kapoor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="mb-2">Neha Kapoor</h4>
                <p className="text-[#6A8CAF] mb-4">Weekend Explorer</p>
                <p className="text-white/60 mb-6">
                  27-year-old designer who loves weekend road trips with friends. Rents cars monthly for short getaways and outdoor adventures.
                </p>
                <div>
                  <p className="mb-3">Goals:</p>
                  <ul className="space-y-2 text-white/60">
                    <li>• Affordable pricing for weekend trips</li>
                    <li>• Easy comparison of vehicle options</li>
                    <li>• Flexible pick-up and drop-off times</li>
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
            <h3 className="text-2xl mb-6 text-[#6A8CAF]">Information Architecture</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="rounded-2xl overflow-hidden border border-[#6A8CAF]/30">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBmbG93Y2hhcnR8ZW58MXx8fHwxNzYyMTA4MzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Information Architecture"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <p className="text-white/60 leading-relaxed mb-6">
                  I structured the app to prioritize speed and decision-making clarity. The architecture follows a natural user journey from discovery to booking confirmation:
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#6A8CAF] pl-5">
                    <h4 className="mb-1">Onboarding & Authentication</h4>
                    <p className="text-sm text-white/60">Quick login/signup with OTP verification for security</p>
                  </div>
                  <div className="border-l-4 border-[#6A8CAF] pl-5">
                    <h4 className="mb-1">Search & Discovery</h4>
                    <p className="text-sm text-white/60">City selection, date picking, and vehicle browsing with smart filters</p>
                  </div>
                  <div className="border-l-4 border-[#6A8CAF] pl-5">
                    <h4 className="mb-1">Booking & Payment</h4>
                    <p className="text-sm text-white/60">Detailed car view, booking confirmation, and secure payment processing</p>
                  </div>
                  <div className="border-l-4 border-[#6A8CAF] pl-5">
                    <h4 className="mb-1">Management & Support</h4>
                    <p className="text-sm text-white/60">Booking history, profile settings, offers, help center, and feedback</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wireframes & Iterations */}
          <div className="mb-16">
            <h3 className="text-2xl mb-6 text-[#6A8CAF]">Wireframes & Iterations</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-white/60 leading-relaxed mb-6">
                  I iterated through multiple design versions based on user testing feedback. The initial designs had a lengthy search flow, but testing showed users wanted faster access to availability. After 5 rounds of iteration, I streamlined the booking flow from 8 steps to 4 core actions.
                </p>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="mb-4">Key Insights from Testing:</h4>
                  <ul className="space-y-2 text-white/60">
                    <li>• Users wanted city selection before date selection</li>
                    <li>• Filter placement needed to be more prominent</li>
                    <li>• Payment process required more trust signals</li>
                    <li>• Offers section needed better visibility on home screen</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#6A8CAF]/30">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzYyMTA4MzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Wireframes"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Hi-Fidelity Wireframes */}
          <div className="mb-16">
            <h3 className="text-2xl mb-6 text-[#6A8CAF]">Hi-Fidelity Wireframes</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {wireframes.map((wireframe, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage({ src: wireframe.src, alt: wireframe.alt })}
                >
                  <div className="aspect-square rounded-xl overflow-hidden border border-white/10 hover:border-[#6A8CAF]/50 transition-all duration-300 bg-white/5 hover:bg-white/10">
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
            <h3 className="text-2xl mb-6 text-[#6A8CAF]">Design System</h3>
            <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h4 className="mb-6">Color Palette</h4>
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
                      <div className="h-20 bg-[#4A90E2] rounded-lg mb-3" />
                      <p className="text-sm text-white/60">Accent (Links)</p>
                      <p className="text-sm">#4A90E2</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-6">Typography</h4>
                  <div className="space-y-6">
                    <div className="pb-6 border-b border-white/10">
                      <p className="text-3xl mb-2" style={{ fontFamily: 'Roboto' }}>Roboto</p>
                      <p className="text-sm text-white/60">Heading - Regular, Medium, Bold</p>
                    </div>
                    <div>
                      <p className="text-xl mb-2" style={{ fontFamily: 'Open Sans' }}>Open Sans</p>
                      <p className="text-sm text-white/60">Body - Regular, Semibold</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="mb-6">UI Components</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="bg-[#6A8CAF] text-white px-6 py-3 rounded-lg hover:bg-[#6A8CAF]/90 transition-colors">
                    Book Now
                  </button>
                  <button className="bg-transparent text-[#6A8CAF] border-2 border-[#6A8CAF] px-6 py-3 rounded-lg hover:bg-[#6A8CAF]/10 transition-colors">
                    View Details
                  </button>
                  <input
                    type="text"
                    placeholder="Search cars..."
                    className="bg-white/5 border border-[#6A8CAF]/30 px-4 py-3 rounded-lg text-white placeholder:text-white/40"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white/[0.02] border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-16 text-center">Design Principles</h2>
          
          {/* Design Principles - Stacked Card Layout */}
          <div className="space-y-6">
            {/* Principle 1 - Large Featured Card */}
            <div className="group relative bg-gradient-to-br from-[#6A8CAF]/20 to-transparent rounded-3xl p-8 md:p-12 border border-[#6A8CAF]/30 hover:border-[#6A8CAF]/50 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#6A8CAF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-16 h-16 bg-[#6A8CAF] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#6A8CAF]/30">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl mb-3">Speed & Simplicity</h3>
                  <p className="text-lg text-white/70">Minimize friction at every step. Users should be able to find and book a car in under 3 minutes with clear, intuitive flows.</p>
                </div>
              </div>
            </div>

            {/* Principle 2 & 3 - Side by Side Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group relative bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#6A8CAF]/30 hover:bg-white/[0.07] transition-all duration-500">
                <div className="w-14 h-14 bg-[#6A8CAF]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#6A8CAF]/30 transition-colors duration-300">
                  <Target className="w-7 h-7 text-[#6A8CAF]" />
                </div>
                <h3 className="text-2xl mb-3">Transparency First</h3>
                <p className="text-white/70">No hidden fees, no surprises. Clear pricing breakdowns and honest vehicle information build trust and confidence.</p>
              </div>

              <div className="group relative bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#6A8CAF]/30 hover:bg-white/[0.07] transition-all duration-500">
                <div className="w-14 h-14 bg-[#6A8CAF]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#6A8CAF]/30 transition-colors duration-300">
                  <Clock className="w-7 h-7 text-[#6A8CAF]" />
                </div>
                <h3 className="text-2xl mb-3">Flexibility</h3>
                <p className="text-white/70">Adapt to different travel needs with flexible timing, easy modifications, and variety of vehicle options.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Link */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white/[0.02] border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6A8CAF]/10 via-transparent to-transparent"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12">
              <div className="flex-1">
                <div className="inline-block px-4 py-1.5 bg-[#6A8CAF]/20 border border-[#6A8CAF]/30 rounded-full text-sm text-[#6A8CAF] mb-4">
                  Interactive Prototype
                </div>
                <h3 className="text-3xl mb-3">Try the Live Prototype</h3>
                <p className="text-white/60 text-lg max-w-xl">
                  Experience the complete user flow from login to booking confirmation in our interactive Figma prototype.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="https://www.figma.com/proto/m7iNL2blf9TPAoK6vAdsuT/Flivver?page-id=292%3A4228&node-id=1311-1984&viewport=-90%2C-663%2C0.51&t=14X9Ntpo3wlutr8P-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=292%3A4229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#6A8CAF] hover:bg-[#5A7C9F] text-white rounded-xl transition-all duration-300 overflow-hidden"
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
              <p className="text-5xl text-[#6A8CAF] mb-3">94%</p>
              <p className="text-white/60">User Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-5xl text-[#6A8CAF] mb-3">65%</p>
              <p className="text-white/60">Faster Bookings</p>
            </div>
            <div className="text-center">
              <p className="text-5xl text-[#6A8CAF] mb-3">89%</p>
              <p className="text-white/60">Task Completion</p>
            </div>
            <div className="text-center">
              <p className="text-5xl text-[#6A8CAF] mb-3">4.7/5</p>
              <p className="text-white/60">Average Rating</p>
            </div>
          </div>

          {/* Key Learnings */}
          <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl mb-8">Key Learnings</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#6A8CAF] flex items-center justify-center flex-shrink-0">
                  <span className="text-white">1</span>
                </div>
                <div>
                  <h4 className="mb-2">Mobile-First is Critical</h4>
                  <p className="text-white/60">Over 80% of users preferred booking on mobile. Designing for mobile constraints first led to a cleaner, more focused desktop experience as well.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#6A8CAF] flex items-center justify-center flex-shrink-0">
                  <span className="text-white">2</span>
                </div>
                <div>
                  <h4 className="mb-2">Transparency Builds Trust</h4>
                  <p className="text-white/60">Upfront pricing and clear policies significantly reduced booking abandonment. Users appreciated knowing exactly what they'd pay before committing.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#6A8CAF] flex items-center justify-center flex-shrink-0">
                  <span className="text-white">3</span>
                </div>
                <div>
                  <h4 className="mb-2">Context Over Features</h4>
                  <p className="text-white/60">Users didn't want more features—they wanted the right features at the right time. Smart defaults and progressive disclosure improved the experience dramatically.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      {onProjectClick && (
        <OtherProjects 
          currentProjectId="flivver" 
          onProjectClick={onProjectClick}
        />
      )}

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-white/40 text-sm">Designed by Megha R</p>
              <p className="text-white/40 text-sm">megmegha07@gmail.com</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/40 text-sm">Made in Figma</p>
              <p className="text-white/40 text-sm">November 2, 2025</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
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