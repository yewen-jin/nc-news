export function getTopics() {
    return;
}

export async function getUser(username) {
    const url =
        "https://nc-news-backend-91qy.onrender.com/api/users/" + username;
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error. Status: ${response.status}`);
            }
            return response.json();
        })
        .then((body) => {
            console.log("fetched body:", body);
            return body;
        })
        .catch((error) => {
            console.log("Fetch Error from: ", error.message);
        });
}

export function getArticles() {
    return;
}

export function getArticleById() {
    return;
}
export function getCommentsByArticle() {
    return;
}
export function upvote() {
    return;
}
export function downvote() {
    return;
}
