import { useEffect, useState } from "react";
import { getAllUsers } from "../data/api";
import UserCard from "./UserCard";
import User from "../layout/User";
//this component should display a list of all the users,
//  and when you click on of them you'll be logged in
// (well, no password)
const Login = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAllUsers().then(({ users }) => {
            setUsers(users);
        });
    }, []);
    return (
        <>
            {users &&
                users.map((user) => {
                    return (
                        <UserCard key={user.username + "-card"} user={user} />
                    );
                })}
        </>
    );
};
export default Login;
