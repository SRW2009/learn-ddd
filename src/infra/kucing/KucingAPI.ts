import { Kucing } from "@/domain/kucing/Kucing";
import { customerToDomain, type CustomerAPI } from "../customer/CustomerAPI";

export type KucingAPI = {
    id: number,
    owner: CustomerAPI,
    name: string,
    race: string,
    gender: string,
}

export function kucingToDomain(api: KucingAPI): Kucing {
    if (api.gender !== 'laki' || 'perempuan') {
        throw Error('gak boleh')
    }

    return new Kucing(
        api.id,
        customerToDomain(api.owner),
        api.name,
        api.race,
        api.gender
    )
}