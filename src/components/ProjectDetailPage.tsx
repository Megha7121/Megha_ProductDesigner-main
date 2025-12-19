import { ImageWithFallback } from './figma/ImageWithFallback'
import { ArrowLeft } from 'lucide-react'

interface ProjectDetailPageProps {
  projectId: string
  onBack: () => void
}

export default function ProjectDetailPage({ projectId, onBack }: ProjectDetailPageProps) {
  // Project data - in a real app this would come from a database or API
  const projectData = {
  }

  const project = projectData[projectId as keyof typeof projectData]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] flex items-end px-4 md:px-8 lg:px-16 pb-8 md:pb-12"
        style={{
          backgroundImage: `url(${project.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Back Button - Overlaid on Hero */}
        <button
          onClick={onBack}
          className="absolute top-6 md:top-8 left-4 md:left-8 lg:left-16 z-20 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 hover:border-white/40 text-white/90 hover:text-white transition-all duration-300 group shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm">Back to Projects</span>
        </button>

        <h1 className="relative z-10 text-3xl md:text-4xl lg:text-5xl" style={{ fontWeight: '500' }}>
          {project.title}
        </h1>
      </div>

      {/* Content */}
      <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12">
        {/* Project Overview */}
        <section className="mb-12 md:mb-16 lg:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-lg md:text-xl mb-4 md:mb-6" style={{ fontWeight: '500' }}>
              Project overview
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              {project.overview}
            </p>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 mt-8 lg:mt-0">
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 md:gap-6">
              <div>
                <div className="text-white/30 mb-2" style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em' }}>
                  CLIENT
                </div>
                <div className="text-sm text-white/80">{project.client}</div>
              </div>
              <div>
                <div className="text-white/30 mb-2" style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em' }}>
                  YEAR
                </div>
                <div className="text-sm text-white/80">{project.year}</div>
              </div>
              <div>
                <div className="text-white/30 mb-2" style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em' }}>
                  ROLE
                </div>
                <div className="text-sm text-white/80">{project.role}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Sections */}
        {project.sections.map((section, index) => (
          <section key={index} className="mb-12 md:mb-16 lg:mb-20">
            <div className="mb-4 md:mb-6">
              <h2 className="text-lg md:text-xl mb-3 md:mb-4" style={{ fontWeight: '500' }}>
                {section.title}
              </h2>
              <p className="text-sm text-white/60 leading-relaxed max-w-3xl">
                {section.description}
              </p>
            </div>
            <div className="rounded-xl md:rounded-2xl overflow-hidden bg-white/5">
              <ImageWithFallback
                src={section.image}
                alt={section.title}
                className="w-full h-auto"
              />
            </div>
          </section>
        ))}

        {/* Thoughts After This Section */}
        <section className="mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-lg md:text-xl mb-4 md:mb-6" style={{ fontWeight: '500' }}>
            Thoughts after this
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="rounded-xl md:rounded-2xl overflow-hidden bg-white/5">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1631984564919-1f6b2313a71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHNuZWFrZXJzJTIwcHJvZHVjdHxlbnwxfHx8fDE3NjE0Nzg4ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hanging sneakers"
                className="w-full aspect-square object-cover"
              />
              <div className="p-3 md:p-4 bg-black/20">
                <p className="text-xs text-white/60">Hanging sneakers</p>
              </div>
            </div>
            <div className="rounded-xl md:rounded-2xl overflow-hidden bg-white/5">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1557930137-1e47d53212ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwbGFtcCUyMG1vZGVybnxlbnwxfHx8fDE3NjE0Nzg4ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Lamp"
                className="w-full aspect-square object-cover"
              />
              <div className="p-3 md:p-4 bg-black/20">
                <p className="text-xs text-white/60">Lamp</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Section with Portrait */}
        <section className="mb-12 md:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-xl md:rounded-2xl overflow-hidden bg-white/5">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1613730317928-246094cb6a82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwYmx1ZXxlbnwxfHx8fDE3NjE0Nzg4ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Designer portrait"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <h2 className="text-xl md:text-2xl mb-4 md:mb-6" style={{ fontWeight: '500' }}>
                I'm not just here to design products;<br className="hidden md:block" />
                I'm here to connect.
              </h2>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                As a product designer, I'm on an exciting journey to blend creativity with technology to craft memorable user experiences that resonate. Every project is an opportunity to solve real problems and create meaningful connections.
              </p>
              <div className="space-y-3">
                <div>
                  <div className="text-white/30 mb-1" style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em' }}>
                    GET IN TOUCH
                  </div>
                  <div className="text-sm">hello@iamtomdev.com</div>
                </div>
                <div>
                  <div className="text-white/30 mb-1" style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em' }}>
                    VIEW RESUME
                  </div>
                  <a href="#" className="text-sm text-orange-500 hover:text-orange-400 transition-colors">
                    Tom Resume
                  </a>
                </div>
              </div>
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
    </div>
  )
}
