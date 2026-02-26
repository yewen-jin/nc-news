import { getUser } from "../data/api";
import { useEffect, useState } from "react";

const UserInfo = ({ username }) => {
    const [user, setUser] = useState(null);
    // console.log("username", username);

    useEffect(() => {
        // console.log("fetching");
        getUser(username)
            .then((result) => {
                // console.log("fetched user", result.user);
                setUser(result.user);
            })
            .catch((err) => {
                console.log("failed to fetch user: ", err);
            });
    }, []);
    console.log("current user:", user);

    return (
        <div className="user-info">
            {user && (
                <img
                    className="user-avatar"
                    alt="user avatar"
                    src={user.avatar_url}
                />
            )}
            <p>{username}</p>
        </div>
    );
};
export default UserInfo;
