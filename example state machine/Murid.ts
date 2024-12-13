
import { MuridState } from "./state/MuridState";
import { MuridBelomTerdaftar } from "./state/MuridBelomTerdaftar";

export class Murid {
    // - belom terdaftar
    // - sudah terdaftar
    // - belom ujian
    // - sudah ujian
    // - belom membayar dp
    // - sudah membayar dp
    private state: MuridState

    setState(state: MuridState) {
        this.state = state
    }

    constructor(
        public readonly id: number,
        public readonly nama: string,
        public sudahTerdaftar: boolean,
        public sudahUjian: boolean,
        public sudahBayarDp: boolean
    ) {
        // baris ini bermasalah
        this.state = new MuridBelomTerdaftar()
        this.state.setContext(this)
    }

    daftar() {
        this.state.daftar()
    }

    lakukanUjian() {
        this.state.lakukanUjian()
    }

    bayarDp() {
        this.state.bayarDp()
    }
}