import './Header.css'

interface HeaderProps {
    authOpen: () => void
}
export default function Header({authOpen} : HeaderProps) {
  return (
    <header className='header' >
        <p>OneAi</p>
        <button onClick={authOpen}>Sign In</button>
    </header>
  )
}
