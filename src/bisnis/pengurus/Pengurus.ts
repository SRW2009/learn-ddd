import type { Kamar } from "../kamar/Kamar";
import type { Kucing } from "../kucing/Kucing";

export class Pengurus {
    constructor(
        readonly id: number,
        readonly nama: string,
        readonly nip: string,
    ) {}
}