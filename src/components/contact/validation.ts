export type FormValues = {
  firstName: string
  lastName: string
  email: string
  organization: string
  subject: string
  message: string
  consent: boolean
}

export type FieldName = keyof FormValues | 'category'

export type FormErrors = Partial<Record<FieldName, string>>

export const emptyFormValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  organization: '',
  subject: '',
  message: '',
  consent: false,
}

export const fieldOrder: FieldName[] = [
  'firstName',
  'email',
  'category',
  'subject',
  'message',
  'consent',
]

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(values: FormValues, categoryId: string | null): FormErrors {
  const errors: FormErrors = {}

  if (!values.firstName.trim()) {
    errors.firstName = 'Please enter your first name.'
  }

  const email = values.email.trim()
  if (!email) {
    errors.email = 'Please enter your email address.'
  } else if (!emailPattern.test(email)) {
    errors.email = 'Enter a valid email address, like name@example.com.'
  }

  if (!categoryId) {
    errors.category = 'Please choose an inquiry category.'
  }

  if (!values.subject.trim()) {
    errors.subject = 'Please add a short subject.'
  }

  const message = values.message.trim()
  if (!message) {
    errors.message = 'Please write a message.'
  } else if (message.length < 10) {
    errors.message = 'Tell us a little more, at least 10 characters.'
  }

  if (!values.consent) {
    errors.consent = 'Please agree so we can respond to your inquiry.'
  }

  return errors
}