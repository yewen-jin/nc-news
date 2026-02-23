import { USERNAME } from "../data/user";
import UserInfo from "./UserInfo";

const Header = () => {
    return (
        <section className="header">
            <h1>THIS IS NC NEWWWWWWS </h1>
            {console.log(USERNAME)}
            <UserInfo username={USERNAME} />
        </section>
    );
};
export default Header;
