import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    return (
        <UserContext value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext>
    );
};
