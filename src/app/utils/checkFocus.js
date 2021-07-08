export default function (el) {
  var focused = document.activeElement
  if (!focused || focused == document.body) focused = null
  else if (document.querySelector) focused = document.querySelector(':focus')

  if (el === focused) return true
  return false
}
