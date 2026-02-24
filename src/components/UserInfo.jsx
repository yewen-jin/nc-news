import { getUser } from "../data/api";
import { useEffect, useState } from "react";

const UserInfo = ({ username }) => {
    const [currentUser, setCurrentUser] = useState(null);

    console.log("username", username);

    useEffect(() => {
        console.log("fetching");
        getUser(username)
            .then((result) => {
                console.log("fetched user", result.user);
                setCurrentUser(result.user);
            })
            .catch((err) => {
                console.log("failed to fetch user: ", err);
            });
    }, []);
    console.log("current user:", currentUser);

    return (
        <div className="user-info">
            {currentUser && (
                <img
                    className="user-avatar"
                    alt="user avatar"
                    src={currentUser.avatar_url}
                />
            )}
            <p>{username}</p>
        </div>
    );
};
export default UserInfo;
