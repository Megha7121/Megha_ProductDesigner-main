import { useState, useRef, useEffect } from 'react'
import { motion } from 'motion/react'
import { Film, Tv, Pencil, Heart, Music, BookOpen, Play, Pause, Volume2, Star, Sparkles } from 'lucide-react'

export default function HobbiesPage() {
  const [activeHobby, setActiveHobby] = useState<number | null>(null)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [sketchStrokes, setSketchStrokes] = useState<number[]>([])
  const [petHearts, setPetHearts] = useState<number[]>([])
  const [readingProgress, setReadingProgress] = useState(0)
  const [activeNetflixShow, setActiveNetflixShow] = useState<number | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const hobbies = [
    {
      id: 1,
      title: 'Movies & Series',
      subtitle: 'Visual Storytelling',
      icon: Film,
      color: 'from-red-500 to-pink-500',
      accent: 'text-red-400',
      bg: 'bg-red-500/10',
      border: 'border-red-500/30',
      description: 'From indie films to binge-worthy series, I love getting lost in compelling narratives and cinematic universes.',
      favorites: ['Sci-Fi', 'Thriller', 'Horror', 'Animation']
    },
    {
      id: 2,
      title: 'Sketching',
      subtitle: 'Drawing Ideas',
      icon: Pencil,
      color: 'from-purple-500 to-indigo-500',
      accent: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
      description: 'Capturing moments and ideas on paper, from quick doodles to detailed illustrations.',
      favorites: ['Portraits', 'Abstract', 'Nature', 'Concepts']
    },
    {
      id: 3,
      title: 'Petting Animals',
      subtitle: 'Furry Friends',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      accent: 'text-pink-400',
      bg: 'bg-pink-500/10',
      border: 'border-pink-500/30',
      description: 'Nothing beats the joy of spending time with adorable pets and furry companions.',
      favorites: ['Dogs', 'Cats', 'Birds', 'Fish']
    },
    {
      id: 4,
      title: 'Listening to Music',
      subtitle: 'Sound & Soul',
      icon: Music,
      color: 'from-emerald-500 to-teal-500',
      accent: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      description: 'Music is my constant companion, setting the mood for every moment of the day.',
      favorites: ['Indie', 'Electronic', 'Classical', 'Pop']
    },
    {
      id: 5,
      title: 'Reading Books',
      subtitle: 'Words & Worlds',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      accent: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      description: 'Getting lost in pages, exploring new perspectives, and expanding my imagination through literature.',
      favorites: ['Fiction', 'Non-Fiction', 'Auto Biography', 'Psychology']
    }
  ]

  const handleSketchHover = () => {
    setSketchStrokes([...sketchStrokes, Date.now()])
    setTimeout(() => {
      setSketchStrokes(prev => prev.slice(1))
    }, 2000)
  }

  const handlePetClick = () => {
    setPetHearts([...petHearts, Date.now()])
    setTimeout(() => {
      setPetHearts(prev => prev.slice(1))
    }, 1500)
  }

  const handleBookProgress = () => {
    if (readingProgress < 100) {
      setReadingProgress(prev => Math.min(prev + 20, 100))
    } else {
      setReadingProgress(0)
    }
  }

  const toggleVideo = () => {
    setVideoPlaying(!videoPlaying)
  }

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause()
        setMusicPlaying(false)
      } else {
        audioRef.current.play()
        setMusicPlaying(true)
      }
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      const handleEnded = () => setMusicPlaying(false)
      audio.addEventListener('ended', handleEnded)
      return () => audio.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-12 md:pt-20 lg:pt-24 pb-12 md:pb-16">
      {/* Hidden Audio Player */}
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        preload="metadata"
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-2 md:gap-3 mb-4">
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />
            <h1 className="text-white/40 tracking-[0.1em] md:tracking-[0.2em] text-xs md:text-sm">HOBBIES & PASSIONS</h1>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
            Beyond the pixels
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl">
            When I'm not designing interfaces, you'll find me exploring these creative pursuits that fuel my inspiration.
          </p>
        </motion.div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon
            return (
              <motion.div
                key={hobby.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveHobby(hobby.id)}
                onMouseLeave={() => setActiveHobby(null)}
                className={`relative bg-white/[0.03] rounded-2xl p-6 border border-white/[0.08] hover:border-white/[0.2] transition-all duration-500 cursor-pointer overflow-hidden group ${
                  activeHobby === hobby.id ? 'scale-[1.02]' : ''
                }`}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon with Animation */}
                <div className={`relative w-16 h-16 rounded-xl ${hobby.bg} border ${hobby.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className={`w-8 h-8 ${hobby.accent}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl mb-2">{hobby.title}</h3>
                <p className={`text-sm ${hobby.accent} mb-4`}>{hobby.subtitle}</p>
                <p className="text-white/60 text-sm mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">
                  {hobby.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {hobby.favorites.map((fav, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: activeHobby === hobby.id ? i * 0.1 : 0 }}
                      className={`px-3 py-1 rounded-lg ${hobby.bg} text-xs ${hobby.accent} border ${hobby.border}`}
                    >
                      {fav}
                    </motion.span>
                  ))}
                </div>

                {/* Sparkle Effect */}
                {activeHobby === hobby.id && (
                  <motion.div
                    className="absolute top-4 right-4"
                    initial={{ opacity: 0, rotate: 0, scale: 0 }}
                    animate={{ opacity: 1, rotate: 180, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Sparkles className={`w-5 h-5 ${hobby.accent}`} />
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Interactive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Movies - Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white/[0.03] rounded-2xl p-8 border border-white/[0.08] hover:border-red-500/30 transition-all duration-500 group relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <Film className="w-6 h-6 text-red-400" />
              <h3 className="text-xl">Cinema Mode</h3>
            </div>
            
            {/* Video Player / Film Strip */}
            {!videoPlaying ? (
              <div 
                className="relative h-32 bg-white/[0.02] rounded-lg border border-red-500/20 overflow-hidden cursor-pointer"
                onClick={toggleVideo}
              >
                {/* Film perforations */}
                <div className="absolute left-0 top-0 bottom-0 w-2 flex flex-col justify-around">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-red-500/30 rounded-sm" />
                  ))}
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-2 flex flex-col justify-around">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-red-500/30 rounded-sm" />
                  ))}
                </div>
                
                {/* Animated film frames */}
                <div className="absolute inset-0 flex items-center justify-center gap-2 px-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 h-20 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded border border-red-500/30"
                      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                      animate={{ 
                        opacity: [0.3, 1, 0.3],
                        scale: [0.9, 1, 0.9],
                        rotateY: [0, 0, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: 'easeInOut'
                      }}
                    >
                      <motion.div
                        className="w-full h-full bg-gradient-to-br from-red-500 to-pink-500 opacity-0"
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
                
                {/* Projector light effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/10 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />

                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleVideo}
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                </div>
              </div>
            ) : (
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-lg overflow-hidden aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/i8vXroMMGdM?autoplay=1"
                    title="Animated Short Film"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleVideo}
                  className="w-full py-2 px-4 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-sm text-white/60 hover:text-white transition-colors"
                >
                  Close Player
                </motion.button>
              </motion.div>
            )}
            
            <div className="mt-6 flex items-center gap-2">
              {videoPlaying ? (
                <Pause className="w-4 h-4 text-red-400" />
              ) : (
                <Play className="w-4 h-4 text-red-400" />
              )}
              <span className="text-sm text-white/60">
                {videoPlaying ? 'Now playing...' : 'Click to watch...'}
              </span>
            </div>
          </motion.div>

          {/* Sketching - Interactive Canvas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white/[0.03] rounded-2xl p-8 border border-white/[0.08] hover:border-purple-500/30 transition-all duration-500 group relative overflow-hidden"
            onMouseMove={handleSketchHover}
          >
            <div className="flex items-center gap-3 mb-6">
              <Pencil className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl">Sketch Canvas</h3>
            </div>
            <div className="relative h-32 bg-white/[0.02] rounded-lg border border-white/[0.05]">
              {sketchStrokes.map((stroke, i) => (
                <motion.div
                  key={stroke}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full"
                  initial={{ 
                    opacity: 1, 
                    scale: 1,
                    x: Math.random() * 200,
                    y: Math.random() * 100
                  }}
                  animate={{ 
                    opacity: 0, 
                    scale: 0,
                  }}
                  transition={{ duration: 2 }}
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-white/60">Hover to draw</p>
          </motion.div>

          {/* Music Player */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white/[0.03] rounded-2xl p-8 border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-500 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <Music className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl">Now Playing</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMusic}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  {musicPlaying ? (
                    <Pause className="w-5 h-5 text-white" />
                  ) : (
                    <Play className="w-5 h-5 text-white ml-1" />
                  )}
                </motion.button>
                <div className="flex-1">
                  <div className="text-sm mb-2">Blinding Lights - The Weeknd</div>
                  <div className="h-1 bg-white/[0.1] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
                      initial={{ width: '0%' }}
                      animate={{ width: musicPlaying ? '100%' : '0%' }}
                      transition={{ duration: 200, ease: 'linear' }}
                    />
                  </div>
                </div>
                <Volume2 className="w-5 h-5 text-emerald-400" />
              </div>
              {musicPlaying && (
                <motion.div 
                  className="flex gap-1 justify-center items-end h-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-gradient-to-t from-emerald-500 to-teal-500 rounded-full"
                      animate={{
                        height: [10, 40, 10],
                      }}
                      transition={{
                        duration: 0.5 + Math.random() * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.05,
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Petting - Interactive Hearts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white/[0.03] rounded-2xl p-8 border border-white/[0.08] hover:border-pink-500/30 transition-all duration-500 group relative overflow-hidden cursor-pointer"
            onClick={handlePetClick}
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-pink-400" />
              <h3 className="text-xl">Pet Love</h3>
            </div>
            <div className="relative h-32 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePetClick}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center cursor-pointer relative overflow-visible"
              >
                <motion.div
                  animate={petHearts.length > 0 ? {
                    rotate: [0, -10, 10, -10, 10, 0],
                    scale: [1, 1.1, 1.1, 1.1, 1.1, 1]
                  } : {}}
                  transition={{ duration: 0.5 }}
                  className="text-5xl"
                >
                  {petHearts.length > 0 ? '🐶' : '🐕'}
                </motion.div>
                {/* Wagging tail effect */}
                {petHearts.length > 0 && (
                  <motion.div
                    className="absolute -right-2 top-1/2 text-2xl origin-left"
                    animate={{ rotate: [0, 20, -20, 20, -20, 0] }}
                    transition={{ duration: 0.3, repeat: 2 }}
                  >
                    🦴
                  </motion.div>
                )}
              </motion.div>
              {/* Flying hearts when puppy is petted */}
              {petHearts.map((heart) => (
                <motion.div
                  key={heart}
                  className="absolute"
                  initial={{ 
                    opacity: 1, 
                    y: 0,
                    x: (Math.random() - 0.5) * 50,
                    scale: 1
                  }}
                  animate={{ 
                    opacity: 0, 
                    y: -100,
                    scale: 0.5
                  }}
                  transition={{ duration: 1.5 }}
                >
                  <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
                </motion.div>
              ))}
            </div>
            <p className="mt-4 text-sm text-white/60 text-center">Click to pet</p>
          </motion.div>

          {/* Reading - Progress Tracker */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-white/[0.03] rounded-2xl p-8 border border-white/[0.08] hover:border-blue-500/30 transition-all duration-500 group cursor-pointer"
            onClick={handleBookProgress}
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl">Reading Progress</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/60">Murder on the Orient Express</span>
                <span className="text-sm text-blue-400">{readingProgress}%</span>
              </div>
              <div className="h-3 bg-white/[0.05] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${readingProgress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(readingProgress / 20)
                        ? 'text-blue-400 fill-blue-400'
                        : 'text-white/20'
                    } transition-all duration-300`}
                  />
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm text-white/60">Click to read more</p>
          </motion.div>

          {/* TV Series Binge Tracker */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="bg-white/[0.03] rounded-2xl p-8 border border-white/[0.08] hover:border-orange-500/30 transition-all duration-500 group relative overflow-hidden"
          >
            {/* Netflix red glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-orange-500/0 to-red-500/0 opacity-0 group-hover:opacity-100"
              animate={{ 
                background: [
                  'radial-gradient(circle at 0% 0%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 100% 100%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 0% 100%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 100% 0%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)',
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Tv className="w-6 h-6 text-orange-400" />
              </motion.div>
              <h3 className="text-xl">Netflix</h3>
              <motion.div
                className="ml-auto px-2 py-1 rounded bg-red-500/20 border border-red-500/30"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-xs text-red-400">● LIVE</span>
              </motion.div>
            </div>
            <div className="space-y-3 relative z-10">
              {[
                { name: 'Modern Family', progress: 100, episode: 'S11 E18' },
                { name: 'Friends', progress: 70, episode: 'S7 E12' },
                { name: 'Gifted', progress: 40, episode: 'S1 E3' }
              ].map((show, i) => (
                <motion.div 
                  key={i} 
                  className="relative group/show cursor-pointer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  onClick={() => setActiveNetflixShow(activeNetflixShow === i ? null : i)}
                >
                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-lg"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  <div className="flex items-center gap-3 relative p-2 rounded-lg transition-colors">
                    {/* Play button on hover */}
                    <motion.div
                      className="absolute -left-2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center shadow-lg shadow-red-500/50"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="w-4 h-4 text-white ml-0.5" />
                    </motion.div>
                    
                    <div className="flex-1 pl-6">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-xs text-white/60 group-hover/show:text-orange-400 transition-colors">
                          {show.name}
                        </div>
                        <div className="text-xs text-white/40">
                          {show.episode}
                        </div>
                      </div>
                      <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden relative">
                        <motion.div
                          className="h-full bg-gradient-to-r from-orange-500 to-red-500 relative"
                          initial={{ width: '0%' }}
                          animate={{ width: `${show.progress}%` }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: i * 0.3 }}
                          />
                        </motion.div>
                      </div>
                      
                      {/* Expanded episode info */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: activeNetflixShow === i ? 'auto' : 0,
                          opacity: activeNetflixShow === i ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-2 pt-2 border-t border-white/[0.08]">
                          <div className="flex items-center gap-2 text-xs text-white/50">
                            <Sparkles className="w-3 h-3" />
                            <span>Next: Episode {parseInt(show.episode.split('E')[1]) + 1}</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    <motion.span 
                      className="text-xs text-orange-400 min-w-[3rem] text-right"
                      animate={{ scale: activeNetflixShow === i ? [1, 1.2, 1] : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {show.progress}%
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Scan line effect */}
            <motion.div
              className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent pointer-events-none"
              animate={{ y: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl text-white/60 italic">
            "Hobbies are the heartbeat of creativity"
          </p>
        </motion.div>
      </div>
    </div>
  )
}
