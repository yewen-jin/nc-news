const SortArticles = ({ searchParamsState }) => {
    const { searchParams, setSearchParams } = searchParamsState;
    return (
        <>
            <button
                onClick={() => {
                    setSearchParams((searchParams) => {
                        searchParams.set("order", "asc");
                        return searchParams;
                    });
                }}
            >
                Ascend
            </button>{" "}
            <button
                onClick={() => {
                    setSearchParams((searchParams) => {
                        searchParams.set("order", "desc");
                        return searchParams;
                    });
                }}
            >
                Descend
            </button>{" "}
            <button>order</button>{" "}
        </>
    );
};

export default SortArticles;
