import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { sendContactMessage } from '../../api/contact'
import type { ContactMessage } from '../../api/contact'
import type { FetchState } from '../../hooks/useFetch'
import type { InquiryCategory } from '../../types/api'
import { ArrowRightIcon } from '../ui/ArrowRightIcon'
import { ChevronDownIcon } from '../ui/ChevronDownIcon'
import { ContactSuccess } from './ContactSuccess'
import { FormField } from './FormField'
import { controlClass } from './formStyles'
import { emptyFormValues, fieldOrder, validateContactForm } from './validation'
import type { FormValues } from './validation'

type ContactFormProps = {
  categoriesState: FetchState<InquiryCategory[]>
  categoryId: string | null
  onCategoryChange: (id: string) => void
}

type TextFieldName = 'firstName' | 'lastName' | 'email' | 'organization' | 'subject' | 'message'

function categoryPlaceholder(state: FetchState<InquiryCategory[]>) {
  if (state.status === 'loading') return 'Loading categories...'
  if (state.status === 'error') return 'Categories unavailable'
  return 'No categories available'
}

export function ContactForm({ categoriesState, categoryId, onCategoryChange }: ContactFormProps) {
  const [values, setValues] = useState<FormValues>(emptyFormValues)
  const [showErrors, setShowErrors] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [sent, setSent] = useState<ContactMessage | null>(null)

  const categories = categoriesState.status === 'success' ? categoriesState.data : []
  const errors = showErrors ? validateContactForm(values, categoryId) : {}

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  function handleConsentChange(event: ChangeEvent<HTMLInputElement>) {
    setValues((current) => ({ ...current, consent: event.target.checked }))
  }

  function textFieldProps(name: TextFieldName, sizeClass = 'h-13.5') {
    const error = errors[name]

    return {
      id: name,
      name,
      value: values[name],
      onChange: handleChange,
      'aria-invalid': error ? true : undefined,
      'aria-describedby': error ? `${name}-error` : undefined,
      className: `${controlClass(Boolean(error))} ${sizeClass}`,
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting) return

    const found = validateContactForm(values, categoryId)
    const firstInvalid = fieldOrder.find((name) => found[name])
    setShowErrors(true)
    setSubmitError('')

    if (firstInvalid || categoryId === null) {
      if (firstInvalid) {
        const field = event.currentTarget.elements.namedItem(firstInvalid)
        if (field instanceof HTMLElement) field.focus()
      }
      return
    }

    setSubmitting(true)
    try {
      const message = await sendContactMessage({
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        email: values.email.trim(),
        organization: values.organization.trim(),
        category: categoryId,
        subject: values.subject.trim(),
        message: values.message.trim(),
      })
      setSent(message)
    } catch {
      setSubmitError('We couldn’t send your message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  function handleReset() {
    setValues(emptyFormValues)
    setShowErrors(false)
    setSubmitError('')
    setSent(null)
  }

  if (sent) {
    const categoryLabel =
      categories.find((category) => category.id === sent.category)?.label ?? sent.category

    return <ContactSuccess message={sent} categoryLabel={categoryLabel} onReset={handleReset} />
  }

  return (
    <form
      noValidate
      aria-labelledby="contact-form-heading"
      aria-busy={submitting}
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
        <FormField id="firstName" label="First name" required error={errors.firstName}>
          <input
            type="text"
            autoComplete="given-name"
            required
            placeholder="Your first name"
            {...textFieldProps('firstName')}
          />
        </FormField>
        <FormField id="lastName" label="Last name">
          <input
            type="text"
            autoComplete="family-name"
            placeholder="Your last name"
            {...textFieldProps('lastName')}
          />
        </FormField>
      </div>

      <FormField id="email" label="Email address" required error={errors.email}>
        <input
          type="email"
          autoComplete="email"
          required
          placeholder="Where we can reply to you"
          {...textFieldProps('email')}
        />
      </FormField>

      <FormField id="organization" label="University / organization">
        <input
          type="text"
          autoComplete="organization"
          placeholder="Where you study or work (optional)"
          {...textFieldProps('organization')}
        />
      </FormField>

      <FormField id="category" label="Inquiry category" required error={errors.category}>
        <div className="relative">
          <select
            id="category"
            name="category"
            required
            disabled={categories.length === 0}
            value={categoryId ?? ''}
            onChange={(event) => onCategoryChange(event.target.value)}
            aria-invalid={errors.category ? true : undefined}
            aria-describedby={errors.category ? 'category-error' : undefined}
            className={`${controlClass(Boolean(errors.category))} select-modern h-13.5 appearance-none pr-12 text-muted`}
          >
            {categories.length === 0 && (
              <option value="">{categoryPlaceholder(categoriesState)}</option>
            )}
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
          <ChevronDownIcon className="select-chevron pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-google-blue-dark" />
        </div>
      </FormField>

      <FormField id="subject" label="Subject" required error={errors.subject}>
        <input
          type="text"
          required
          maxLength={100}
          placeholder="A short introduction to your question"
          {...textFieldProps('subject')}
        />
      </FormField>

      <FormField id="message" label="Your message" required error={errors.message}>
        <textarea
          required
          maxLength={1000}
          placeholder="Tell us a little about your question or idea…"
          {...textFieldProps('message', 'h-36.5 resize-y py-4')}
        />
      </FormField>

      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-3">
          <span className="relative size-6 shrink-0">
            <input
              id="consent"
              type="checkbox"
              name="consent"
              checked={values.consent}
              onChange={handleConsentChange}
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={errors.consent ? 'consent-error' : undefined}
              className={`peer size-6 cursor-pointer appearance-none rounded-md border bg-white transition-colors checked:border-google-blue checked:bg-google-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-google-blue ${
                errors.consent ? 'border-error' : 'border-muted'
              }`}
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
        {errors.consent && (
          <p id="consent-error" className="pl-9 text-[13px] leading-[18px] text-error">
            {errors.consent}
          </p>
        )}
      </div>

      {submitError && (
        <p role="alert" className="rounded-lg bg-tint-red px-4 py-3 text-sm leading-5 text-error">
          {submitError}
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-13 items-center justify-center gap-4 self-start rounded-lg bg-google-blue px-6 font-medium text-white transition-colors hover:bg-google-blue-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-google-blue disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? 'Sending...' : 'Send message'}
          {!submitting && <ArrowRightIcon />}
        </button>
        <p className="max-w-[230px] text-[13px] leading-[18px] text-muted">
          Please don’t include passwords or sensitive personal information.
        </p>
      </div>
    </form>
  )
}