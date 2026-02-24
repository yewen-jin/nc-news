import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./layout/Home";
import Topics from "./layout/Topics";
import User from "./layout/User";
import ArticlePage from "./layout/ArticlePage";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/topics" element={<Topics />} />
                <Route path="/articles" element={<Home />} />
                <Route path="/articles/:article_id" element={<ArticlePage />} />
                <Route path="/users/:username" element={<User />} />
            </Routes>
        </>
    );
}

export default App;
