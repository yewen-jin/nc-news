import { useState, useEffect } from "react";

const AsciiAnimation = ({ frames, speed = 800 }) => {
    const [frame, setFrame] = useState(0);
    // const [speed, setSpeed] = useState(1000);

    useEffect(() => {
        const interval = setInterval(() => {
            setFrame((previousFrame) => {
                return previousFrame === 0 ? 1 : 0;
            });
        }, speed);

        return () => {
            clearInterval(interval);
        };
    }, [speed]);

    return <pre>{frames[frame]}</pre>;
};

export default AsciiAnimation;
