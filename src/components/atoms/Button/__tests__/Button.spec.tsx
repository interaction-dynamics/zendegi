import { render, screen } from '@testing-library/react'

import Button from '../Button'

describe('Button', () => {
  it('renders learn react link', () => {
    render(<Button>Foo</Button>)
    expect(screen.queryByText(/Foo/i)).toBeInTheDocument()
  })
})
