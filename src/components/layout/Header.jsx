import logo from '../../assets/meet.png'
import './Header.css'
import { useCustomHook } from '../../context/UserContext'

const Header = () => {
  const user = useCustomHook();
  const { name, color } = user
  return (
    <header>
      <img src={logo} className="app-logo" alt="Alchemy Logo" />
      <p>
        Meet <span style={{ color: `${color}` }}>{name}</span>!
      </p>
    </header>
  )
}

export default Header
