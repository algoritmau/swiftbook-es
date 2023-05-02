import heroStyles from '../styles/Hero.module.css'

const Hero = ({ children }) => (
  <div className={heroStyles.container}>{children}</div>
)

export default Hero
