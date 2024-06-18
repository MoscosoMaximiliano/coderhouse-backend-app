// import logoImage from "../images/"
import CartWidget from "./CartWidget"
import Link from "./Link"

import logoImage from "../../assets/logo.png"
import { Catalogue } from "./Catalogue"


// eslint-disable-next-line react/prop-types
const NavBar = () => {
  return (
    <header className='flex items-center justify-between p-2 align-middle center bg-slate-800'>
      <Link route="/" style="text-center inline-table relative">
        <img src={logoImage} alt='logo_page' className="w-12 h-12 cursor-pointer"/>
      </Link>
      <Catalogue />
      <div className="flex align-middle">
        <CartWidget />
        <a href="#" className="py-5 text-black transition-all ease-linear delay-75 bg-orange-300 border-none rounded cursor-pointer px-7 hover:bg-orange-500 hover:-translate-y-1 hover:scale-110">
          Contact me!
        </a>
      </div>
    </header>
  )
}

export default NavBar
