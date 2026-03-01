import { useContext } from "react";
import { UserContext } from "../context/UserContext";

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
            <button
                to="/"
                onClick={() => {
                    loginUser(user.username);
                }}
            >
                Log in
            </button>
        </section>
    );
};
export default UserCard;
