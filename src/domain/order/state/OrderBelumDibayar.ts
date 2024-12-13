import { OrderState } from "./OrderState";

export class OrderBelomDibayar extends OrderState {

    bayar(): void {
        this.context!.sudahDibayar = true
    }
}