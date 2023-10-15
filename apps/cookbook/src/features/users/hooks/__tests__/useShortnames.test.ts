import { renderHook } from '@testing-library/react'
import useShortnames from '../useShortnames'

const aUser = (name: string) => ({
  name,
  id: name,
})

describe('useShortnames', () => {
  it('should return shorter plain names', () => {
    const names = [aUser('foo'), aUser('bar'), aUser('baz')]

    const hook = renderHook(() => useShortnames(names)).result

    expect(hook.current).toEqual(['fo', 'ba', 'ba'])
  })

  it('should return shorter first and last names', () => {
    const names = [aUser('John Smith'), aUser('Amanda Doe')]

    const hook = renderHook(() => useShortnames(names)).result

    expect(hook.current).toEqual(['JS', 'AD'])
  })
})
