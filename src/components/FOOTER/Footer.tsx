import { Container } from './styles'

import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
// import whatsapp from '../../assets/whatsapp.svg'
// import telegram from '../../assets/telegram.svg'
// import instagramIcon from '../../assets/instagram.svg'
import gmailIcon from '../../assets/Gmail_icon_(2020).svg'
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>www.Christopher J.</span>
        <span>Wallace.com</span>
      </a>

      <div className="madeBy">
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/christopher-j-wallace/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/ChristopherJWallace"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        {/* <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a> */}
        {/* <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a> */}
        {/* <a
          href="mailto:ChristopherWallaceOCC@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a> */}
        <a
          href="mailto:ChristopherWallaceOCC@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gmailIcon} alt="Gmail" />
        </a>
        
     
      </div>
    </Container>
  )
}
