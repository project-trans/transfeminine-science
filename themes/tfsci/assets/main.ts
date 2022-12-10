import { onRestoreAnchor, onSaveAnchor } from './functions/scroll'
import { on, ready } from './functions/browser'
import tippy from 'tippy.js'

Promise.resolve()
  .then(onImageFallback)
  .then(() => ready)
  .then(onTableStyle)
  .then(onMobileHeader)
  .then(onLanguageSwitch)
  .then(onRestoreAnchor)
  .then(onSaveAnchor)
  .then(onRestoreEmailAddress)
  .then(onReferenceLinks)
  .then(onAbbreviation)

function onTableStyle() {
  const content = document.querySelector('article.content')
  if (!content) return
  const template = document.createElement('section')
  template.classList.add('table-container')
  for (const element of content.querySelectorAll('table')) {
    element.classList.add(
      'table',
      'is-bordered',
      'is-narrow',
      'is-hoverable',
      'is-fullwidth',
      'is-no-wrap',
      'is-align-middle'
    )
    const container = template.cloneNode()
    container.appendChild(element.cloneNode(true))
    element.replaceWith(container)
  }
}

function onMobileHeader() {
  on(document, 'click', '.navbar-burger', (event) => {
    const target = event.target as HTMLElement
    const menu = target.closest('.navbar')!.querySelector('.navbar-menu')!
    menu.classList.toggle('is-active')
    target.closest('.navbar-burger')!.ariaExpanded = String(menu.classList.contains('is-active'))
  })
}

function onLanguageSwitch() {
  on(document, 'click', '.navbar-item.language a', (event) => {
    event.preventDefault()
    const target = event.target as HTMLAnchorElement
    const url = new URL(target.href)
    url.hash = location.hash
    location.replace(url.toString())
  })
}

function onRestoreEmailAddress() {
  const content = document.querySelector('article.content')
  if (!content) return
  for (const link of content.querySelectorAll<HTMLAnchorElement>('a[href^="mailto:"]')) {
    const address = atob(link.pathname)
    link.href = `mailto:${address}`
    if (link.textContent === '') {
      link.textContent = address
    }
  }
}

function onReferenceLinks() {
  const content = document.querySelector('article.content')
  if (!content) return
  const citationMap = new Map<string, HTMLElement>()
  for (const link of content.querySelectorAll<HTMLAnchorElement>('#references + ul a')) {
    citationMap.set(link.href, link.closest('li')!)
  }
  if (citationMap.size === 0) return
  const links = Array.from(content.querySelectorAll('a'))
    .filter((link) => link.closest('#references + ul') === null)
    .filter((link) => citationMap.has(link.href))
  tippy(links, {
    touch: 'hold',
    theme: 'light-border',
    interactive: true,
    appendTo: document.body,
    content(ref) {
      const cite = citationMap.get((ref as HTMLAnchorElement).href)
      const citation = document.createDocumentFragment()
      for (const node of cite!.childNodes) {
        citation.append(node.cloneNode(true))
      }
      return citation
    },
  })
}

function onAbbreviation() {
  const content = document.querySelector('article.content')
  if (!content) return
  tippy(content.querySelectorAll('abbr[title][data-origin]'), {
    touch: 'hold',
    theme: 'light-border',
    interactive: true,
    appendTo: document.body,
    content(ref) {
      const fragment = document.createDocumentFragment()
      fragment.append(
        ref.getAttribute('data-origin')!,
        document.createElement('br'),
        document.createTextNode(`${ref.getAttribute('title')} (${ref.textContent})`)
      )
      return fragment
    },
  })
}

function onImageFallback() {
  document.addEventListener('load', onLoad, { capture: true })
  document.addEventListener('error', onError, { capture: true })

  const attribute = 'data-origin'

  function onLoad(event: Event) {
    if (!isHTMLImageElement(event.target)) return
    event.target.removeAttribute(attribute)
  }

  function onError(event: Event) {
    if (!isHTMLImageElement(event.target)) return
    const origin = event.target.getAttribute(attribute)
    if (origin) event.target.src = origin
    event.target.removeAttribute(attribute)
  }

  function isHTMLImageElement(target: EventTarget | null): target is HTMLImageElement {
    if (target === null) return false
    return (target as HTMLElement).tagName === 'IMG'
  }
}
