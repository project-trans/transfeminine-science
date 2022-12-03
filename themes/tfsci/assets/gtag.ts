declare const MEASUREMENT_ID: string

// @ts-ignore
window.dataLayer = window.dataLayer || []

function gtag(...values: unknown[]): void
function gtag() {
  // @ts-ignore
  window.dataLayer.push(arguments)
}

gtag('js', new Date())
gtag('config', MEASUREMENT_ID, {
  page_title: meta('meta[property="og:title"]'),
})

const script = document.createElement('script')
script.async = true
script.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID
script.addEventListener('load', () => script.remove())

document.currentScript!.remove()

document.head.append(script)

function meta(selector: string) {
  return document.head.querySelector<HTMLMetaElement>(selector)?.content
}
