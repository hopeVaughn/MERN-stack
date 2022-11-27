import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>job <span>tracking</span> app</h1>
          <p>I'm baby shoreditch echo park gluten-free tumblr pickled craft beer retro trust fund. Single-origin coffee poke waistcoat gastropub DIY. Portland hashtag pour-over blog, synth celiac green juice fanny pack. Pabst pinterest lo-fi af yuccie edison bulb enamel pin. Portland vibecession church-key intelligentsia pok pok readymade palo santo taxidermy.</p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}
export default Landing