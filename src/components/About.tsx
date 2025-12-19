import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '100+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '15+', label: 'Awards Won' },
  ]

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl tracking-tight mb-6">
            About <span className="text-white/40">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-white/80 mb-6 leading-relaxed">
              I'm a creative designer passionate about crafting beautiful digital experiences
              that make a difference.
            </p>
            <p className="text-lg text-white/60 mb-6 leading-relaxed">
              With over 5 years of experience in the industry, I've worked with startups and
              established brands to bring their visions to life. My approach combines strategic
              thinking with meticulous attention to detail.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              When I'm not designing, you'll find me exploring new creative tools, reading about
              design theory, or contributing to open-source projects.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.2)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Philosophy section */}
        <motion.div
          className="p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl mb-6">Design Philosophy</h3>
          <p className="text-lg text-white/70 leading-relaxed">
            I believe great design is invisible. It should guide users effortlessly, solve problems
            elegantly, and create memorable experiences. Every project is an opportunity to push
            boundaries while maintaining functionality and accessibility at the core.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
