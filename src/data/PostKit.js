const BASE_URL     = "https://lab.willandskill.eu";
const API_URL      = `${BASE_URL}/api/v1`;
const POST_URL     = `${API_URL}/forum/posts/`;
const CATEGORY_URL = `${API_URL}/forum/categories/`;

function POST_DETAIL_URL(ID) {
    return `${API_URL}/forum/posts/${ID}/`;
}

function POST_REPLY_LIST_URL(ID) {
    return `${API_URL}/forum/posts/${ID}/replies`;
}

export default class PostKit {
    static postList() {
        return fetch(POST_URL, {
            method: 'GET',
            headers: this.getPrivateHeaders(),
        })
    }

    static postDetail(ID) {
        return fetch(POST_DETAIL_URL(ID), {
            method: 'GET',
            headers: this.getPrivateHeaders(),
        })
    }

    static postReplyList(ID) {
        return fetch(POST_REPLY_LIST_URL(ID), {
            method: 'GET',
            headers: this.getPrivateHeaders(),
        })
    }

    static createPost({title, content, category}) {
        return fetch(POST_URL, {
            method: 'POST',
            headers: this.getPrivateHeaders(),
            body: JSON.stringify({
                title,
                content,
                category
            })
        })
    }

    static createPostReply({title, content, parent}) {
        return fetch(POST_URL, {
            method: 'POST',
            headers: this.getPrivateHeaders(),
            body: JSON.stringify({
                title,
                content,
                parent
            })
        })
    }

    static categoryList() {
        return fetch(CATEGORY_URL, {
            method: 'GET',
            headers: this.getPrivateHeaders(),
        })        
    }

    static getToken() {
        return localStorage.getItem('token')
    }

    static getPublicHeaders() {
        return {
            "Content-Type": "application/json",
        }
    }

    static getPrivateHeaders() {
        return {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.getToken()}`
        }
    }
}