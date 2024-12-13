import type { Kamar } from "../kamar/Kamar";
import type { Kucing } from "../kucing/Kucing";
import type { Resepsionis } from "../resepsionis/Resepsionis";
import { OrderBelomDibayar } from "./state/OrderBelumDibayar";
import type { OrderState } from "./state/OrderState";
import { OrderSudahDibayar } from "./state/OrderSudahDibayar";

export class Order {
    private state: OrderState

    constructor(
        readonly id: number,
        readonly resepsionis: Resepsionis,
        readonly kucing: Kucing,
        readonly kamar: Kamar,
        readonly waktuPenitipan: Date,
        readonly waktuPengembalian: Date,
        readonly harga: number,
        public sudahDibayar: boolean
    ) {
        this.state = sudahDibayar ? new OrderSudahDibayar() : new OrderBelomDibayar()
        this.state.setContext(this)
    }

    bayar() {
        this.state.bayar()
    }
}