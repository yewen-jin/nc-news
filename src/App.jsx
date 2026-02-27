import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./layout/Home";
import Topics from "./layout/Topics";
import User from "./layout/User";
import ArticlePage from "./layout/ArticlePage";
import ArticlesLayout from "./layout/ArticlesLayout";
import ArticlesByTopic from "./layout/ArticlesByTopic";
import PathNotFound from "./layout/PathNotFound";
import { useContext, useState } from "react";
import { UserContext } from "./context/User";

function App() {
    const username = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState(username);
    return (
        <>
            <UserContext value={currentUser}>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                            // currentUserState={{
                            // currentUser,
                            // setCurrentUser,
                            // }}
                            />
                        }
                    />
                    <Route path="/topics" element={<Topics />} />
                    <Route path="/topics/:slug" element={<ArticlesByTopic />} />
                    <Route path="/articles" element={<ArticlesLayout />} />
                    <Route
                        path="/articles/:article_id"
                        element={<ArticlePage />}
                    />
                    <Route path="/users/:username" element={<User />} />
                    <Route path="*" element={<PathNotFound />}></Route>
                </Routes>
            </UserContext>
        </>
    );
}

export default App;
