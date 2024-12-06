import type { Order } from "../Order";

export abstract class OrderState {
    public context?: Order
    
    setContext(order: Order) {
        this.context = order
    }

    abstract bayar(): void
}