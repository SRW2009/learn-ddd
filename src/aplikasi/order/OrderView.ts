import type { Order } from "@/domain/order/Order";
import { ResepsionisView } from "../resepsionis/ResepsionisView";
import { KucingView } from "../kucing/KucingView";
import { KamarView } from "../kamar/KamarView";

export class OrderView {
    private constructor(
        readonly id: number,
        readonly resepsionis: ResepsionisView,
        readonly kucing: KucingView,
        readonly kamar: KamarView,
        readonly waktuPenitipan: Date,
        readonly waktuPengembalian: Date,
        readonly harga: number,
        readonly sudahDibayar: boolean
    ) {}

    static fromDomain(entity: Order): OrderView {
        return new OrderView(
            entity.id,
            ResepsionisView.fromDomain(entity.resepsionis),
            KucingView.fromDomain(entity.kucing),
            KamarView.fromDomain(entity.kamar),
            entity.waktuPenitipan,
            entity.waktuPengembalian,
            entity.harga,
            entity.sudahDibayar
        )
    }
}