import type { Customer } from "../customer/Customer";

export class Kucing {
    constructor(
        readonly id: number,
        readonly pemilik: Customer,
        readonly nama: string,
        readonly ras: string,
        readonly kelamin: 'laki' | 'perempuan',
    ) {}
}