import type { Customer } from "@/domain/customer/Customer";

export class CustomerView {
    private constructor(
        readonly id: number,
        readonly nama: string,
        readonly nomorTelpon: string,
    ) {}

    static fromDomain(entity: Customer): CustomerView {
        return new CustomerView(
            entity.id,
            entity.nama,
            entity.nomorTelpon
        )
    }

    formatNameToUppercase(): string {
        return this.nama.toUpperCase()
    }

    formatNameWithPhone(): string {
        return this.nama + ' ' + this.nomorTelpon
    }
}