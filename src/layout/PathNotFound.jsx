import { makeErrorCat } from "../data/ascii";
import { Link } from "react-router-dom";
import AsciiAnimation from "../components/AsciiAnimation";

const PathNotFound = () => {
    const errorCat = makeErrorCat("404", `URL does not exist`);
    return (
        <>
            <AsciiAnimation frames={errorCat} speed={500} />
            <Link to="/">return to home page</Link>
        </>
    );
};
export default PathNotFound;
