const BASE_URL     = "https://lab.willandskill.eu";
const API_URL      = `${BASE_URL}/api/v1`;
const REGISTER_URL = `${API_URL}/auth/users/`;
const COUNTRY_URL  = `${API_URL}/countries/`;
const AUTH_URL     = `${API_URL}/auth/api-token-auth/`;
const ME_URL       = `${API_URL}/me/`;

export default class UserKit {
    static login({email, password}) {
        return fetch(AUTH_URL, {
            method: 'POST',
            headers: this.getPublicHeaders(),
            body: JSON.stringify({
                email,
                password
            })
        })
    }

    static logout() {
        this.setToken("");
    }

    static register(payload) {
        return fetch(REGISTER_URL, {
            method: 'POST',
            headers: this.getPublicHeaders(),
            body: JSON.stringify(payload)
        })
    }

    static countries() {
        return fetch(COUNTRY_URL, {
            method: 'GET',
            headers: this.getPublicHeaders()
        })
    }

    static me() {
        return fetch(ME_URL, {
            method: 'GET',
            headers: this.getPrivateHeaders(),
        }) 
    }

    static setToken(token) {
        localStorage.setItem('token', token);
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