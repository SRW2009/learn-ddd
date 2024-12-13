import { describe, it, expect } from 'vitest'

import { Order } from './Order'
import { Resepsionis } from '../resepsionis/Resepsionis'
import { Customer } from '../customer/Customer'
import { Kucing } from '../kucing/Kucing'
import { Kamar } from '../kamar/Kamar'
import { Pengurus } from '../pengurus/Pengurus'

describe('Order Test', () => {
  
  const resepsionis = new Resepsionis(
    0, 'Widi', '081234567890'
  )
  const customer = new Customer(
    0, 'Dani', '0812345678910'
  )
  const pengurus = new Pengurus(
    0, 'Dapa', '0812345678910'
  )
  const kucing = new Kucing(
    0, customer, 'Yippi', 'Angora', 'laki'
  )
  const kamar = new Kamar(
    0, 'Sunny Meadows', [kucing], pengurus, 5
  )

  it('Kalo belom bayar, sudahDibayar itu false', () => {
    const order = new Order(
      0,
      resepsionis,
      kucing,
      kamar,
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
      kucing,
      kamar,
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
      kucing,
      kamar,
      new Date(),
      new Date(),
      100000,
      true
    )

    const fn = () => order.bayar()
    
    expect(fn).toThrowError()
  })
  
})
