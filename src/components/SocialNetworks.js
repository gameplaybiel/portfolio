import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import '../styles/components/socialnetwork.sass'

const socialNetworks = [
    {name: 'linkedin', icon: <FaLinkedinIn/>, link: 'https://www.linkedin.com/in/gabriel-conceicao-89a047230/'},
    {name: 'github', icon: <FaGithub/>, link: 'https://github.com/gameplaybiel'}
];

const SocialNetwrorks = () => {
    return (
        <section id='social-networks'>
            {socialNetworks.map((network) => (
                <a href={network.link} className='social-btn' id={network.name} key={network.name} target='_blank' rel='noreferrer'>
                    {network.icon}
                </a>
            ))}
        </section>
    )

};

export default SocialNetwrorks