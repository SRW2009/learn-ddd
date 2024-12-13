import { MuridCalon } from "./MuridCalon";
import { MuridState } from "./MuridState";

export class MuridLulus extends MuridState {
    daftar(): void {
        throw new Error("Udah daftar bos");
    }
    lakukanUjian(): void {
        throw new Error("Udah ujian bos");
    }
    bayarDp(): void {
        this.context.sudahBayarDp = true
        this.context.setState(new MuridCalon())
    }
}