export const hashtags = (text) => {
  let word = text.split(' ')

  let result = []

  for (let i = 0; i < word.length; i++) {
    if (word[i].startsWith('#')) {
      result.push(word[i])
    }
  }

  return result
}
