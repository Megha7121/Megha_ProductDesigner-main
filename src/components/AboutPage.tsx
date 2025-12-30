import { ImageWithFallback } from './figma/ImageWithFallback'
import { Download, Linkedin, Twitter, Dribbble, Instagram } from 'lucide-react'
import { motion } from 'motion/react'

export default function AboutPage() {
  const skills = [
    'SKILLS LIST',
    'UX Research',
    'UX Design',
    'Figma',
    'Agility Methodology',
    'Product Thinking',
    'Core Analysis',
    'Interaction Design',
    'WordPress Design'
  ]

  const experience = [
    { company: 'Netflix', role: 'Product Design Lead', period: 'Jan. 2023 - Current' },
    { company: 'Freelance', role: 'Product Designer', period: '2020 - Current' },
    { company: 'Acme', role: 'Senior Product Designer', period: 'Sep. 2021 - Jun 2023' },
    { company: 'Ikana', role: 'Product Designer', period: 'Aug. 2020 - Sep. 2020' },
    { company: 'Verona', role: 'Graphic Designer', period: 'Mar. 2020 - Aug. 2020' }
  ]

  const testimonials = [
    {
      quote: '"Her user-centric approach and innovative solutions elevate every project. She\'s a valued asset to any design team."',
      name: 'Kate Smith',
      role: 'Product Designer, Product Community',
      avatar: 'KS'
    },
    {
      quote: '"Working with Alex on our startup\'s product was an incredible experience. Her expertise in UX design transformed our ideas due to a complete interface."',
      name: 'Joe Mur',
      role: 'Founder / CEO, Slash',
      avatar: 'JM'
    },
    {
      quote: '"Mandy\'s design expertise is a game-changer. Her work not only elevate any project. She\'s a valuable asset to any design team."',
      name: 'Andy Jones',
      role: 'UX Designer, Figma',
      avatar: 'AJ'
    }
  ]

  const interests = [
    { label: 'Live Concert', tag: 'Musician' },
    { label: 'Hikes & Trips', tag: 'Outdoorsy' },
    { label: 'Logo Design', tag: 'Brand Design' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Portrait - Full Screen */}
      <section className="relative h-screen mb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 overflow-hidden">
          <motion.div
            className="w-full h-full"
            initial={{ 
              scale: 1.2, 
              opacity: 0,
              filter: 'blur(10px)'
            }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              filter: 'blur(0px)'
            }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.6, ease: 'easeOut' }
            }}
          >
            <ImageWithFallback
              src="/images/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>

        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section className="px-4 md:px-8 lg:px-16 mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-xl md:text-2xl mb-4 md:mb-6" style={{ fontWeight: '500' }}>
          About me
        </h2>
        <p className="text-sm md:text-base text-white/70 leading-relaxed m-[0px] p-[0px]">
         I’m a Product Designer (UX/UI) with a background in computer science, focused on designing clear, usable digital products across web and mobile platforms. My journey spans software development, data analysis, and product design—experiences that shaped a strong analytical approach to UX and problem-solving. Early exposure to real-world systems and data-driven decision-making helps me design with structure, constraints, and scalability in mind. Currently, I work as a Product Designer, owning end-to-end design for SaaS and consumer-facing platforms. I collaborate closely with developers and stakeholders to translate complex requirements into intuitive user flows and implementation-ready interfaces. I enjoy working on products where clarity matters—especially in data-heavy or workflow-driven systems—and I’m always focused on making complex problems simpler and more meaningful for users.
        </p>
      </section>

      {/* Resume Section */}


      {/* Testimonials Section */}
      <section className="px-4 md:px-8 lg:px-16 mb-12 md:mb-16 lg:mb-20">
        <motion.h2 
          className="text-xl md:text-2xl mb-6 md:mb-8" 
          style={{ fontWeight: '500' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Design Principles
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              icon: '👥',
              title: 'User-Centered',
              description: 'I design around real user workflows and pain points, grounding decisions in observed behavior rather than assumptions or trends.',
              accent: '#10b981'
            },
            {
              icon: '✨',
              title: 'Clarity over Complexity',
              description: 'I reduce cognitive load by prioritizing information, simplifying flows, and removing friction—especially in complex or data-heavy products.',
              accent: '#a855f7'
            },
            {
              icon: '♿',
              title: 'Accessible by Default',
              description: 'I consider accessibility early in the design process, ensuring interfaces remain usable across abilities, devices, and real-world contexts.',
              accent: '#3b82f6'
            },
            {
              icon: '📊',
              title: 'Insight-Led Decisions',
              description: 'I use research insights, usage data, and feedback loops to validate design choices and guide iteration, not just intuition.',
              accent: '#f59e0b'
            },
            {
              icon: '🔄',
              title: 'Real-World Constraints',
              description: 'I design with technical, business, and time constraints in mind, creating solutions that are practical, scalable, and ready to ship.',
              accent: '#6366f1'
            },
            {
              icon: '💚',
              title: 'Systems Thinking',
              description: 'I think beyond individual screens, designing systems that account for edge cases, scalability, and consistency across the product.',
              accent: '#ec4899'
            }
          ].map((principle, index) => (
            <motion.div 
              key={index}
              initial={{ 
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40,
                rotateY: index % 2 === 0 ? -15 : 15
              }}
              whileInView={{ 
                opacity: 1,
                x: 0,
                rotateY: 0
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="relative cursor-pointer group"
              style={{ perspective: '1000px' }}
            >
              {/* Main card */}
              <motion.div
                className="relative bg-white/5 border border-white/10 rounded-xl p-6 overflow-hidden"
                whileHover={{ 
                  y: -8,
                  boxShadow: `0 20px 40px -10px ${principle.accent}40`,
                  borderColor: principle.accent,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Gradient sweep on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, transparent 0%, ${principle.accent}15 50%, transparent 100%)`,
                    backgroundSize: '200% 200%',
                    backgroundPosition: '100% 0'
                  }}
                  animate={{
                    backgroundPosition: ['100% 0', '0% 100%']
                  }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeInOut'
                  }}
                />

                {/* Content container */}
                <div className="relative z-10">
                  {/* Icon with subtle bounce */}
                  <div className="relative w-12 h-12 mb-4">
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl relative z-10"
                      whileHover={{
                        scale: 1.15,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.4 }
                      }}
                    >
                      {principle.icon}
                    </motion.div>
                  </div>

                  {/* Title */}
                  <motion.h3 
                    className="text-lg mb-3 relative transition-colors duration-300"
                    style={{ 
                      fontWeight: '500',
                      color: 'rgb(255, 255, 255, 0.9)'
                    }}
                    whileHover={{
                      color: principle.accent,
                      x: 4,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {principle.title}
                  </motion.h3>

                  {/* Description */}
                  <p 
                    className="text-sm text-white/60 leading-relaxed"
                  >
                    {principle.description}
                  </p>
                </div>

                {/* Corner accent dot */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    backgroundColor: principle.accent,
                    boxShadow: `0 0 12px ${principle.accent}`
                  }}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{
                    duration: 0.3
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 md:px-8 lg:px-16 mb-12 md:mb-16 lg:mb-20">
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
               I think in flows and systems;<br className="hidden md:block" />
              not just screens.
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
                  <div className="text-xs text-white/40 mb-1">LINKEDIN</div>
                  <div className="text-sm">www.linkedin.com/in/megha0712</div>
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
      <footer className="px-4 md:px-8 lg:px-16 py-6 md:py-8 border-t border-white/[0.08]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-xs">
          <div>
            <div className="text-white/30 mb-2" style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em' }}>
              MADE BY
            </div>
            <div className="text-white/60">Megha R</div>
          </div>
          <div>
            <div className="text-white/30 mb-2" style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em' }}>
              EMAIL
            </div>
            <div className="text-white/60">megmegha07@gmail.com</div>
          </div>
          <div>
            <div className="text-white/30 mb-2" style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em' }}>
              PLATFORM
            </div>
            <div className="text-white/60">Figma</div>
          </div>
          <div>
            <div className="text-white/30 mb-2" style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em' }}>
              LAST UPDATED
            </div>
            <div className="text-white/60">October 28, 2025</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
