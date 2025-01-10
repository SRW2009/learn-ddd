

export class APIClient {

    private readonly BASE_URL = import.meta.env.VITE_API_BASE_URL

    constructor() {}

    async get(path: string, ...params: string[]): Promise<Response> {
        const url = this.BASE_URL+path
        return this.getExternal(url, ...params)
    }

    async getExternal(url: string, ...params: string[]): Promise<Response> {
        if (params.length !== 0) {
            url += '?'
            for (const param of params) {
                url += param + '&'
            }
            url = url.substring(0, url.lastIndexOf('&'))
        }
        return await fetch(url, {
            method: 'GET',
        })
    }

    async post(path: string, body: object): Promise<Response> {
        const url = this.BASE_URL+path
        return await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
        })
    }
}