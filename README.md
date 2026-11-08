# Google Developer Groups on Campus UGM

Ini website komunitas Google Developer Groups on Campus Universitas Gadjah Mada yang saya buat untuk technical assignment Hacker Frontend, Open Recruitment GDGoC UGM 2026/2027. Ada empat halaman (Home, About, Overview, Contact) yang saya buat dari desain Figma pakai React dan Tailwind CSS, dengan data dari REST API publik.

## Link penting

| | |
|---|---|
| Live demo | https://gdgoc-fe-assignment.vercel.app |
| Video presentasi | [Link Google Drive](https://drive.google.com/drive/folders/1uHdF9AkLwzstOkWy_ReQGl48r_ddR04V?usp=drive_link), video langsung di [YouTube](https://youtu.be/1CoNVQEgTuA) |
| Repository | https://github.com/rafa1606/gdgoc-fe-assignment |
| API | https://gdgoc-ugm-api.vercel.app/api |

## Screenshots

Desktop (1440 px)

| Home | About |
|---|---|
| <img src="docs/screenshots/home-desktop.png" alt="Halaman Home di desktop" width="480"> | <img src="docs/screenshots/about-desktop.png" alt="Halaman About di desktop" width="480"> |
| Overview | Contact |
| <img src="docs/screenshots/overview-desktop.png" alt="Halaman Overview di desktop" width="480"> | <img src="docs/screenshots/contact-desktop.png" alt="Halaman Contact di desktop" width="480"> |

Mobile (393 px)

| Home | Overview |
|---|---|
| <img src="docs/screenshots/home-mobile.png" alt="Halaman Home di mobile" width="240"> | <img src="docs/screenshots/overview-mobile.png" alt="Halaman Overview di mobile" width="240"> |

State lain

| FAQ dengan filter | Error (Try again) |
|---|---|
| <img src="docs/screenshots/faq-filter-desktop.png" alt="FAQ dengan filter kategori" width="480"> | <img src="docs/screenshots/error-state-desktop.png" alt="State error dengan tombol Try again" width="480"> |
| 404 | |
| <img src="docs/screenshots/404-desktop.png" alt="Halaman 404" width="480"> | |

## Fitur

- Empat halaman responsif, dari layar 320 px sampai desktop lebar.
- Data diambil dari API, lengkap dengan state loading, error (ada tombol coba lagi), dan kosong.
- Error boundary untuk error yang muncul saat render.
- FAQ di halaman Contact bisa difilter per kategori. Filternya tersimpan di URL, jadi tidak hilang setelah reload dan bisa dibagikan lewat link.
- Form kontak dengan validasi dan pesan sukses. Pengirimannya simulasi karena API cuma punya endpoint GET.
- Tombol di kartu format (Overview) membuka Contact dengan kategori yang sudah terpilih.
- Menu mobile yang buka tutupnya dianimasikan.
- Gambar dan data halaman lain dimuat di belakang layar. Judul tab beda di tiap halaman, dan ada halaman 404.
- Animasi mengikuti pengaturan reduced motion di perangkat