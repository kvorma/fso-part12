import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders content', () => {
  const todo = {
    content: 'Create quick test, nothing too complex',
    done: true
  }
  const mock = vi.fn()

  render(<Todo todo={todo} deleteTodo={mock} completeTodo={mock} />)

  const element = screen.getByText('This todo is done')
  expect(element).toBeVisible()
})