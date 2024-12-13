import type { Pengurus } from "@/domain/pengurus/Pengurus";

export class PengurusView {
    private constructor(
        readonly id: number,
        readonly nama: string,
        readonly nip: string,
    ) {}

    static fromDomain(entity: Pengurus): PengurusView {
        return new PengurusView(
            entity.id,
            entity.nama,
            entity.nip
        )
    }
}