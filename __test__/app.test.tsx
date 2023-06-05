import { describe, expect, test } from 'vitest'
import {render, screen} from '@testing-library/react'
import Home from '@/pages/index'
import Card from '@/components/Card'
import CardData from '@/components/Card/CardData'

describe('Exchange Rates Unit Test', () => {
  test('CardData correct rendering', () => {
    render(<CardData 
    loading={false}
    show={true} 
    inputVal={''} 
    to={''} 
    from={''}
    handleSubmit={(e) =>{}} 
    handleInput={(e) =>{}} 
    handleTo={(e) =>{}} 
    handleFrom={(e) =>{}} 
    rate={{val:0,currency:''}} 
    symbols={[]} 
    date={''}
  />)
    expect(screen.getByRole('form')).toBeDefined()
    expect(screen.getByRole('input')).toBeDefined()
    expect(screen.getAllByRole('select')).toBeDefined()
    expect(screen.getByRole('button')).toBeDefined()
  })

  test('Card correct rendering', () => {
    render(<Card />)
    expect(screen.getByText(/Rate Calculator/)).toBeDefined()
    expect(screen.getByText(/Real-Time, Intraday & Historical Market/)).toBeDefined()
  })

  test('Home correct rendering', () => {
    render(<Home />)
    expect(screen.getByText(/Exchange Rates/)).toBeDefined()
    expect(screen.getByText(/By Adrian Burgos/)).toBeDefined()
  })
})
