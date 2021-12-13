import logo from '../../assets/meet.png'
import './Header.css'
import { useCustomHook } from '../../context/UserContext'

const Header = () => {
  const user = useCustomHook();
  return (
    <header>
      <img src={logo} className="app-logo" alt="Alchemy Logo" />
      <p>
        Meet <span style={{ color: `${user.color}` }}>{user.name}</span>!
      </p>
    </header>
  )
}

export default Header
