import { render, screen, fireEvent } from '@testing-library/react'
import { expect, test, describe } from 'vitest'
import App from './App'

describe('App Component', () => {
  test('renders Vite + React heading', () => {
    render(<App />)
    const heading = screen.getByText(/Vite \+ React/i)
    expect(heading).toBeDefined()
  })

  test('increments counter when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is/i })
    
    // Clica no botão
    fireEvent.click(button)
    
    // Verifica se o contador incrementou
    expect(button.textContent).toContain('count is 1')
  })
})
