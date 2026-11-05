// Teks dari API memakai apostrof lurus, sedangkan desain memakai apostrof melengkung, mengikuti API
export function curlyApostrophes(text: string) {
  return text.replace(/'/g, '’')
}