const host = "https://nc-news-backend-91qy.onrender.com";

export async function getTopics() {
    const url = host + "/api/topics";
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error, Status: ${response.status}`);
        }
        return response.json();
    });
}

export async function getAllUsers() {
    const url = host + "/api/users";
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error, Status: ${response.status}`);
        }
        return response.json();
    });
}

export async function getUser(username) {
    const url = host + "/api/users/" + username;
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error, Status: ${response.status}`);
        }
        return response.json();
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

    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error, Status: ${response.status}`);
        }
        return response.json();
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
}

export async function getCommentsByArticle(articleId) {
    const url = host + "/api/articles/" + articleId + "/comments";
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error, Status: ${response.status}`);
        }
        return response.json();
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
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error, Status: ${response.status}`);
        }
        return response.json();
    });
}

export async function deleteComment(commentId) {
    const url = host + "/api/comments/" + commentId;
    return fetch(url, {
        method: "DELETE",
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error, Status: ${response.status}`);
        }
        return response.status;
    });
}

export async function changeVote(type, id, voteChange) {
    const url = `${host}/api/${type}/${id}`;
    return fetch(url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ inc_votes: voteChange }),
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error, Status: ${response.status}`);
        }
        return response.json();
    });
}
