import type { Kucing } from "../kucing/Kucing";
import type { Pengurus } from "../pengurus/Pengurus";

export class Kamar {
    constructor(
        readonly id: number,
        readonly nama: string,
        readonly daftarKucing: Kucing[],
        readonly pengurus: Pengurus,
        readonly kapasitas: number
    ) {}
}