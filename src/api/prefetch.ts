import { prefetch } from '../hooks/useFetch'
import {
  getAllFaqs,
  getFormats,
  getInquiryCategories,
  getJourney,
  getRoles,
  getTracks,
  getValues,
} from './endpoints'

// Ambil data halaman lain di belakang layar setelah halaman selesai dimuat
export function prefetchPageData() {
  const run = () => {
    prefetch(getTracks)
    prefetch(getFormats)
    prefetch(getJourney)
    prefetch(getValues)
    prefetch(getRoles)
    prefetch(getInquiryCategories)
    prefetch(getAllFaqs)
  }

  if (document.readyState === 'complete') run()
  else window.addEventListener('load', run, { once: true })
}