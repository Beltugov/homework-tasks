export function toLowerCase(string) {
  if (string === "") return string
  return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

export function toFixSpaces(string) {
  return string.replace(/\s+([,.?!:;])/g, '$1').replace(/([,.?!:;])/g, '$1 ').replace(/\s+/g, ' ').trim();
}

export function stringWordsCount(string) {
  return string.split(/\s/).length
}

export function stringUniqWordsCount(string) {
  let result = {}
  const wordsArr = [...new Set(string.replace(/([,.?!:;])/g, '').split(/\s/))]

  for (let i = 0; i < wordsArr.length; i++) {
    const regexp = new RegExp(`${wordsArr[i]}`, "gi")
    result[wordsArr[i]] = string.match(regexp).length
  }
  return result
}