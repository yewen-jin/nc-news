import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/User";

const UserCard = ({ user }) => {
    const currentUser = useContext(UserContext);
    console.log(currentUser);
    // const loginUser = (username) => {
    //     setCurrentUser(username);
    // };
    return (
        <section className="user-card">
            <Link
                to="/"
                onClick={() => {
                    loginUser(user.username);
                }}
            >
                <p>{user.username}</p>
                <p>{user.name}</p>
                <img
                    className="user-avatar"
                    src={user.avatar_url}
                    alt="user avatar"
                />
            </Link>
        </section>
    );
};
export default UserCard;
