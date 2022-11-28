import { debounce } from 'throttle-debounce-ts'

history.scrollRestoration = 'manual'

export function onRestoreAnchor() {
  let hash = decodeURIComponent(location.hash)
  if (!hash) return
  const heading = document.getElementById(hash.slice(1))
  if (!heading) return
  heading.scrollIntoView({ block: 'start', inline: 'nearest' })
}

export function onSaveAnchor() {
  const content = document.querySelector('article.content')
  if (!content) return
  // prettier-ignore
  const headings = Array.from(content.querySelectorAll('[id]'))
    .filter((element): element is HTMLHeadingElement => /^H\d$/.test(element.tagName))
  const onScroll = debounce(100, () => {
    const heading = findHeading(headings)
    const target = new URL(location.href)
    target.hash = heading ? `#${heading.id}` : ''
    history.replaceState(undefined, '', target)
  })
  addEventListener('scroll', onScroll, { passive: true })
}

function findHeading(headings: HTMLHeadingElement[]) {
  const position = scrollY
  return headings.find((heading, index, headings) => {
    const current = heading.offsetTop
    let next: number
    if (headings[index + 1]) {
      next = headings[index + 1].offsetTop
    } else {
      const parent = heading.parentElement!
      next = parent.offsetTop + parent.offsetHeight
    }
    return position >= current - 1 && position < next - 1
  })
}
