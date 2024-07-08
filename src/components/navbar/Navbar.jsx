import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom"
import Container from "../container/Container"
import { useContext } from "react";
import AppContext from "../../context/store";

const Navbar = () => {
  const [state, dispatch] = useContext(AppContext);
  console.log(state.length);
  return (
    <nav className="bg-cyan-600">
      <Container>
        <div className="h-20 flex items-center justify-between">
          <Link to='/' className="text-2xl font-logoFont font-semibold text-white tracking-wide">Ai.Dev</Link>
          <Link to='/cart' className="text-xl font-normal tracking-wide text-white relative">
            <span className="absolute top-1 -right-2 text-xs bg-rose-600 rounded-full h-4 w-4 flex items-center justify-center">{state.products.length}</span>
            <BiCart className="inline text-3xl" />
          </Link>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
