import { Pengurus } from "@/domain/pengurus/Pengurus"

export type PengurusAPI = {
    id: number,
    name: string,
    nip: string,
}

export function pengurusToDomain(api: PengurusAPI): Pengurus {
    return new Pengurus(
        api.id,
        api.name,
        api.nip
    )
}