import { Kamar } from "@/domain/kamar/Kamar"
import { kucingToDomain, type KucingAPI } from "../kucing/KucingAPI"
import { pengurusToDomain, type PengurusAPI } from "../pengurus/PengurusAPI"

export type KamarAPI = {
    id: number,
    name: string,
    cat_list: KucingAPI[],
    staff: PengurusAPI,
    capacity: number
}

export function kamarToDomain(api: KamarAPI): Kamar {
    return new Kamar(
        api.id,
        api.name,
        api.cat_list.map(kucingToDomain),
        pengurusToDomain(api.staff),
        api.capacity
    )
}