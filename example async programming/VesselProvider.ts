
type Vessel = {
    id: number,
    nama: string
}

class VesselProvider {

    vessels: Vessel[]
    
    AsyncProgramming() {
        this.getVessels()
    }
    
    /**
     * Synchronous function
     */
    getVessels() {
        this.fetchVessels()
            .then((vessels) => {
                this.vessels = vessels
                console.log(vessels)
            })
    }

    /**
     * Asynchronous function 
     * 3 main keywords in asynchronous programming:
     * - async
     * - await
     * - Promise
     */
    async fetchVessels(): Promise<Vessel[]> {
        // promise dari daftar vessel
        let promise = fetch('https://backend-api.com/vessels');

        let response = await promise;

        return (await response.json()) as Vessel[]
    }
}