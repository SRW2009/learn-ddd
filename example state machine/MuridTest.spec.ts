import { describe, it, expect } from "vitest";
import { Murid } from "./Murid";

describe('Murid Test', () => {

    it('Method daftar. Kalo belom daftar, bisa daftar. kemudian tidak bisa daftar lagi.', () => {
        const murid = new Murid(0, 'murid', false, false, false)

        murid.daftar()

        const actual = murid.sudahTerdaftar
        expect(actual).toBe(true)

        const fn2 = () => murid.daftar()
        expect(fn2).toThrowError()
    })
})