export function getImgByQuery(userQuery) {
    const BASE_URL = "https://pixabay.com/api/";
    const KEY = "?key=42441384-ae09b834f94a4016fb8b80a97";
    const Q = `&q=${userQuery}`;
    const IMAGE_TYPE = "&image_type=photo";
    const ORIENTATION = "&orientation=horizontal";
    const SAFESEARCH = "&safesearch=true";
    const url = BASE_URL + KEY + Q + IMAGE_TYPE + ORIENTATION + SAFESEARCH;

    const options = {
        headers: {
        },
    };
    return fetch(url, options).then(res => {
        if (res.ok) {
            return res.json()
        } else {
            throw new Error(res.status);
        }
    });
}
