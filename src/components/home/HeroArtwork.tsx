import heroArtwork from '../../assets/home-hero-artwork.webp'

// Posisi semua elemen memakai persen dari kotak 620 x 530 di Figma, dan ukuran teks
// memakai cqw (persen lebar kotak ini) supaya label dan sticker mengecil bersama gambarnya
export function HeroArtwork() {
  return (
    <div className="@container relative aspect-[620/530] w-full">
      {/* Gambar lebih lebar dari kotak karena menyertakan cahaya lembut di luar bingkai kaca */}
      <img
        src={heroArtwork}
        alt=""
        width={1351}
        height={1375}
        className="pointer-events-none absolute -left-[8.95%] top-0 h-auto w-[108.95%] max-w-none"
      />

      <p className="absolute right-[13.4%] top-[85.85%] flex items-center gap-[0.667em] whitespace-nowrap rounded-full bg-white px-[1.333em] py-[0.833em] text-[max(10px,1.935cqw)] leading-tight text-muted">
        <span aria-hidden="true" className="size-[0.667em] rounded-full bg-google-green" />
        <span>
          Built on <strong className="font-bold">curiosity.</strong> Rooted in{' '}
          <strong className="font-bold">UGM.</strong>
        </span>
      </p>

      <p className="absolute left-[24.2%] top-[69.65%] -translate-x-1/2 -translate-y-1/2 -rotate-7 whitespace-nowrap rounded-[0.35em] border border-line bg-white px-[0.87em] py-[0.61em] text-[max(14px,3.71cqw)] font-bold leading-[1.17] text-ink">
        hello, possibilities_
      </p>
    </div>
  )
}