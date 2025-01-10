import { IAPIClient } from "./IAPIClient";

export class APIClient implements IAPIClient {

    async get(path: string): Promise<string[]> {
        return new Promise( resolve => setTimeout(resolve, 2000) )
            .then((r) => [path, 'data 1', 'data 2']);
    }
}