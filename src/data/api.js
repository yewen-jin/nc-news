const host = "https://nc-news-backend-91qy.onrender.com";

export async function getTopics() {
    const url = host + "/api/topics";
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error, Status: ${response.status}`);
            }
            return response.json();
        })
        .then((body) => {
            // console.log("fetched body:", body);
            return body;
        })
        .catch((error) => {
            console.log("Fetch Error from: ", url, error.message);
            return error;
        });
}

export async function getUser(username) {
    const url = host + "/api/users/" + username;
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error, Status: ${response.status}`);
            }
            return response.json();
        })
        .then((body) => {
            // console.log("fetched body:", body);
            return body;
        })
        .catch((error) => {
            console.log("Fetch Error from: ", url, error.message);
            return error;
        });
}

export async function getArticles({ topic = null, order, sort_by }) {
    if (!order) order = "desc";
    if (!sort_by) sort_by = "created_at";

    const url =
        !topic && !order && !sort_by
            ? host + "/api/articles"
            : topic
              ? host +
                "/api/articles?topic=" +
                topic +
                "&sort_by=" +
                sort_by +
                "&order=" +
                order
              : host + "/api/articles?sort_by=" + sort_by + "&order=" + order;

    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error, Status: ${response.status}`);
            }
            return response.json();
        })
        .then((body) => {
            // console.log("fetched body:", body);
            return body;
        })
        .catch((error) => {
            console.log("Fetch Error from: ", url, error.message);
            return error;
        });
}

export async function getArticleById(articleId) {
    const url = host + "/api/articles/" + articleId;
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error, Status: ${response.status}`);
        }
        return response.json();
    });
    // .then((body) => {
    //     return body;
    // });
    // .catch((error) => {
    //     console.log("Fetch Error from: ", url, error.message);
    //     // return error;
    // });
}

export async function getCommentsByArticle(articleId) {
    const url = host + "/api/articles/" + articleId + "/comments";
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error, Status: ${response.status}`);
            }
            return response.json();
        })
        .catch((error) => {
            console.log("Fetch Error from: ", url, error.message);
            return error;
        });
}

export async function postComment(articleId, username, body) {
    const url = host + "/api/articles/" + articleId + "/comments";
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, body }),
    })
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.log("Post Error from: ", url, error.message);
            return error;
        });
}

export async function deleteComment(commentId) {
    const url = host + "/api/comments/" + commentId;
    return fetch(url, {
        method: "DELETE",
        // headers: {
        //     "Content-Type": "application/json",
        // },
    })
        .then((response) => {
            console.log(response);
            return response.status;
        })
        .catch((error) => {
            console.log("Delete Error from: ", url, error.message);
            return error;
        });
}

export async function changeVote(type, id, voteChange) {
    // const url = host + "/api/comments/" + commentId;
    const url = `${host}/api/${type}/${id}`;
    return fetch(url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ inc_votes: voteChange }),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error from: ", url, error.message);
            return error;
        });
}
