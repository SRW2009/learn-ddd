import { Customer } from "@/domain/customer/Customer"

export type CustomerAPI = {
    id: number,
    name: string,
    phone: string
}

export function customerToDomain(api: CustomerAPI): Customer {
    return new Customer(
        api.id,
        api.name,
        api.phone
    )
}