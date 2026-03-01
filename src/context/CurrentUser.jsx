import { createContext, useState } from "react";

export const UserContext = createContext(null);

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
