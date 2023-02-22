// import { Link } from "react-router-dom"

//Navlink knows weather or not it is an active link which Link does not so we can use it to style the active link. NavLink gets an active class when the link is the current route
//NavLink also provides an object with the isActive property to the function that we provide in the style attribute which you can destructure inside the function as shown below
//To style the Links you can either use the active class or the isActive boolean flag injected into the style function.
//NavLink component is used to build navbars or breadcrumbs or where you want to highlight current selected item but when you want to navigate to others parts of the app use the Link component.
import { NavLink } from "react-router-dom"

export default function Navbar() {

    const navLinkStyle = ({isActive}) => {
        return {
            textDecoration : isActive ? 'none' : 'underline',
            fontWeight : isActive ? 'bold' : 'normal'
        }
    }

    return (
        <nav>
            {/* link is converted into an anchor tag in the dom */}
            <NavLink style={navLinkStyle} to='/' >Home</NavLink>
            <NavLink style={navLinkStyle} to='/about'>About</NavLink>
            <NavLink style={navLinkStyle} to='/contact'>Contact</NavLink>
        </nav>
    )
}
