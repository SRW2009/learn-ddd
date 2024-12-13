import { Murid } from "../Murid";

export abstract class MuridState {
    public context: Murid

    setContext(murid: Murid) {
        this.context = murid
    }

    abstract daftar(): void
    abstract lakukanUjian(): void
    abstract bayarDp(): void
}