import { getUser } from "../data/api";
import { useEffect, useState } from "react";

const UserInfo = ({ username }) => {
    // const [user, setUser] = useState(null);
    console.log("username", username);

    // useEffect(() => {
    //     console.log("fetching");
    //     getUser(username).then((user) => {
    //         console.log("fetched user", user);
    //         setUser(user);
    //     });
    // }, []);

    return (
        <div className="user-info">
            <p>{username}</p>
            {/* <img src={user.avatar_url} />*/}
        </div>
    );
};
export default UserInfo;
