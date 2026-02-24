const NavBar = (props) => {
    // console.log(props);
    const links = props.children;
    console.log("links: ", links);
    return (
        <nav className="nav-bar">
            {links.map((link) => {
                return link;
            })}
        </nav>
    );
};
export default NavBar;
