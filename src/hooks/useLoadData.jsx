import { useState, useEffect } from "react";

const useLoadData = (loadData, deps, params = []) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
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

    return { data, error, isLoading };
};
export default useLoadData;
