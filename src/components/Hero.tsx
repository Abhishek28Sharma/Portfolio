import { Button } from '@/components/ui/button'
import { Download, Github, Linkedin, Mail } from 'lucide-react'
import profileImage from '@/assets/profile-image.jpg'

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a dummy PDF download - replace with actual resume URL
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Replace with actual resume path
    link.download = 'resume.pdf'
    link.click()
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 hero-background opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-primary/20 shadow-lg"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Abhishek Sharma</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            MERN Developer | Python Enthusiast
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="px-8 py-3 text-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadResume}
              className="px-8 py-3 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {/* github */}
            <a href="https://github.com/Abhishek28Sharma" target="_blank">
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform"
              >
                <Github className="h-6 w-6" />
              </Button>
            </a>
            {/* linkedin */}
            <a
              href="https://www.linkedin.com/in/abhishek-sharma-842735362/"
              target="_blank"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
            {/* mail */}
            <a href="mailto:abhishekkumar62070077@gmail.com" target="_blank">
              <Button
                variant="ghost"
                size="icon"
                className="hover:scale-110 transition-transform"
              >
                <Mail className="h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
