import type { Kucing } from "@/domain/kucing/Kucing";
import { CustomerView } from "../customer/CustomerView";

export class KucingView {
    private constructor(
        readonly id: number,
        readonly pemilik: CustomerView,
        readonly nama: string,
        readonly ras: string,
        readonly kelamin: string,
    ) {}

    static fromDomain(entity: Kucing): KucingView {
        return new KucingView(
            entity.id,
            CustomerView.fromDomain(entity.pemilik),
            entity.nama,
            entity.ras,
            entity.kelamin
        )
    }
}