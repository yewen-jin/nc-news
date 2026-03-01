import { useState } from "react";
import { UserContext } from "../context/UserContext";

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <UserContext
            value={{ currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn }}
        >
            {children}
        </UserContext>
    );
};
