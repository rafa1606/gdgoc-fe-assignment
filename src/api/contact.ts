export type ContactMessage = {
  firstName: string
  lastName: string
  email: string
  organization: string
  category: string
  subject: string
  message: string
}

// API publik hanya menyediakan endpoint GET, jadi tidak ada tujuan untuk mengirim pesan.
// Fungsi ini menggantikan request tersebut: menunggu sebentar, lalu mengembalikan
// pesan yang sama seperti respons server saat berhasil membuat data baru.
export async function sendContactMessage(message: ContactMessage): Promise<ContactMessage> {
  await new Promise((resolve) => setTimeout(resolve, 800))
  return message
}