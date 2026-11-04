import { useEffect, useRef } from 'react'
import type { ContactMessage } from '../../api/contact'

type ContactSuccessProps = {
  message: ContactMessage
  categoryLabel: string
  onReset: () => void
}

export function ContactSuccess({ message, categoryLabel, onReset }: ContactSuccessProps) {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    headingRef.current?.focus()
  }, [])

  return (
    <section
      aria-labelledby="contact-success-heading"
      className="flex flex-col gap-6 rounded-3xl bg-surface p-6 sm:p-9"
    >
      <span
      aria-hidden="true"
      className="flex size-13 items-center justify-center rounded-full bg-tint-green text-google-green ring-1 ring-inset ring-google-green/40"
      >
        <svg viewBox="0 0 24 24" fill="none" className="size-6">
          <path
            d="m5 12.5 4.5 4.5L19 7.5"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <div className="flex flex-col gap-3">
        <h2
          id="contact-success-heading"
          ref={headingRef}
          tabIndex={-1}
          className="text-[30px] font-bold leading-[34px] focus:outline-none"
        >
          Thanks for saying hello, {message.firstName}.
        </h2>
        <p className="text-base leading-[25px] text-muted">Here’s a summary of what you sent.</p>
      </div>

      <dl className="flex flex-col gap-4 rounded-2xl bg-white p-5">
        <div className="flex flex-col gap-1">
          <dt className="text-[13px] leading-4 text-muted">Category</dt>
          <dd className="text-base leading-6">{categoryLabel}</dd>
        </div>
        <div className="flex flex-col gap-1">
          <dt className="text-[13px] leading-4 text-muted">Subject</dt>
          <dd className="break-words text-base leading-6">{message.subject}</dd>
        </div>
        <div className="flex flex-col gap-1">
          <dt className="text-[13px] leading-4 text-muted">Reply to</dt>
          <dd className="break-words text-base leading-6">{message.email}</dd>
        </div>
      </dl>

      <button
        type="button"
        onClick={onReset}
        className="inline-flex h-13 items-center justify-center self-start rounded-lg border border-line bg-white px-6 font-medium text-google-blue-dark transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-google-blue"
      >
        Send another message
      </button>
    </section>
  )
}