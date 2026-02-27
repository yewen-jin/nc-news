import { makeErrorCat } from "../data/ascii";
import AsciiAnimation from "../components/AsciiAnimation";

const PathNotFound = () => {
    const errorCat = makeErrorCat("404", `Path not found!   `);
    return (
        <>
            <AsciiAnimation frames={errorCat} speed={500} />
        </>
    );
};
export default PathNotFound;
