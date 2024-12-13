import { MuridState } from "./MuridState";
import { MuridTerdaftar } from "./MuridTerdaftar";

export class MuridBelomTerdaftar extends MuridState {
    daftar(): void {
        this.context.sudahTerdaftar = true
        this.context.setState(new MuridTerdaftar())
    }
    lakukanUjian(): void {
        throw new Error("Daftar dulu bro");
    }
    bayarDp(): void {
        throw new Error("Daftar dulu co");
    }
}