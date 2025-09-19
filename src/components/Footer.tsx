import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Made with{' '}
            <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> by
            Abhishek Sharma
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
