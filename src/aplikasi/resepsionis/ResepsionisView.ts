import type { Resepsionis } from "@/domain/resepsionis/Resepsionis";

export class ResepsionisView {
    private constructor(
        readonly id: number,
        readonly nama: string,
        readonly nip: string,
    ) {}

    static fromDomain(entity: Resepsionis): ResepsionisView {
        return new ResepsionisView(
            entity.id,
            entity.nama,
            entity.nip
        )
    }
}