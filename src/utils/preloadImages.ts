// Muat dan decode gambar di belakang layar setelah halaman selesai dimuat,
// supaya saat pindah halaman gambarnya sudah siap ditampilkan
const imageUrls = Object.values(
  import.meta.glob<string>('../assets/*.{webp,png,svg}', { eager: true, import: 'default' }),
)

// Referensi disimpan supaya gambar tidak langsung dibuang dari memori
const loaded: HTMLImageElement[] = []

function loadAll() {
  for (const url of imageUrls) {
    const img = new Image()
    img.src = url
    img.decode().catch(() => {})
    loaded.push(img)
  }
}

export function preloadImages() {
  if (document.readyState === 'complete') loadAll()
  else window.addEventListener('load', loadAll, { once: true })
}