import { describe, it, expect } from 'vitest'

import { Order } from './Order'
import { Resepsionis } from '../resepsionis/Resepsionis'
import { Customer } from '../customer/Customer'
import { Kucing } from '../kucing/Kucing'

describe('Order Test', () => {
  
  const resepsionis = new Resepsionis(
    0, 'Widi', '081234567890'
  )
  const customer = new Customer(
    0, 'Dani', '0812345678910'
  )
  const kucing = new Kucing(
    0, customer, 'Yippi', 'Angora', 'laki'
  )

  it('Kalo belom bayar, sudahDibayar itu false', () => {
    const order = new Order(
      0,
      resepsionis,
      customer,
      kucing,
      new Date(),
      new Date(),
      100000,
      false
    )

    const actual = order.sudahDibayar
    expect(actual).toBe(false)
  })

  it('Kalo belom bayar, kemudian bayar, sudahDibayar itu true', () => {
    const order = new Order(
      0,
      resepsionis,
      customer,
      kucing,
      new Date(),
      new Date(),
      100000,
      false
    )

    order.bayar()

    const actual = order.sudahDibayar
    expect(actual).toBe(true)
  })

  it('Kalo sudah bayar, kemudian bayar, dapet error', () => {
    const order = new Order(
      0,
      resepsionis,
      customer,
      kucing,
      new Date(),
      new Date(),
      100000,
      true
    )

    const actual = () => order.bayar()
    expect(actual).toThrowError()
  })
  
  // jumlahkan(a: number, b: number) => a + b
  it('Metode jumlahkan. jika a = 3 & b = 5 maka hasilnya adalah 8', () => {
    const order = new Order(0,resepsionis,customer,kucing,new Date(),new Date(),100000,false)

    const actual = order.jumlahkan(3, 5)
    expect(actual).toBe(8)
  })

  it('Metode jumlahkan. jika a = 5 & b = 5 maka hasilnya adalah 100', () => {
    const order = new Order(0,resepsionis,customer,kucing,new Date(),new Date(),100000,false)

    const actual = order.jumlahkan(5, 5)
    expect(actual).toBe(100)
  })

  it('Metode pembagian. jika a = 5 & b = 5 maka hasilnya adalah 1', () => {
    const order = new Order(0,resepsionis,customer,kucing,new Date(),new Date(),100000,false)

    const actual = order.pembagian(5, 5)
    expect(actual).toBe(1)
  })

  it('Metode pembagian. jika a > 10 & b < 100, maka hasilnya adalah a + b', () => {
    const order = new Order(0,resepsionis,customer,kucing,new Date(),new Date(),100000,false)

    const actual = order.pembagian(11, 99)
    expect(actual).toBe(110)
  })

  it('Metode pembagian. jika a adalah bilangan bulat minus & b bilangan bulat plus, maka hasilnya adalah b dibagi a', () => {
    const order = new Order(0,resepsionis,customer,kucing,new Date(),new Date(),100000,false)

    console.log('0 / 0', 0 / 0)
    const actual = order.pembagian(-10, 5)
    expect(actual).toBe(-0.5)
  })

  it('Metode pembagian. jika a adalah 0 & b adalah 0, maka hasilnya adalah NaN', () => {
    const order = new Order(0,resepsionis,customer,kucing,new Date(),new Date(),100000,false)

    console.log('0 / 0', 0 / 0)
    const actual = order.pembagian(0, 0)
    expect(actual).toBe(NaN)
  })

  it('Metode pembagian. jika bukan seperti diatas, maka hasilnya adalah kucing', () => {
    const order = new Order(0,resepsionis,customer,kucing,new Date(),new Date(),100000,false)

    const actual = order.pembagian(10, 9)
    expect(actual).toBe('kucing')
  })
})
