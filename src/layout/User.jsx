import { useParams } from "react-router-dom";
import { getUser } from "../data/api";
import useLoadData from "../hooks/useLoadData";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const User = () => {
    const { username } = useParams();
    const { currentUser, setCurrentUser, setIsLoggedIn } =
        useContext(UserContext);
    const { data, error, isLoading } = useLoadData(
        getUser,
        [username],
        [username],
    );
    console.log(currentUser, username);
    return (
        <>
            {data !== null && (
                <section>
                    <p>{data.user.name}</p>
                    <p>username: {username}</p>
                    <img
                        className="user-avatar"
                        src={data.user.avatar_url}
                        alt="user avatar"
                    />
                    {currentUser !== null && username === currentUser && (
                        <button
                            onClick={() => {
                                setCurrentUser(null);
                                setIsLoggedIn(false);
                            }}
                        >
                            Sign out
                        </button>
                    )}
                </section>
            )}
        </>
    );
};
export default User;
