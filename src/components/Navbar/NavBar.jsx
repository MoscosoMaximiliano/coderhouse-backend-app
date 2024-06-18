// import logoImage from "../images/"
import CartWidget from './CartWidget'
import Link from './Link'

import logoImage from '../../assets/logo.png'
import { Catalogue } from './Catalogue'
import UserSection from './UserSection'

// eslint-disable-next-line react/prop-types
const NavBar = () => {
  return (
    <header className='flex items-center justify-between p-2 align-middle center bg-slate-800'>
      <Link route='/' style='text-center inline-table relative'>
        <img
          src={logoImage}
          alt='logo_page'
          className='w-12 h-12 cursor-pointer'
        />
      </Link>
      <Catalogue />
      <div className='flex align-middle'>
        <CartWidget />
        <UserSection />
      </div>
    </header>
  )
}

export default NavBar
