import {
  DiJava,
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiMysql,
  DiPostgresql,
  DiMongodb,
  DiGit,
  DiDocker
} from 'react-icons/di'
import { SiTypescript, SiOracle, SiSpringboot, SiReact, SiAmazonwebservices, SiPostman } from 'react-icons/si'
import '../styles/components/technologiescontainer.sass'

const technologies = [
  {id: 'java', name: 'Java', icon: <DiJava/>},
  {id: 'html', name: 'HTML5', icon: <DiHtml5/>},
  {id: 'css', name: 'CSS3', icon: <DiCss3/>},
  {id: 'js', name: 'JavaScript', icon: <DiJsBadge/>},
  {id: 'mysql', name: 'MySQL', icon: <DiMysql/>},
  {id: 'postgresql', name: 'PostgreSQL', icon: <DiPostgresql/>},
  {id: 'mongodb', name: 'MongoDb', icon: <DiMongodb/>},
  { id: "git", name: "Git/GitHub", icon: <DiGit /> },
  { id: "docker", name: "Docker", icon: <DiDocker /> },
  { id: "aws", name: "AWS", icon: <SiAmazonwebservices /> },
  { id: "postman", name: "Postman", icon: <SiPostman /> },
  { id: "spring", name: "Spring Boot", icon: <SiSpringboot /> },
  { id: "react", name: "React", icon: <SiReact /> },
  { id: "oracle", name: "Oracle", icon: <SiOracle /> },
  { id: "typescript", name: "TypeScript", icon: <SiTypescript /> }
]

const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className='technologies-grid'>
        {technologies.map((tech) => (
          <div className='technology-card' id={tech.id} key={tech.id}>
            {tech.icon}
            <div className='technology-info'>
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer