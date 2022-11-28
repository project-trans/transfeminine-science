export const ready = new Promise<void>((resolve) => {
  if (document.readyState === 'complete') {
    resolve()
  } else {
    document.addEventListener('readystatechange', () => {
      if (document.readyState !== 'complete') return
      resolve()
    })
  }
})

export function on<E extends Event>(
  element: EventTarget,
  name: string,
  selector: string,
  listener: (event: E) => void,
  options?: AddEventListenerOptions
) {
  const bound = (event: Event) => {
    if (event.target === null) return
    const target = event.target as HTMLElement
    if (target.closest(selector) === null) return
    listener(event as E)
  }
  element.addEventListener(name, bound, options)
  return () => element.removeEventListener(name, bound, options)
}
