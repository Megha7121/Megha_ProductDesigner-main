import { ImageWithFallback } from './figma/ImageWithFallback'
import { motion } from 'motion/react'

interface ProjectsPageProps {
  onProjectClick: (id: string) => void
}

export default function ProjectsPage({ onProjectClick }: ProjectsPageProps) {
  const recentProjects = [
    {
      title: 'Buzzly',
      subtitle: 'Case Study • B2B',
      image: 'https://i.ibb.co/4wsWrkDf/Gemini-Generated-Image-ni19zvni19zvni19-1.png',
      id: 'buzzly'
    },
    {
      title: 'Buzzly - User App',
      subtitle: 'Case Study • Mobile App',
      image: 'https://i.ibb.co/4wsWrkDf/Gemini-Generated-Image-ni19zvni19zvni19-1.png',
      id: 'buzzly-user-app'
    },
    {
      title: 'Revolv',
      subtitle: 'Case Study • EV Infrastructure',
      image: 'https://i.ibb.co/BKtFGMfF/Gemini-Generated-Image-uyrcrjuyrcrjuyrc.png',
      id: 'revolv'
    },
    {
      title: 'Flivver',
      subtitle: 'Case Study • Car Rental',
      image: 'https://i.ibb.co/mVQrvrJn/Frame-503.png',
      id: 'flivver'
    },
    {
      title: 'Rescue Ride',
      subtitle: 'Case Study • Emergency Services',
      image: 'https://i.ibb.co/DDW3Cr1y/Frame-427318306.png',
      id: 'rescue-ride'
    },

  ]

  const oldProjects = [
    {
      name: 'Neuro logs',
      tags: ['Web App', 'Mobile']
    },
    {
      name: 'Dashboard for saas',
      tags: ['Web App', 'Personal Project']
    },
    {
      name: 'Tesla redesign',
      tags: ['Mobile App', 'Personal Project']
    },
    {
      name: 'Netflix Home page redesign',
      tags: ['Website', 'Personal Project']
    },
  ]

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12">
      {/* Recent Projects Section */}
      <section className="mb-12 md:mb-16 lg:mb-20">
        <h1 className="text-xl md:text-2xl mb-2" style={{ fontWeight: '500' }}>
          Recent projects
        </h1>
        <p className="text-white/40 mb-6 md:mb-8" style={{ fontSize: '14px' }}>
          (2020 - 2024)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentProjects.map((project, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
              onClick={() => onProjectClick(project.id)}
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

      {/* Old Projects Section */}
      <section className="mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-lg md:text-xl mb-6 md:mb-8" style={{ fontWeight: '500' }}>
          Design Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Product Strategy',
              description: 'Defining product vision, conducting market research, and creating roadmaps that align business goals with user needs.',
              image: 'https://images.unsplash.com/photo-1646535179579-8221bbaf2086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWduJTIwcHJvY2Vzc3xlbnwxfHx8fDE3NjIwMjQzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              color: 'from-emerald-500/20 to-transparent'
            },
            {
              title: 'UX Research',
              description: 'Conducting user interviews, usability testing, and analyzing behavioral data to inform design decisions.',
              image: 'https://images.unsplash.com/photo-1587955415524-bb264e518428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZXhwZXJpZW5jZSUyMHJlc2VhcmNofGVufDF8fHx8MTc2MjAyNDM0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              color: 'from-blue-500/20 to-transparent'
            },
            {
              title: 'Interface Design',
              description: 'Creating intuitive, aesthetically pleasing interfaces with attention to typography, color theory, and visual hierarchy.',
              image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxOTk3NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              color: 'from-purple-500/20 to-transparent'
            },
            {
              title: 'Design Systems',
              description: 'Building scalable component libraries and design tokens that ensure consistency across products and teams.',
              image: 'https://images.unsplash.com/photo-1562601555-513820e5d0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjB1aSUyMGNvbXBvbmVudHN8ZW58MXx8fHwxNzYyMDI0MzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              color: 'from-orange-500/20 to-transparent'
            },
          ].map((expertise, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <ImageWithFallback
                  src={expertise.image}
                  alt={expertise.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${expertise.color}`}></div>
              </div>
              <div className="p-6">
                <h3 className="mb-3" style={{ fontWeight: '500' }}>
                  {expertise.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {expertise.description}
                </p>
              </div>
            </div>
          ))}
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
  )
}