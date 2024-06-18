import Link from './Link'

export const Catalogue = () => {
  return (
    <nav className='flex-row h-auto gap-2'>
      <ul className='h-auto list-none'>
        <Link route='/products'>Products</Link>
        <Link route='/'>Users</Link>
        <Link route='/about'>About</Link>
      </ul>
    </nav>
  )
}
