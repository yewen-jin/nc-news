const SortArticles = ({ setSearchParams }) => {
    const handleSubmit = (formData) => {
        console.log(formData.get("sort_by"));
        // setSearchParams((searchParams) => {
        //     searchParams.set("sort_by", formData.value);
        //     console.log(formData);
        //     return searchParams;
        // });
    };
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
            </button>

            <button
                onClick={() => {
                    setSearchParams((searchParams) => {
                        searchParams.set("order", "desc");
                        return searchParams;
                    });
                }}
            >
                Descend
            </button>

            <form action={handleSubmit}>
                <select id=" " name="sort_by" type="submit">
                    <option value="created_at">date</option>
                    <option value="comment_count">comment count</option>
                    <option value="votes">votes</option>
                </select>{" "}
                <input type="submit"></input>
            </form>
        </>
    );
};

export default SortArticles;
