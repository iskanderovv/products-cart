import { BiCart } from "react-icons/bi"; 
import { Link } from "react-router-dom"
import Container from "../container/Container"

const Navbar = () => {
  return (
    <nav className="bg-cyan-600">
      <Container>
        <div className="h-20 flex items-center justify-between">
          <Link to='/' className="text-2xl font-logoFont font-semibold text-white tracking-wide">Ai.Dev</Link>
          <Link to='/favorites' className="text-xl font-normal tracking-wide text-white"><span>1</span> <BiCart className="inline" /></Link>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
