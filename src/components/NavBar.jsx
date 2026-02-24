import { Link } from "react-router-dom";
//current navbar setup only works if there is more than 1 nav items
// otherwise the children element is not read as an array
// fix this later.
const NavBar = (props) => {
    // console.log(props);
    const links = props.children;
    const { destination } = props;
    // console.log("links: ", links);
    return (
        <nav className="nav-bar">
            {links.map((link, i) => {
                return (
                    <Link key={"nav-" + i} to={destination[i]}>
                        {link.props.children}
                    </Link>
                );
            })}
        </nav>
    );
};
export default NavBar;
