import { motion } from 'motion/react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface OtherProjectsProps {
  currentProjectId: string
  onProjectClick: (id: string) => void
}

const allProjects = [
  {
    id: 'flivver',
    title: 'Flivver',
    subtitle: 'Case Study • Car Rental',
    image: 'https://i.ibb.co/mVQrvrJn/Frame-503.png',
  },
  {
    id: 'rescue-ride',
    title: 'Rescue Ride',
    subtitle: 'Case Study • Emergency Services',
    image: 'https://i.ibb.co/DDW3Cr1y/Frame-427318306.png',
  },
  {
    id: 'revolv',
    title: 'Revolv',
    subtitle: 'Case Study • EV Infrastructure',
    image: 'https://i.ibb.co/BKtFGMfF/Gemini-Generated-Image-uyrcrjuyrcrjuyrc.png',
  },
  {
    id: 'buzzly',
    title: 'Buzzly',
    subtitle: 'Case Study • B2B',
    image: 'https://i.ibb.co/4wsWrkDf/Gemini-Generated-Image-ni19zvni19zvni19-1.png',
  },
  {
    id: 'buzzly-user-app',
    title: 'Buzzly - User App',
    subtitle: 'Case Study • Mobile App',
    image: 'https://i.ibb.co/4wsWrkDf/Gemini-Generated-Image-ni19zvni19zvni19-1.png',
  },
]

export default function OtherProjects({ currentProjectId, onProjectClick }: OtherProjectsProps) {
  // Filter out the current project and show all remaining projects
  const otherProjects = allProjects
    .filter(project => project.id !== currentProjectId)

  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-xl md:text-2xl mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          More Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => onProjectClick(project.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-white/5 relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-sm mb-1 group-hover:text-emerald-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-xs text-white/40">{project.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}