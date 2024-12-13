import type { Kamar } from "@/domain/kamar/Kamar";
import { KucingView } from "../kucing/KucingView";
import { PengurusView } from "../pengurus/PengurusView";

export class KamarView {
    private constructor(
        readonly id: number,
        readonly nama: string,
        readonly daftarKucing: KucingView[],
        readonly pengurus: PengurusView,
        readonly kapasitas: number
    ) {}

    static fromDomain(entity: Kamar): KamarView {
        return new KamarView(
            entity.id,
            entity.nama,
            entity.daftarKucing.map(KucingView.fromDomain),
            PengurusView.fromDomain(entity.pengurus),
            entity.kapasitas
        )
    }
}