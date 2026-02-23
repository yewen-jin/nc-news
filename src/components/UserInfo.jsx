import { getUser } from "../data/api";
import { useEffect, useState } from "react";

const UserInfo = ({ username }) => {
    const [currentUser, setCurrentUser] = useState(null);
    console.log("username", username);

    useEffect(() => {
        console.log("fetching");
        getUser(username).then((user) => {
            console.log("fetched user", user);
            setCurrentUser(user);
            console.log(currentUser);
        });
    }, []);

    return (
        <div className="user-info">
            <p>{username}</p>
            {currentUser && <img src={currentUser.avatar_url} />}
        </div>
    );
};
export default UserInfo;
