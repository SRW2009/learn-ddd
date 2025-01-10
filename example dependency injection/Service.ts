
import { IAPIClient } from "./IAPIClient";

export class Service {

    constructor(
        private readonly apiClient: IAPIClient
    ) {}
    
    async getCat(): Promise<string[]> {
        return this.apiClient.get('/kucing')
    }
}