import { ImageWithFallback } from './figma/ImageWithFallback'

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'Designing for the music business',
      date: 'Apr 5, 2022',
      image: 'https://images.unsplash.com/photo-1576978264949-aa354035987d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbiUyMHBvcnRyYWl0JTIwbWljcm9waG9uZXxlbnwxfHx8fDE3NjE0Nzk0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      badge: 'NEW'
    },
    {
      title: 'Create a landing page that performs great',
      date: 'Mar 15, 2022',
      image: 'https://images.unsplash.com/photo-1711397818306-863530cd27c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdvcmtpbmclMjBkZXNrJTIwcHVycGxlfGVufDF8fHx8MTc2MTQ3OTQ1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      badge: 'NEW'
    },
    {
      title: 'How can designers prepare for the future?',
      date: 'Feb 16, 2022',
      image: 'https://images.unsplash.com/photo-1640823127518-65e1ad563576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ciUyMGhlYWRzZXQlMjBmdXR1cmV8ZW58MXx8fHwxNzYxNDc5NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Building with components',
      date: 'Feb 6, 2022',
      image: 'https://images.unsplash.com/photo-1755851238606-d87214e02754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjB0dXJxdW9pc2V8ZW58MXx8fHwxNzYxNDc5NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'How to create an effective design portfolio',
      date: 'Jan 12, 2022',
      image: 'https://images.unsplash.com/photo-1716631252604-5dc8ce725740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGxhcHRvcCUyMHBpbmt8ZW58MXx8fHwxNzYxNDc5NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="px-16 pt-16 pb-12">
        <h1 className="text-4xl mb-3" style={{ fontWeight: '500' }}>
          Some of my words
        </h1>
        <p className="text-sm text-white/50">
          Here I am sharing information that I have gained along the way
        </p>
      </section>

      {/* Blog Grid */}
      <section className="px-16 pb-20">
        <div className="grid grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
              style={{
                gridRow: index === 0 ? 'span 1' : index === 4 ? 'span 1' : 'auto'
              }}
            >
              <div className="rounded-2xl overflow-hidden mb-4 bg-white/5 relative">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{
                    aspectRatio: index === 0 || index === 4 ? '4/3' : '16/10'
                  }}
                />
                {post.badge && (
                  <span className="absolute top-4 right-4 px-2 py-1 rounded bg-[#03ff68] text-black text-[10px]" style={{ fontWeight: '500' }}>
                    {post.badge}
                  </span>
                )}
              </div>
              <h3 className="text-base mb-2" style={{ fontWeight: '400' }}>
                {post.title}
              </h3>
              <p className="text-xs text-white/40">
                {post.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-16 py-8 border-t border-white/[0.08]">
        <div className="grid grid-cols-4 gap-8 text-xs">
          <div>
            <div className="text-white/30 mb-2" style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em' }}>
              MADE BY
            </div>
            <div className="text-white/60">Tom D</div>
          </div>
          <div>
            <div className="text-white/30 mb-2" style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em' }}>
              EMAIL
            </div>
            <div className="text-white/60">hello@iamtomdev.com</div>
          </div>
          <div>
            <div className="text-white/30 mb-2" style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em' }}>
              PLATFORM
            </div>
            <div className="text-white/60">Framer</div>
          </div>
          <div>
            <div className="text-white/30 mb-2" style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em' }}>
              LAST UPDATED
            </div>
            <div className="text-white/60">September 21, 2024</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
