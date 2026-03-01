import { getUser } from "../data/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserInfo = ({ username }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser(username)
            .then((result) => {
                setUser(result.user);
            })
            .catch((err) => {
                console.log("failed to fetch user: ", err);
            });
    }, [username]);

    return (
        <div className="user-info">
            {user && (
                <Link to={"/users/" + user.username}>
                    <img
                        className="user-avatar"
                        alt="user avatar"
                        src={user.avatar_url}
                    />
                    <p>{username}</p>
                </Link>
            )}
        </div>
    );
};
export default UserInfo;
