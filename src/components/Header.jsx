import { USERNAME } from "../data/user";
import UserInfo from "./UserInfo";

const Header = () => {
    return (
        <section className="header">
            <h1>NC NEWS </h1>
            <UserInfo username={USERNAME} />
        </section>
    );
};
export default Header;
