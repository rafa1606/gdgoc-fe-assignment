import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import type { FetchState } from '../../hooks/useFetch'
import type { InquiryCategory } from '../../types/api'
import { ArrowRightIcon } from '../ui/ArrowRightIcon'
import { ChevronDownIcon } from '../ui/ChevronDownIcon'
import { FormField } from './FormField'
import { controlClass } from './formStyles'

type ContactFormProps = {
  categoriesState: FetchState<InquiryCategory[]>
  categoryId: string | null
  onCategoryChange: (id: string) => void
}

type FormValues = {
  firstName: string
  lastName: string
  email: string
  organization: string
  subject: string
  message: string
  consent: boolean
}

const emptyValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  organization: '',
  subject: '',
  message: '',
  consent: false,
}

function categoryPlaceholder(state: FetchState<InquiryCategory[]>) {
  if (state.status === 'loading') return 'Loading categories...'
  if (state.status === 'error') return 'Categories unavailable'
  return 'No categories available'
}

export function ContactForm({ categoriesState, categoryId, onCategoryChange }: ContactFormProps) {
  const [values, setValues] = useState<FormValues>(emptyValues)
  const categories = categoriesState.status === 'success' ? categoriesState.data : []

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  function handleConsentChange(event: ChangeEvent<HTMLInputElement>) {
    setValues((current) => ({ ...current, consent: event.target.checked }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <form
      noValidate
      aria-labelledby="contact-form-heading"
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-3xl bg-surface p-6 sm:p-9"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 id="contact-form-heading" className="text-[30px] font-bold leading-[34px]">
          Send us a message
        </h2>
        <span aria-hidden="true" className="text-[30px] leading-[34px] text-google-blue-dark">
          ↗
        </span>
      </div>

      <p className="text-[13px] leading-4 text-muted">Fields marked * are required.</p>

      <div className="grid gap-6 sm:grid-cols-2 sm:gap-5">
        <FormField id="firstName" label="First name" required>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            placeholder="Your first name"
            value={values.firstName}
            onChange={handleChange}
            className={`${controlClass} h-13.5`}
          />
        </FormField>
        <FormField id="lastName" label="Last name">
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="Your last name"
            value={values.lastName}
            onChange={handleChange}
            className={`${controlClass} h-13.5`}
          />
        </FormField>
      </div>

      <FormField id="email" label="Email address" required>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Where we can reply to you"
          value={values.email}
          onChange={handleChange}
          className={`${controlClass} h-13.5`}
        />
      </FormField>

      <FormField id="organization" label="University / organization">
        <input
          id="organization"
          name="organization"
          type="text"
          autoComplete="organization"
          placeholder="Where you study or work (optional)"
          value={values.organization}
          onChange={handleChange}
          className={`${controlClass} h-13.5`}
        />
      </FormField>

      <FormField id="category" label="Inquiry category" required>
        <div className="relative">
          <select
            id="category"
            name="category"
            required
            disabled={categories.length === 0}
            value={categoryId ?? ''}
            onChange={(event) => onCategoryChange(event.target.value)}
            className={`${controlClass} h-13.5 appearance-none pr-12 text-muted`}
          >
            {categories.length === 0 && <option value="">{categoryPlaceholder(categoriesState)}</option>}
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-google-blue-dark" />
        </div>
      </FormField>

      <FormField id="subject" label="Subject" required>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="A short introduction to your question"
          value={values.subject}
          onChange={handleChange}
          className={`${controlClass} h-13.5`}
        />
      </FormField>

      <FormField id="message" label="Your message" required>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Tell us a little about your question or idea…"
          value={values.message}
          onChange={handleChange}
          className={`${controlClass} h-36.5 resize-y py-4`}
        />
      </FormField>

      <label className="flex items-start gap-3">
        <span className="relative size-6 shrink-0">
          <input
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={handleConsentChange}
            className="peer size-6 cursor-pointer appearance-none rounded-md border border-muted bg-white transition-colors checked:border-google-blue checked:bg-google-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-google-blue"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            className="pointer-events-none absolute inset-0 m-auto size-4 text-white opacity-0 peer-checked:opacity-100"
          >
            <path
              d="m3.5 8.5 3 3 6-6.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="text-sm leading-5 text-muted">
          I agree that the information I share can be used to respond to this inquiry.
        </span>
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex h-13 items-center justify-center gap-4 self-start rounded-lg bg-google-blue px-6 font-medium text-white transition-colors hover:bg-google-blue-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-google-blue"
        >
          Send message
          <ArrowRightIcon />
        </button>
        <p className="max-w-[230px] text-[13px] leading-[18px] text-muted">
          Please don’t include passwords or sensitive personal information.
        </p>
      </div>
    </form>
  )
}