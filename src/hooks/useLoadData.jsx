import { useState, useEffect } from "react";

const useLoadData = (loadData, deps, params = []) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    console.log("initiated useLoadData Hook");

    useEffect(() => {
        console.log("start loading");
        setIsLoading(true);
        loadData(...params)
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, deps);

    console.log("done loading");
    return { data, error, isLoading };
};
export default useLoadData;
