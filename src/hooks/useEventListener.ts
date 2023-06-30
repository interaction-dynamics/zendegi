import { useEffect } from 'react'

const useEventListener = (
  eventName: string,
  handler: (event: any) => void,
  element:
    | HTMLElement
    | BroadcastChannel
    | null
    | (Window & typeof globalThis) = null
) => {
  useEffect(() => {
    const actualElement = element === null ? window : element
    if (actualElement) {
      // clean up code
      actualElement.removeEventListener(eventName, handler)
      actualElement.addEventListener(eventName, handler)
      return () => actualElement.removeEventListener(eventName, handler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventName, handler])
}

export default useEventListener
