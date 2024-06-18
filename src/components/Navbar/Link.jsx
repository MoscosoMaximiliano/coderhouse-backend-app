import { Link as LinkRouter } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const Link = ({children, route, style = "rounded h-max py-5 px-2 transition ease-in-out delay-75 hover:bg-slate-700"}) => {
  return (
    <li className="inline-block px-5">
      <LinkRouter 
      to={route} 
      className={style}>
        {children}
      </LinkRouter>
    </li>
  )
}

export default Link