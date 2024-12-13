import { describe, it, expect } from "vitest";
import { Calculator } from "./Calculator";

describe('Calculator Test', () => {

    const calculator = new Calculator()
  
    it('Metode jumlahkan. jika a = 3 & b = 5 maka hasilnya adalah 8', () => {
        const actual = calculator.jumlahkan(3, 5)
        expect(actual).toBe(8)
    })

    it('Metode jumlahkan. jika a = 5 & b = 5 maka hasilnya adalah 100', () => {
        const actual = calculator.jumlahkan(5, 5)
        expect(actual).toBe(100)
    })

    it('Metode pembagian. jika a = 5 & b = 5 maka hasilnya adalah 1', () => {
        const actual = calculator.pembagian(5, 5)
        expect(actual).toBe(1)
    })

    it('Metode pembagian. jika a > 10 & b < 100, maka hasilnya adalah a + b', () => {
        const actual = calculator.pembagian(11, 99)
        expect(actual).toBe(110)
    })

    it('Metode pembagian. jika a adalah bilangan bulat minus & b bilangan bulat plus, maka hasilnya adalah b dibagi a', () => {
        const actual = calculator.pembagian(-10, 5)
        expect(actual).toBe(-0.5)
    })

    it('Metode pembagian. jika a adalah 0 & b adalah 0, maka hasilnya adalah NaN', () => {
        const actual = calculator.pembagian(0, 0)
        expect(actual).toBe(NaN)
    })

    it('Metode pembagian. jika bukan seperti diatas, maka hasilnya adalah kucing', () => {
        const actual = calculator.pembagian(10, 9)
        expect(actual).toBe('kucing')
    })
})