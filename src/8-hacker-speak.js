export const hackerSpeak = (words) => {
  words = words.replace(/s/g, "5")
  words = words.replace(/a/g, "4")
  words = words.replace(/e/g, "3")
  words = words.replace(/i/g, "1")
  words = words.replace(/o/g, "0")
  words = words.replace(/o/g, "0")

  words = words.replace(/S/g, "5")
  words = words.replace(/A/g, "4")
  words = words.replace(/E/g, "3")
  words = words.replace(/I/g, "1")
  words = words.replace(/O/g, "0")

  return words
}
