// Common fake/disposable email domains to block
const FAKE_EMAIL_DOMAINS = new Set([
  'tempmail.com',
  'temp-mail.org',
  '10minutemail.com',
  'guerrillamail.com',
  'mailinator.com',
  'sharklasers.com',
  'yopmail.com',
  'trashmail.com',
  'throwaway.email',
  'fakeinbox.com',
  'temp.mail',
  'guerrillamail.info',
  'spam4.me',
  'grr.la',
  'pokemail.net',
  'maildrop.cc',
  'mailnesia.com',
])

export function validateEmail(email: string): { valid: boolean; error?: string } {
  const trimmed = email.trim()

  if (!trimmed) {
    return { valid: false, error: 'Email is required' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(trimmed)) {
    return { valid: false, error: 'Invalid email address' }
  }

  const domain = trimmed.split('@')[1].toLowerCase()
  if (FAKE_EMAIL_DOMAINS.has(domain)) {
    return { valid: false, error: 'Disposable email addresses are not allowed' }
  }

  return { valid: true }
}

export function validateFullName(name: string): { valid: boolean; error?: string } {
  const trimmed = name.trim()

  if (!trimmed) {
    return { valid: false, error: 'Full name is required' }
  }

  if (trimmed.length < 2) {
    return { valid: false, error: 'Full name must be at least 2 characters' }
  }

  if (trimmed.length > 100) {
    return { valid: false, error: 'Full name must be less than 100 characters' }
  }

  return { valid: true }
}

export function validatePhone(phone: string): { valid: boolean; error?: string } {
  if (!phone || phone.trim() === '') {
    return { valid: true }
  }

  const trimmed = phone.trim()
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
  if (!phoneRegex.test(trimmed)) {
    return { valid: false, error: 'Invalid phone number format' }
  }

  return { valid: true }
}

export function validateMessage(message: string): { valid: boolean; error?: string } {
  const trimmed = message.trim()

  if (!trimmed) {
    return { valid: false, error: 'Message is required' }
  }

  if (trimmed.length < 10) {
    return { valid: false, error: 'Message must be at least 10 characters' }
  }

  if (trimmed.length > 5000) {
    return { valid: false, error: 'Message must be less than 5000 characters' }
  }

  return { valid: true }
}

export function validateContactForm(data: {
  full_name: string
  email: string
  phone?: string
  message: string
}): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {}

  const nameValidation = validateFullName(data.full_name)
  if (!nameValidation.valid && nameValidation.error) {
    errors.full_name = nameValidation.error
  }

  const emailValidation = validateEmail(data.email)
  if (!emailValidation.valid && emailValidation.error) {
    errors.email = emailValidation.error
  }

  if (data.phone) {
    const phoneValidation = validatePhone(data.phone)
    if (!phoneValidation.valid && phoneValidation.error) {
      errors.phone = phoneValidation.error
    }
  }

  const messageValidation = validateMessage(data.message)
  if (!messageValidation.valid && messageValidation.error) {
    errors.message = messageValidation.error
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}
