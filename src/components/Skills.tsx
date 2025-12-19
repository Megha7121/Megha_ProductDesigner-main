import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Palette, Code, Smartphone, Zap, Layers, PenTool } from 'lucide-react'

const skills = [
  {
    icon: Palette,
    title: 'Visual Design',
    description: 'Creating stunning visual identities that capture brand essence and resonate with audiences.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building responsive, performant websites with modern technologies and best practices.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smartphone,
    title: 'UI/UX Design',
    description: 'Designing intuitive interfaces that prioritize user experience and accessibility.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Zap,
    title: 'Prototyping',
    description: 'Rapid prototyping and iteration to validate ideas and refine solutions quickly.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Layers,
    title: 'Brand Strategy',
    description: 'Developing comprehensive brand strategies that drive business growth and recognition.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: PenTool,
    title: 'Creative Direction',
    description: 'Leading creative visions from concept to execution with attention to every detail.',
    color: 'from-pink-500 to-purple-500',
  },
]

const tools = [
  'Figma',
  'Adobe XD',
  'Sketch',
  'Illustrator',
  'Photoshop',
  'After Effects',
  'Framer',
  'Webflow',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Three.js',
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl tracking-tight mb-6">
            Skills & <span className="text-white/40">Expertise</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl">
            A diverse skill set honed through years of experience and continuous learning.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Tools section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl mb-8">Tools I Use</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={index}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillCard({
  skill,
  index,
  isInView,
}: {
  skill: typeof skills[0]
  index: number
  isInView: boolean
}) {
  const Icon = skill.icon

  return (
    <motion.div
      className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, borderColor: 'rgba(255,255,255,0.2)' }}
    >
      <motion.div
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6`}
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Icon className="w-7 h-7 text-white" />
      </motion.div>

      <h3 className="text-xl mb-3">{skill.title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{skill.description}</p>
    </motion.div>
  )
}
