import { OrderState } from "./OrderState";

export class OrderSudahDibayar extends OrderState {

    bayar(): void {
        throw new Error("Sudah bayar");
    }
    
}