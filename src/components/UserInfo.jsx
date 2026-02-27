import { getUser } from "../data/api";
import { useEffect, useState } from "react";

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
                <img
                    className="user-avatar"
                    alt="user avatar"
                    src={user.avatar_url}
                />
            )}
            {user && <p>{username}</p>}
        </div>
    );
};
export default UserInfo;
