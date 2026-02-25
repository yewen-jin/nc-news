export const formatDate = (data) => {
    const date = data.split("T")[0].split("-");
    return date[2] + "/" + date[1] + "/" + date[0];
};

export const formatTime = (data) => {
    const time = data.split("T")[1].split(".");
    return time[0].slice(0, -3);
};
