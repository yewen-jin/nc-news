const SortArticles = ({ setSearchParams }) => {
    const handleChange = (e) => {
        setSearchParams((searchParams) => {
            searchParams.set("sort_by", e.target.value);
            console.log("sort by: ", searchParams.get("sort_by"));
            return searchParams;
        });
    };

    return (
        <div className="sort-articles">
            <section className="sort-function">
                <label htmlFor="sort_by">sort by:</label>
                <select
                    id="sort_by"
                    name="sort_by"
                    type="submit"
                    defaultValue="created_at"
                    onChange={handleChange}
                >
                    <option value="created_at">date</option>
                    <option value="comment_count">comment count</option>
                    <option value="votes">votes</option>
                </select>{" "}
            </section>
            <section className="sort-function">
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
            </section>
        </div>
    );
};

export default SortArticles;
