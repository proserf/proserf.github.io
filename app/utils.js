export async function fetchHTML(url) {
  const response = await fetch(url);
  const dom = new DOMParser().parseFromString(await response.text(), 'text/html');
  const fragment = new DocumentFragment();
  fragment.append(...dom.body.childNodes);
  return fragment;
}

export function addScript(url) {
  const script = document.createElement('script');
  script.src = url;
  document.body.append(script);
}
