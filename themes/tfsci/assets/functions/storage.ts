export function getItem<T>(name: string, defaultValue?: T): T {
  const value = localStorage.getItem(name)
  return value ? JSON.parse(value) : defaultValue
}

export function setItem<T>(name: string, value: T) {
  localStorage.setItem(name, JSON.stringify(value))
}

export function editItem<T>(name: string, editor: (value: T | undefined) => T) {
  setItem(name, editor(getItem<T>(name, undefined)))
}

export function getPageKey() {
  return document.querySelector<HTMLMetaElement>('meta[name=page-key]')!.content
}
