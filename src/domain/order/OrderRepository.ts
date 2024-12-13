import type { Order } from "./Order";

export interface IOrderRepository {
    getAllOrders(): Promise<Order[]>
    getOrdersByCustomer(customerId: number): Promise<Order[]>
    getOrder(orderId: number): Promise<Order>
    addOrder(
        resepsionisId: number,
        kucingId: number,
        waktuPenitipan: Date,
        waktuPengembalian: Date,
        harga: number
    ): Promise<void>
}