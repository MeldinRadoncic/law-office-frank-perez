export interface ContactFormProps {
  title?: string
  subtitle?: string
  showPhone?: boolean
  onSuccess?: () => void
}

export interface FormData {
  full_name: string
  email: string
  phone?: string
  message: string
}

export interface FormErrors {
  full_name?: string
  email?: string
  phone?: string
  message?: string
  submit?: string
}
