export default function removeSpacesFromHTML({ html }) {
  return html.replace(/>\s+</g, '><').trim();
}