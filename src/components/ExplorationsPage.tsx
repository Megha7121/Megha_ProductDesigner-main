import { Briefcase, TrendingUp, Zap, Users, Palette, Code } from 'lucide-react'
import { motion } from 'motion/react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export default function ExplorationsPage() {
  const experiences = [
    {
      company: 'Spack Solutions',
      role: 'Product Designer',
      period: 'APR 2025 - NOW',
      status: 'current',
      color: 'emerald',
      icon: Briefcase,
      projects: [
        {
          name: 'Social Sync',
          description: 'Designed and strategized the social media marketing SaaS tool dashboard, landing pages, and waiting page while collaborating with stakeholders and developers, resulting in a 25% increase in user engagement and smoother onboarding flow.',
          impact: '25% increase in user engagement and smoother onboarding flow',
          metrics: ['Dashboard Design', 'Landing Pages', 'Stakeholder Collaboration'],
        },
        {
          name: 'One Hub',
          description: 'Built the landing page of this auditing and IT services–providing platform with a modern and professional design, contributing to a 30% boost in lead generation and improved brand perception.',
          impact: '30% boost in lead generation and improved brand perception',
          metrics: ['Modern Design', 'Professional UI', 'Lead Generation'],
        },
        {
          name: 'Ekambond',
          description: 'Shaped the landing page of this SaaS matrimonial product with a touch of love and affection while retaining the SaaS look overall, which led to a 20% higher sign-up rate and positive user feedback on design appeal.',
          impact: '20% higher sign-up rate and positive user feedback on design appeal',
          metrics: ['SaaS Design', 'Matrimonial Product', 'High Conversion'],
        }
      ],
      tools: ['Figma', 'Framer', 'Miro', 'Figma', 'Lunacy', 'ChatGPT', 'Perplexity', 'Attention Insight', 'Synthetic Users']
    },
    {
      company: 'NielsenIQ',
      role: 'NRPS Associate',
      period: 'APR 2023 - MAY 2024',
      status: 'past',
      color: 'blue',
      icon: TrendingUp,
      projects: [
        {
          name: 'Market Strategy & Analytics',
          description: 'Analyzed market trends, competitors, and buyer behavior to refine pricing, enhance product features, sharpen marketing, and drive strategic market impact.',
          impact: '80% increase in revenue from OneCT, Diet Moi, YIOO',
          metrics: ['Market Analysis', 'Competitor Research', 'Pricing Strategy', 'Product Enhancement'],
        }
      ],
      tools: ['OGRDS', 'Excel', 'MS Word']
    },
    {
      company: 'Infiniti Software Solutions',
      role: 'Software Trainee',
      period: 'AUG 2022 - FEB 2023',
      status: 'past',
      color: 'purple',
      icon: Code,
      projects: [
        {
          name: 'Malaysian Airline Solutions',
          description: 'Collaborated with a Malaysian airline to design a branded landing site in Figma, develop a scalable Hire-Hybrid Intranet and Integrate Group Revenue Management tools for predictionistic response analysis.',
          impact: '50% improvement in team efficiency and 30% reduction in revenue leakage',
          metrics: ['Branded Landing', 'Intranet Design', 'Revenue Management', 'Team Efficiency'],
        }
      ],
      tools: ['Figma', 'Visual Studio Code']
    }
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string, text: string, border: string, glow: string }> = {
      emerald: { 
        bg: 'bg-emerald-500/10', 
        text: 'text-emerald-400', 
        border: 'border-emerald-500/30',
        glow: 'shadow-emerald-500/20'
      },
      blue: { 
        bg: 'bg-blue-500/10', 
        text: 'text-blue-400', 
        border: 'border-blue-500/30',
        glow: 'shadow-blue-500/20'
      },
      purple: { 
        bg: 'bg-purple-500/10', 
        text: 'text-purple-400', 
        border: 'border-purple-500/30',
        glow: 'shadow-purple-500/20'
      }
    }
    return colors[color] || colors.emerald
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12">
      {/* Header */}
      <div className="mb-12 md:mb-16">
        <div className="flex items-start sm:items-center gap-3 mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl mb-1" style={{ fontWeight: '500' }}>
              Work Journey
            </h1>
            <p className="text-white/40 text-xs sm:text-sm" style={{ fontSize: '14px' }}>
              Crafting experiences that matter, one pixel at a time
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/50 via-blue-500/50 to-purple-500/50" />

        {experiences.map((exp, index) => {
          const colors = getColorClasses(exp.color)
          const Icon = exp.icon

          return (
            <div key={index} className="relative mb-16 last:mb-0">
              {/* Timeline Dot */}
              <div className={`absolute left-0 w-12 h-12 rounded-full ${colors.bg} border-2 ${colors.border} flex items-center justify-center z-10 shadow-lg ${colors.glow}`}>
                <Icon className={`w-6 h-6 ${colors.text}`} />
              </div>

              {/* Content Card */}
              <div className="ml-20 group">
                <div className="bg-white/[0.03] rounded-2xl p-8 border border-white/[0.08] hover:border-white/[0.12] transition-all duration-300 hover:bg-white/[0.05]">
                  {/* Company Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-2xl" style={{ fontWeight: '500' }}>
                          {exp.company}
                        </h2>
                        {exp.status === 'current' && (
                          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs" style={{ fontWeight: '600' }}>
                            CURRENT
                          </span>
                        )}
                      </div>
                      <p className={`text-lg ${colors.text} mb-1`} style={{ fontWeight: '500' }}>
                        {exp.role}
                      </p>
                      <p className="text-white/40 text-sm">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="space-y-6 mb-6">
                    {exp.projects.map((project, pIndex) => (
                      <div key={pIndex} className="border-l-2 border-white/[0.08] pl-6 hover:border-white/20 transition-colors">
                        <h3 className="text-lg mb-2" style={{ fontWeight: '500' }}>
                          {project.name}
                        </h3>
                        <p className="text-white/60 text-sm mb-3 leading-relaxed">
                          {project.description}
                        </p>
                        
                        {/* Impact Badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${colors.bg} border ${colors.border} mb-3`}>
                          <Zap className={`w-4 h-4 ${colors.text}`} />
                          <span className={`text-sm ${colors.text}`} style={{ fontWeight: '500' }}>
                            {project.impact}
                          </span>
                        </div>

                        {/* Metrics */}
                        <div className="flex flex-wrap gap-2">
                          {project.metrics.map((metric, mIndex) => (
                            <span
                              key={mIndex}
                              className="px-3 py-1 rounded-full bg-white/5 text-white/50 text-xs hover:bg-white/10 transition-colors"
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tools */}
                  <div className="pt-4 border-t border-white/[0.08]">
                    <p className="text-white/30 text-xs mb-3" style={{ fontWeight: '600', letterSpacing: '0.08em' }}>
                      TOOLS & TECHNOLOGIES
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-3 py-1.5 rounded-lg bg-white/[0.08] text-white/70 text-xs hover:bg-white/[0.12] transition-colors"
                          style={{ fontWeight: '500' }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-3 gap-6">
        <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/[0.08] text-center">
          <div className="text-3xl mb-2 text-emerald-400" style={{ fontWeight: '600' }}>
            2+
          </div>
          <div className="text-white/40 text-sm">
            Years of Experience
          </div>
        </div>
        <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/[0.08] text-center">
          <div className="text-3xl mb-2 text-blue-400" style={{ fontWeight: '600' }}>
            5
          </div>
          <div className="text-white/40 text-sm">
            Projects Delivered
          </div>
        </div>
        <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/[0.08] text-center">
          <div className="text-3xl mb-2 text-purple-400" style={{ fontWeight: '600' }}>
            80%
          </div>
          <div className="text-white/40 text-sm">
            Revenue Growth Impact
          </div>
        </div>
      </div>

      {/* Let's Connect Section */}
      <div className="mt-16 bg-white/[0.02] rounded-3xl border border-white/[0.08] overflow-hidden">
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
              className="text-sm text-white/60 mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              As a product designer, I'm on an exciting journey to blend creativity with technology to craft memorable user experiences that resonate.
            </motion.p>

            <div className="space-y-3 md:space-y-4">
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

      {/* Footer */}
      <footer className="pt-12 pb-8 mt-16 border-t border-white/[0.08]">
        <div className="grid grid-cols-4 gap-8 text-xs">
          <div>
            <div className="text-white/30 mb-2" style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em' }}>
              DESIGNED BY
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