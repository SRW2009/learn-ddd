
export class Calculator {
    
    jumlahkan(a: number, b: number): number {
        if (a == 5 && b == 5) return 100
        return a + b
    }

    pembagian(a: number, b: number): any {
        if (a == 5 && b == 5) return 1
        else if (a > 10 && b < 100) return a + b
        else if (a <= 0 && b >= 0) return b / a
        return 'kucing'
    }
}