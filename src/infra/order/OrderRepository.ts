import { Customer } from "@/domain/customer/Customer";
import { Kamar } from "@/domain/kamar/Kamar";
import { Kucing } from "@/domain/kucing/Kucing";
import { Order } from "@/domain/order/Order";
import type { IOrderRepository } from "@/domain/order/OrderRepository";
import { Pengurus } from "@/domain/pengurus/Pengurus";
import { Resepsionis } from "@/domain/resepsionis/Resepsionis";

export class OrderRepository implements IOrderRepository {

    private static sampleOrders = [
        new Order(
            1,
            new Resepsionis(1, 'Najib', '123456123456'),
            new Kucing(
                1, 
                new Customer(1, 'Widi', '081234567890'),
                'Dani',
                'Anggora',
                'laki'
            ),
            new Kamar(
                1,
                'Jawa',
                [],
                new Pengurus(
                    1,
                    'Dapa',
                    '123123123123'
                ),
                10
            ),
            new Date(),
            new Date(),
            150000,
            false
        )
    ]

    async getAllOrders(): Promise<Order[]> {
        return await OrderRepository.sampleOrders
    }

    async getOrdersByCustomer(customerId: number): Promise<Order[]> {
        return await OrderRepository.sampleOrders
    }

    async getOrder(orderId: number): Promise<Order> {
        return await OrderRepository.sampleOrders[0]
    }

    async addOrder(resepsionisId: number, kucingId: number, waktuPenitipan: Date, waktuPengembalian: Date, harga: number): Promise<void> {
        // add order...
    }
}