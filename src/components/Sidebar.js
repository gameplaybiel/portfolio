import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import Avatar from '../img/eu.jpg'
import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt='Gabriel Conceição' />
      <p className='title'>Desenvolvedor Full Stack</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href='/docs/Curriculo_Gabriel.docx' target='_blank' rel='noreferrer' className='btn' download>Download currículo</a>
    </aside>
  )
}

export default Sidebar