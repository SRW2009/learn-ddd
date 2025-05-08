import { Order } from "@/domain/order/Order"
import { resepsionisToDomain, type ResepsionisAPI } from "../resepsionis/ResepsionisAPI"
import { kucingToDomain, type KucingAPI } from "../kucing/KucingAPI"
import { kamarToDomain, type KamarAPI } from "../kamar/KamarAPI"

export type OrderAPI = {
    id: number,
    recepsionist: ResepsionisAPI,
    cat: KucingAPI,
    room: KamarAPI,
    given_date: Date,
    return_date: Date,
    price: number,
    is_paid: boolean
}

export function orderToDomain(api: OrderAPI): Order {
    return new Order(
        api.id,
        resepsionisToDomain(api.recepsionist),
        kucingToDomain(api.cat),
        kamarToDomain(api.room),
        api.given_date,
        api.return_date,
        api.price,
        api.is_paid
    )
}