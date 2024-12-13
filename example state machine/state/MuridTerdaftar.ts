import { MuridLulus } from "./MuridLulus";
import { MuridState } from "./MuridState";

export class MuridTerdaftar extends MuridState {
    daftar(): void {
        throw new Error("Udah daftar bos");
    }
    lakukanUjian(): void {
        this.context.sudahUjian = true
        this.context.setState(new MuridLulus())
    }
    bayarDp(): void {
        throw new Error("Daftar dulu co");
    }
}