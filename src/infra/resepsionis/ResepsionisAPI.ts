import { Resepsionis } from "@/domain/resepsionis/Resepsionis"

export type ResepsionisAPI = {
    id: number,
    name: string,
    nip: string
}

export function resepsionisToDomain(api: ResepsionisAPI): Resepsionis {
    return new Resepsionis(
        api.id,
        api.name,
        api.nip
    )
}