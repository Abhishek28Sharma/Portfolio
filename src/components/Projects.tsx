import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'House Price Prediction',
      description:
        'A machine learning project that predicts house prices based on various features such as location, size, and amenities.',
      image: '../public/house-price.jpg',
      technologies: ['Python', 'Pandas', 'Scikit-Learn', 'Matplotlib'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Abhishek28Sharma/House-Price-Detection',
    },
    {
      title: 'Fraud Detection System',
      description:
        'This script creates a fraud detection pipeline using imbalanced synthetic data, trains Random Forest (and optionally XGBoost), evaluates performance, and visualizes results, including feature importance.',
      image: '/fraud.png',
      technologies: [
        'Python',
        'Pandas',
        'Scikit-Learn',
        'Matplotlib',
        'XGBoost',
        'Imbalanced-learn',
        'Seaborn',
        'RandomForestClassifier',
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/Abhishek28Sharma/fraud-detection',
    },
    {
      title: 'GlobeFacts',
      description:
        'A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with interactive charts and maps.',
      image: '/globefacts.png',
      technologies: ['Html', 'CSS', 'JavaScript', 'Countries API'],
      liveUrl: 'https://globefacts.netlify.app',
      githubUrl: 'https://github.com/Abhishek28Sharma/GlobeFacts',
    },
    {
      title: 'Todo Web App',
      description:
        'A personal todo web application built with modern web technologies, featuring user authentication, task management, and real-time updates.',
      image: '/todo.png',
      technologies: ['Reactjs', 'firebase'],
      liveUrl: 'https://donright.netlify.app/',
      githubUrl: '#',
    },
    {
      title: 'IBM Login Page',
      description:
        'A clone of the IBM login page, recreated using HTML, CSS, and JavaScript to demonstrate proficiency in modern web development and design principles.',
      image: './ibm-login-page.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://ibm-login.netlify.app/',
      githubUrl: '#',
    },
    {
      title: 'Study Planner LMS',
      description:
        'A comprehensive LMS with course creation, student enrollment, progress tracking, and interactive content delivery.',
      image: '/study_planer.png',
      technologies: ['Html', 'CSS', 'JavaScript(vanilla)'],
      liveUrl: 'https://studyplanerr.netlify.app/',
      githubUrl: 'https://github.com/Abhishek28Sharma/Study-Plan/',
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in web development, design, and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border border-gray-300 rounded-lg bg-card overflow-hidden shadow-sm"
            >
              <img
                src={project.image}
                alt={project.title}
                className="aspect-video object-cover bg-gradient-to-br from-primary/10 to-accent/10"
              />

              <CardHeader className="pb-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  )}

                  {project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Abhishek28Sharma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
