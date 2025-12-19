import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Home, Compass, Folder, Eye, FileText, User, Linkedin, Twitter, Dribbble, Instagram, Github, Pen } from 'lucide-react'
import { ImageWithFallback } from './components/figma/ImageWithFallback'
import ProjectsPage from './components/ProjectsPage'
import ExplorationsPage from './components/ExplorationsPage'
import ProjectDetailPage from './components/ProjectDetailPage'
import BuzzlyProjectPage from './components/BuzzlyProjectPage'
import BuzzlyUserAppProjectPage from './components/BuzzlyUserAppProjectPage'
import RevolvProjectPage from './components/RevolvProjectPage'
import RescueRideProjectPage from './components/RescueRideProjectPage'
import FlivverProjectPage from './components/FlivverProjectPage'
import BlogPage from './components/BlogPage'
import AboutPage from './components/AboutPage'
import HobbiesPage from './components/HobbiesPage'
import { ToolIcons } from './components/ToolIcons'

export default function App() {
  const [currentPage, setCurrentPage] = useState('explore')
  const [currentProject, setCurrentProject] = useState<string | null>(null)
  const [previousPage, setPreviousPage] = useState<string>('explore')
  const [kolkataTime, setKolkataTime] = useState('')
  const [hoveredTool, setHoveredTool] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Update Kolkata time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const kolkataTimeString = now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      })
      setKolkataTime(kolkataTimeString)
    }

    updateTime() // Initial call
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage, currentProject])

  const navItems = [
    { icon: Compass, label: 'Explore', id: 'explore' },
    { icon: Folder, label: 'Projects', id: 'projects' },
    { icon: Eye, label: 'Experience', id: 'explorations' },
    { icon: FileText, label: 'Hobbies', id: 'blog' },
    { icon: User, label: 'About', id: 'about' },
  ]

  const socialItems = [
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/megha0712' },
    { icon: Twitter, label: 'Twitter', url: 'https://x.com/Megha_712' },
    { icon: Dribbble, label: 'Dribbble', url: 'https://dribbble.com/Megha0712' },
    { icon: Github, label: 'Behance', url: 'https://www.behance.net/megha7121' },
    { icon: Pen, label: 'Medium', url: 'https://medium.com/@megmegha07' },
  ]

  const skills = [
    'User Interface',
    'Interaction Design',
    'User Testing',
    'Product Design',
    'User Experience',
    'Apps',
    'Web Apps',
    'Information Architecture',
    'Typography',
    'Color Theory',
    'Prototyping',
    'Websites',
    'Vibe Coding',
    'Wireframing',
    'Research Methodologies',
    'UX Handover Documentation',
  ]

  const tools = [
    'Figma',
    'Visily',
    'Maze',
    'Photoshop',
    'Illustrator',
    'Canva',
    'Lunacy',
    'Framer',
    'Uizard',
    'Miro',
    'FigJam',
    'Banani',
  ]

  const toolDescriptions: { [key: string]: string } = {
    'Figma': 'Collaborative design tool for UI/UX design and prototyping',
    'Visily': 'AI-powered wireframing and design tool for quick mockups',
    'Maze': 'User testing platform for validating designs and gathering insights',
    'Photoshop': 'Industry-standard image editing and graphic design software',
    'Illustrator': 'Vector graphics editor for creating logos and illustrations',
    'Canva': 'User-friendly graphic design platform for creating visual content',
    'Lunacy': 'Vector graphics software for powerful UI/UX and web design',
    'Framer': 'Interactive design and prototyping tool with code capabilities',
    'Uizard': 'AI-assisted design tool that transforms sketches into wireframes',
    'Miro': 'Online collaborative whiteboard for brainstorming and ideation',
    'FigJam': 'Collaborative whiteboard for teams to explore ideas together',
    'Banani': 'Design tool for creating beautiful visual assets and mockups',
  }

  const projects = [
    {
      title: 'Buzzly',
      subtitle: 'Case Study • B2B',
      image: 'https://i.ibb.co/4wsWrkDf/Gemini-Generated-Image-ni19zvni19zvni19-1.png',
      bg: '#9333ea',
      id: 'buzzly'
    },
    {
      title: 'Buzzly - User App',
      subtitle: 'Case Study • Mobile App',
      image: 'https://i.ibb.co/4wsWrkDf/Gemini-Generated-Image-ni19zvni19zvni19-1.png',
      bg: '#6A8CAF',
      id: 'buzzly-user-app'
    },
    {
      title: 'Revolv',
      subtitle: 'Case Study • EV Infrastructure',
      image: 'https://i.ibb.co/BKtFGMfF/Gemini-Generated-Image-uyrcrjuyrcrjuyrc.png',
      bg: '#212529',
      id: 'revolv'
    },
    {
      title: 'Flivver',
      subtitle: 'Case Study • Car Rental',
      image: 'https://i.ibb.co/mVQrvrJn/Frame-503.png',
      bg: '#6A8CAF',
      id: 'flivver'
    },
    {
      title: 'Rescue Ride',
      subtitle: 'Case Study • Emergency Services',
      image: 'https://i.ibb.co/DDW3Cr1y/Frame-427318306.png',
      bg: '#6A8CAF',
      id: 'rescue-ride'
    },

  ]

  const blogPosts = [
    { title: 'Designing for the music business', date: 'Apr 8, 2022', category: 'Music Business', badge: 'NEW' },
    { title: 'Create a landing page that performs great', date: 'Mar 15, 2022', category: 'User Experience', badge: 'NEW' },
    { title: 'How can designers prepare for the future?', date: 'Feb 28, 2022', category: 'Personal' },
    { title: 'Building with components', date: 'Dec 1, 2021', category: 'Figma' },
    { title: 'How to create an effective design portfolio', date: 'Jan 12, 2022', category: 'Framer' },
  ]

  const personalCreations = [
    {
      title: 'Something about it',
      image: 'https://images.unsplash.com/photo-1667825355065-35aadfdfbe7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNjdWxwdHVyZSUyMGFydHxlbnwxfHx8fDE3NjE0MjQxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Plastic head',
      image: 'https://images.unsplash.com/photo-1530241160077-69502379a331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwbWFubmVxdWluJTIwaGVhZHxlbnwxfHx8fDE3NjE0MjQxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Blended in red',
      image: 'https://images.unsplash.com/photo-1757030625811-7347b2eeb8ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBjb3JhbCUyMHRleHR1cmV8ZW58MXx8fHwxNzYxNDI0MTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#0f0f0f] border border-white/10 rounded-lg text-white"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Left Sidebar */}
      <aside className={`w-64 bg-[#0f0f0f] border-r border-white/[0.08] fixed h-screen flex flex-col transition-transform duration-300 z-40 ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        {/* Profile Section */}
        <div className="px-6 pt-8 pb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 overflow-hidden flex-shrink-0">
              <ImageWithFallback 
                src="https://ik.imagekit.io/lu9nbz8nj/Golkonda%20top%20Focused.jpg?updatedAt=1761672924810"
                alt="Megha R"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <div className="text-white mb-0.5" style={{ fontSize: '14px', fontWeight: '500' }}>
                Megha R
              </div>
              <div className="text-white/40 truncate" style={{ fontSize: '12px' }}>
                megmegha07@gmail.com
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="text-emerald-400" style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.05em' }}>
              AVAILABLE FOR FREELANCE
            </span>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 px-4 py-2">
          <div className="mb-3">
            <div className="px-2 mb-2 text-white/30" style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em' }}>
              MAIN
            </div>
            <ul className="space-y-1">
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <li key={index}>
                    <button
                      onClick={() => {
                        setCurrentPage(item.id)
                        if (item.id === 'projects') {
                          setCurrentProject(null)
                        }
                      }}
                      className={`w-full flex items-center gap-3 px-2 py-2 transition-colors ${
                        currentPage === item.id
                          ? 'text-orange-500'
                          : 'text-white/40 hover:text-white/70'
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
                      <span style={{ fontSize: '14px', fontWeight: '400' }}>{item.label}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Social Navigation */}
          <div className="mt-8">
            <div className="px-2 mb-2 text-white/30" style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em' }}>
              SOCIAL
            </div>
            <ul className="space-y-1">
              {socialItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <li key={index}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-2 py-2 text-white/40 hover:text-white/70 transition-colors"
                    >
                      {item.label === 'Behance' ? (
                        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                        </svg>
                      ) : (
                        <Icon className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
                      )}
                      <span style={{ fontSize: '14px', fontWeight: '400' }}>{item.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>

        {/* Footer Space */}
        <div className="h-6"></div>
      </aside>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 lg:ml-64">
        {/* Top Header */}
        <header className="flex items-center justify-end gap-4 md:gap-6 px-4 md:px-8 lg:px-16 py-6 md:py-8 border-b border-white/5">
          <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">
            CHENNAI
          </a>
          <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">
            {kolkataTime || 'LOADING...'}
          </a>
        </header>

        {currentProject === 'flivver' ? (
          <FlivverProjectPage 
            onBack={() => {
              setCurrentProject(null)
              setCurrentPage(previousPage)
            }}
            onProjectClick={(id) => {
              setCurrentProject(id)
            }}
          />
        ) : currentProject === 'rescue-ride' ? (
          <RescueRideProjectPage 
            onBack={() => {
              setCurrentProject(null)
              setCurrentPage(previousPage)
            }}
            onProjectClick={(id) => {
              setCurrentProject(id)
            }}
          />
        ) : currentProject === 'revolv' ? (
          <RevolvProjectPage 
            onBack={() => {
              setCurrentProject(null)
              setCurrentPage(previousPage)
            }}
            onProjectClick={(id) => {
              setCurrentProject(id)
            }}
          />
        ) : currentProject === 'buzzly' ? (
          <BuzzlyProjectPage 
            onBack={() => {
              setCurrentProject(null)
              setCurrentPage(previousPage)
            }}
            onProjectClick={(id) => {
              setCurrentProject(id)
            }}
          />
        ) : currentProject === 'buzzly-user-app' ? (
          <BuzzlyUserAppProjectPage 
            onBack={() => {
              setCurrentProject(null)
              setCurrentPage(previousPage)
            }}
            onProjectClick={(id) => {
              setCurrentProject(id)
            }}
          />
        ) : currentProject ? (
          <ProjectDetailPage 
            projectId={currentProject} 
            onBack={() => {
              setCurrentProject(null)
              setCurrentPage(previousPage)
            }} 
          />
        ) : currentPage === 'projects' ? (
          <ProjectsPage onProjectClick={(id) => {
            setPreviousPage(currentPage)
            setCurrentProject(id)
          }} />
        ) : currentPage === 'explorations' ? (
          <ExplorationsPage />
        ) : currentPage === 'blog' ? (
          <HobbiesPage />
        ) : currentPage === 'about' ? (
          <AboutPage />
        ) : (
          <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 max-w-7xl">
          {/* Hero Section */}
          <section className="mb-16 md:mb-24 lg:mb-32 mt-8 md:mt-12 lg:mt-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 md:mb-8" style={{ fontWeight: '500' }}>
              Turning pixels into purpose,<br />one delightful interaction at a time.
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-white/5 text-sm text-white/70 hover:bg-white/10 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>


          </section>

          {/* Recent Projects */}
          <section className="mb-16 md:mb-24 lg:mb-32">
            <h2 className="text-sm text-white/50 mb-6 md:mb-8">Recent projects (2022 - 2024)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => {
                    setPreviousPage(currentPage)
                    setCurrentProject(project.id)
                  }}
                >
                  <motion.div 
                    className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-white/5 relative"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </motion.div>
                  <div className="flex items-start gap-2">
                    <h3 className="text-sm flex-1" style={{ fontWeight: '500' }}>
                      {project.title}
                    </h3>
                    {project.badge && (
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px]" style={{ fontWeight: '600' }}>
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-white/40 mt-1">{project.subtitle}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tools Section */}
          <section className="mb-16 md:mb-24 lg:mb-32">
            <h2 className="text-sm text-white/50 mb-6 md:mb-8">Tools I use</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6" style={{ overflow: 'visible' }}>
              {tools.map((tool, index) => {
                const IconComponent = ToolIcons[tool]
                const isHovered = hoveredTool === tool
                
                // Calculate grid position for responsive layouts
                const colsPerRow = window.innerWidth >= 1280 ? 6 : 
                                   window.innerWidth >= 1024 ? 5 : 
                                   window.innerWidth >= 768 ? 4 : 
                                   window.innerWidth >= 640 ? 3 : 2
                const rowIndex = Math.floor(index / colsPerRow)
                const colIndex = index % colsPerRow
                const isFirstRow = rowIndex === 0
                
                // Better positioning logic to prevent overlap
                let tooltipPositionClass = 'left-1/2 -translate-x-1/2'
                let arrowPositionClass = 'left-1/2 -translate-x-1/2'
                
                if (colIndex === 0) {
                  tooltipPositionClass = 'left-0'
                  arrowPositionClass = 'left-4'
                } else if (colIndex === colsPerRow - 1) {
                  tooltipPositionClass = 'right-0'
                  arrowPositionClass = 'right-4'
                }
                
                return (
                  <div
                    key={index}
                    className="relative"
                    style={{ 
                      zIndex: isHovered ? 50 : 1
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.05,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      whileHover={{ 
                        y: -6,
                        scale: 1.08,
                        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                      }}
                      className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 ease-out cursor-pointer border border-white/5 hover:border-emerald-400/50 relative"
                      onMouseEnter={() => setHoveredTool(tool)}
                      onMouseLeave={() => setHoveredTool(null)}
                    >
                      {/* Gradient glow effect on hover */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-teal-400/5 to-cyan-400/10 rounded-2xl pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      />
                      
                      {/* Shine effect */}
                      {isHovered && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl pointer-events-none"
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        />
                      )}
                      
                      <motion.div 
                        className="w-12 h-12 mb-3 flex items-center justify-center relative z-10 pointer-events-none"
                        animate={isHovered ? { 
                          scale: 1.1,
                        } : { 
                          scale: 1,
                        }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {IconComponent ? (
                          <IconComponent className="w-12 h-12 max-w-[48px] max-h-[48px] object-contain transition-all duration-300" />
                        ) : (
                          <svg className="w-full h-full text-white/70 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="4" y="4" width="16" height="16" rx="2" opacity="0.3"/>
                            <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                          </svg>
                        )}
                      </motion.div>
                      
                      <span className="text-xs text-white/70 group-hover:text-white transition-colors duration-300 text-center relative z-10 pointer-events-none">
                        {tool}
                      </span>
                    </motion.div>
                    
                    {/* Compact Tooltip - centered positioning to avoid overlap */}
                    {isHovered && toolDescriptions[tool] && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.92, y: isFirstRow ? -5 : 5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: isFirstRow ? -5 : 5 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className={`absolute ${isFirstRow ? 'top-full mt-3' : 'bottom-full mb-3'} ${tooltipPositionClass} w-52 p-3 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-emerald-400/40 rounded-lg shadow-2xl z-[100] pointer-events-none`}
                      >
                        {/* Glow effect behind tooltip */}
                        <div className="absolute inset-0 bg-emerald-400/10 blur-xl rounded-lg -z-10" />
                        
                        <div className="text-[11px] text-white/90 leading-relaxed text-center">
                          {toolDescriptions[tool]}
                        </div>
                        
                        {/* Arrow - positioned based on tooltip location */}
                        {isFirstRow ? (
                          <>
                            <div className={`absolute bottom-full ${arrowPositionClass} -mb-[1px]`}>
                              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-emerald-400/40" />
                            </div>
                            <div className={`absolute bottom-full ${arrowPositionClass} -mb-[2px]`}>
                              <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[5px] border-b-[#1a1a1a]" />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className={`absolute top-full ${arrowPositionClass} -mt-[1px]`}>
                              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-emerald-400/40" />
                            </div>
                            <div className={`absolute top-full ${arrowPositionClass} -mt-[2px]`}>
                              <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-[#1a1a1a]" />
                            </div>
                          </>
                        )}
                      </motion.div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>

          {/* Blog Section */}


          {/* Personal Creations */}


          {/* Contact Section */}
          <section className="mb-16 md:mb-24 lg:mb-32">
            <div className="bg-[#111111] rounded-2xl md:rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 p-6 md:p-12 lg:p-16">
                <motion.div 
                  className="aspect-square rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-cyan-300"
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <ImageWithFallback
                    src="https://ik.imagekit.io/lu9nbz8nj/Golkonda%20top%20Focused.jpg?updatedAt=1761672924810"
                    alt="Contact"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </motion.div>

                <motion.div 
                  className="flex flex-col justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <motion.div 
                    className="text-xs text-white/40 mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    LET'S CONNECT
                  </motion.div>
                  <motion.h2 
                    className="text-2xl md:text-3xl mb-4 md:mb-6" 
                    style={{ fontWeight: '500' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    I'm not just here to design products;<br className="hidden md:block" />
                    I'm here to connect with people.
                  </motion.h2>
                  <motion.p 
                    className="text-sm text-white/60 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    As a product designer, I'm on an exciting journey to blend creativity with technology to craft memorable user experiences that resonate.
                  </motion.p>

                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="transition-colors hover:text-emerald-400 cursor-pointer"
                    >
                      <div className="text-xs text-white/40 mb-1">PHONE NUMBER</div>
                      <div className="text-sm">6382500951</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="transition-colors hover:text-emerald-400 cursor-pointer"
                    >
                      <div className="text-xs text-white/40 mb-1">EMAIL</div>
                      <div className="text-sm">megmegha07@gmail.com</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="transition-colors hover:text-emerald-400 cursor-pointer"
                    >
                      <div className="text-xs text-white/40 mb-1">CURRENT RESIDENCE</div>
                      <div className="text-sm">Chennai</div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-8 md:pt-12 pb-12 md:pb-16 border-t border-white/5">
            <div className="grid grid-cols-2 md:flex md:items-start md:justify-between gap-6 md:gap-8">
              <div className="flex flex-col gap-2">
                <div className="text-xs text-white/40">MADE BY</div>
                <div className="text-sm text-white/90">Megha R</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-xs text-white/40">EMAIL</div>
                <div className="text-sm text-white/90">megmegha07@gmail.com</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-xs text-white/40">PLATFORM</div>
                <div className="text-sm text-white/90">Figma</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-xs text-white/40">LAST UPDATED</div>
                <div className="text-sm text-white/90">October 28, 2025</div>
              </div>
            </div>
          </footer>
          </div>
        )}
      </main>
    </div>
  )
}