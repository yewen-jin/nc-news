import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./context/User";
import Header from "./components/Header";
import Home from "./layout/Home";
import Topics from "./layout/Topics";
import User from "./layout/User";
import ArticlePage from "./layout/ArticlePage";

function App() {
    const [username, setUsername] = useState("tickle122");
    return (
        <>
            {/* <UserContext>*/}
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/topics" element={<Topics />} />
                <Route path="/articles" element={<Home />} />
                <Route path="/articles/:article_id" element={<ArticlePage />} />
                <Route path="/users/:username" element={<User />} />
            </Routes>
            {/* </UserContext>*/}
        </>
    );
}

export default App;
