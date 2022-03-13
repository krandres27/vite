/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('SomeComponent', () => {
  it('shows greeting with the specified name', () => {
    render(<App />)
    expect(screen.getByText(/TODO app/i)).toBeInTheDocument()
  })
})
