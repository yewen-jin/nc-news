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
        });
}

export async function getArticles() {
    const url = "https://nc-news-backend-91qy.onrender.com/api/articles";
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
        });
}

export async function getArticleById(articleId) {
    const url = host + "/api/articles/" + articleId;
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
        });
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
        });
}

export async function upvote(type, id) {
    // const url = host + "/api/comments/" + commentId;
    const url = `${host}/api/${type}/${id}`;
    return fetch(url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ inc_votes: 1 }),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Fetch Error from: ", url, error.message);
        });
}

export async function downvote(type, id) {
    const url = `${host}/api/${type}/${id}`;
    return fetch(url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ inc_votes: -1 }),
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Fetch Error from: ", url, error.message);
        });
}
