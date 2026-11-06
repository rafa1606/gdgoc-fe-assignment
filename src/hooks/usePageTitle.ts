import { useEffect } from 'react'

const siteName = 'Google Developer Groups on Campus UGM'
const shortName = 'GDGoC UGM'

// Tanpa argumen dipakai Home: judulnya nama situs lengkap
export function usePageTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} | ${shortName}` : siteName
  }, [page])
}