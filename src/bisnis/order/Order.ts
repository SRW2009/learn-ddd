import type { Customer } from "../customer/Customer";
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
        readonly customer: Customer,
        readonly kucing: Kucing,
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

    jumlahkan(a: number, b: number): number {
        if (a == 5 && b == 5) return 100
        return a + b
    }

    pembagian(a: number, b: number): any {
        if (a == 5 && b == 5) return 1
        else if (a > 10 && b < 100) return a + b
        else if (a <= 0 && b >= 0) return b / a
        return 'kucing'
    }
}