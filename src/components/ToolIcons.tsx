import { ImageWithFallback } from './figma/ImageWithFallback'

export const ToolIcons: Record<string, React.FC<{ className?: string }>> = {
  Figma: ({ className = "w-12 h-12" }) => (
    <ImageWithFallback
      src="https://i.ibb.co/vxhMyr7X/image.png"
      alt="Figma"
      className={className}
    />
  ),
  
  Visily: ({ className = "w-12 h-12" }) => (
    <ImageWithFallback
      src="https://i.ibb.co/hR3G897R/image.png"
      alt="Visily"
      className={className}
    />
  ),
  
  Maze: ({ className = "w-12 h-12" }) => (
    <ImageWithFallback
      src="https://i.ibb.co/3ymxrZfn/image.png"
      alt="Maze"
      className={className}
    />
  ),
  
  Photoshop: ({ className = "w-12 h-12" }) => (
    <ImageWithFallback
      src="https://i.ibb.co/RpwbZn6f/image.png"
      alt="Photoshop"
      className={className}
    />
  ),
  
  Illustrator: ({ className = "w-12 h-12" }) => (
    <ImageWithFallback
      src="https://i.ibb.co/JFwh00LY/image.png"
      alt="Illustrator"
      className={className}
    />
  ),
  
  Canva: ({ className = "w-12 h-12" }) => (
    <ImageWithFallback
      src="https://i.ibb.co/zWMD3374/image.png"
      alt="Canva"
      className={className}
    />
  ),
  
  Framer: ({ className = "w-12 h-12" }) => (
    <ImageWithFallback
      src="https://i.ibb.co/B5BbNJNB/image.png"
      alt="Framer"
      className={className}
    />
  ),
  
  Uizard: ({ className = "w-12 h-12" }) => (
    <ImageWithFallback
      src="https://i.ibb.co/ycwK8Lx3/image.png"
      alt="Uizard"
      className={className}
    />
  ),
  
  Miro: ({ className = "w-12 h-12" }) => (
    <ImageWithFallback
      src="https://i.ibb.co/GBbmgDH/image.png"
      alt="Miro"
      className={className}
    />
  ),
  
  FigJam: ({ className = "w-12 h-12" }) => (
    <ImageWithFallback
      src="https://i.ibb.co/vxhMyr7X/image.png"
      alt="FigJam"
      className={className}
    />
  ),
  
  Banani: ({ className = "w-12 h-12" }) => (
    <ImageWithFallback
      src="https://i.ibb.co/zTRQD5bc/image.png"
      alt="Banani"
      className={className}
    />
  ),
  
  Lunacy: ({ className = "w-12 h-12" }) => (
    <ImageWithFallback
      src="https://i.ibb.co/67nWx70V/image-removebg-preview.png"
      alt="Lunacy"
      className={className}
    />
  ),
}