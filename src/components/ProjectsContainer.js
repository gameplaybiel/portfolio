import '../styles/components/projectscontainer.sass'

const projects = [
  {
    id: 1,
    name: 'Sistema de Delivery',
    description:
      'Aplicação da arquitetura limpa, microserviços e Docker.',
    technologies: ['Java 17', 'Spring Boot 3', 'RabbitMQ', 'Docker', 'PostgreSQL'],
    link: 'https://github.com/gameplaybiel/sistema_delivery',
  },
  {
    id: 2,
    name: 'Prime Flix',
    description:
      'Catálogo de filmes em ReactJS',
    technologies: ['ReactJS'],
    link: 'https://github.com/gameplaybiel/prime-filmes',
  },
];

const ProjectsContainer = () => {
  return (
    <section className='projects-container'>
      <h2>Projetos</h2>
      <p>Um dos principais projetos que desenvolvi com tecnologias modernas
        como ReactJS, Spring Boot e APIs REST.
      </p>
      <div className='projects-grid'>
        {projects.map((project) => (
          <div className='project-card' key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <ul className='tech-list'>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer"className='btn'>Confira projeto</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsContainer