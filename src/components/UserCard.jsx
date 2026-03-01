import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
    const { setCurrentUser, setIsLoggedIn } = useContext(UserContext);

    const loginUser = (username) => {
        setCurrentUser(username);
        setIsLoggedIn(true);
    };

    return (
        <section className="user-card">
            <p>{user.username}</p>
            <p>{user.name}</p>
            <img
                className="user-avatar"
                src={user.avatar_url}
                alt="user avatar"
            />
            <Link to="/">
                <button
                    onClick={() => {
                        loginUser(user.username);
                    }}
                >
                    Log in
                </button>
            </Link>
        </section>
    );
};
export default UserCard;
