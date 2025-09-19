import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, Palette, Server, Cpu, Coffee, Feather } from 'lucide-react'

const About = () => {
  const skills = [
    'JavaScript',
    'C',
    'C++',
    'Java',
    'React',
    'Node.js',
    'Python',
    'Express',
    'MongoDB',
    'Git',
    'GitHub',
    'RESTful APIs',
    'Responsive Design',
    'Figma',
    'Tailwind CSS',
  ]

  const services = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: 'Frontend Development',
      description:
        'Creating responsive and interactive user interfaces with modern frameworks and libraries.',
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: 'Backend Development',
      description:
        'Building robust APIs and server-side applications with scalable architecture.',
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: 'UI/UX Design',
      description:
        'Designing intuitive and beautiful user experiences that delight and engage users.',
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: 'C/C++ Development',
      description:
        'Developing high-performance applications and systems programming using C and C++.',
    },
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: 'Java Development',
      description:
        'Creating enterprise-level applications and Android apps using Java and its frameworks.',
    },
    {
      icon: <Feather className="h-8 w-8 text-primary" />,
      title: 'Python Development',
      description:
        'Building scalable and efficient applications using Python and its frameworks.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm Abhishek Kumar, a passionate Python and full-stack developer
            skilled in frontend, backend, and programming. I love building
            impactful, user-friendly, and scalable digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I started my journey in web development during school, where I
                discovered a passion for turning ideas into functional digital
                solutions. Over the years, I have expanded my skills across
                frontend, backend, and multiple programming languages, working
                on projects that strengthened both my technical and creative
                side.
              </p>
              <p>
                I believe in writing clean, maintainable code, focusing on
                user-centered design, and embracing continuous learning. Outside
                of coding, I enjoy exploring emerging technologies, contributing
                to open-source projects, and sharing knowledge with peers.
              </p>
              <p>
                My mission is to build digital products that combine
                performance, usability, and creativity—solutions that not only
                work seamlessly but also make a lasting impact.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-12">
            What I Do
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-0 bg-card">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
