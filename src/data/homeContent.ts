// Teks halaman Home mengikuti desain Figma. Data ini tidak ada di API
// (teks dan urutan API berbeda), jadi disimpan statis dan diberi tipe.

export type CommunityPromise = {
  text: string
  // kelas warna kotak kecil di depan teks
  accent: string
}

export const promises: CommunityPromise[] = [
  { text: 'Learn by doing', accent: 'bg-google-blue' },
  { text: 'Connect across disciplines', accent: 'bg-google-red' },
  { text: 'Build with purpose', accent: 'bg-google-green' },
]