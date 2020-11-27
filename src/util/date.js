export function formatDate(date) {
    let parsedDate = new Date(date);
    let day, month, hour, minute;
    day = parsedDate.getDate();
    month = parsedDate.getMonth() + 1;

    hour = parsedDate.getHours();
    hour = hour < 10 ? `0${hour}` : hour;

    minute = parsedDate.getMinutes();
    minute = minute < 10 ? `0${minute}` : minute;

    return `${month}/${day} ${hour}:${minute}`;
}