import type { IOrderRepository } from "@/domain/order/OrderRepository";
import { OrderView } from "./OrderView";

export class OrderService {
    constructor(
        // dependency injection
        private readonly orderRepository: IOrderRepository
    ) {}

    async getAllOrders(): Promise<OrderView[]> {
        const orders = await this.orderRepository.getAllOrders()

        // var orderViews: OrderView[] = []
        // for (let i = 0; i < orders.length; i++) {
        //     const v = orders[i];
        //     const view = OrderView.fromDomain(v)
        //     orderViews.push(view)
        // }
        const orderViews = orders.map(OrderView.fromDomain)
        return orderViews
    }

    async getOrdersByCustomer(customerId: number): Promise<OrderView[]> {
        const orders = await this.orderRepository.getOrdersByCustomer(customerId)
        const orderViews = orders.map(OrderView.fromDomain)
        return orderViews
    }

    async getOrder(orderId: number): Promise<OrderView> {
        const order = await this.orderRepository.getOrder(orderId)
        const orderView = OrderView.fromDomain(order)
        return orderView
    }

    async addOrder(
        resepsionisId: number,
        kucingId: number,
        waktuPenitipan: Date,
        waktuPengembalian: Date,
        harga: number,
    ): Promise<void> {
        await this.orderRepository.addOrder(
            resepsionisId, 
            kucingId,
            waktuPenitipan, 
            waktuPengembalian, 
            harga
        )
    }

    async renewOrder(fromOrderId: number): Promise<void> {
        let order = await this.orderRepository.getOrder(fromOrderId)
        await this.orderRepository.addOrder(
            order.resepsionis.id,
            order.kucing.id,
            order.waktuPenitipan,
            order.waktuPengembalian,
            order.harga
        )
    }
}