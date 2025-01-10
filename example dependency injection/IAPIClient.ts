
export interface IAPIClient {
    get(path: string): Promise<string[]>
}