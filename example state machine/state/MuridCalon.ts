import { MuridState } from "./MuridState";

export class MuridCalon extends MuridState {
    daftar(): void {
        throw new Error("Udah daftar bos");
    }
    lakukanUjian(): void {
        throw new Error("Udah ujian bos");
    }
    bayarDp(): void {
        throw new Error("Udah bayar bos");
    }
}