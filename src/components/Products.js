import { Link, Outlet } from "react-router-dom"

export default function Products() {
  return (
    <>
    <label htmlFor="search">Search Product: </label>
    <input id='search' type="text" />
    <nav>
        {/* nested links should not have a / infront of the text */}
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
    </nav>
    {/* this tells parent component where to render the child component */}
    <Outlet />
    </>
  )
}
