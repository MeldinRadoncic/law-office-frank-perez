'use client'

import { useState, FormEvent, ChangeEvent, useEffect } from 'react'
import { Button, Heading, Text, Loading } from '@/app/components/common'
import { colors, spacing, paragraph, radius, transitions } from '@/lib/design-tokens'
import { validateContactForm, validateEmail, validateFullName, validateMessage, validatePhone } from '@/lib/validation'
import type { ContactFormProps, FormData, FormErrors } from './ContactForm.types'

export function ContactForm({
  title = 'Get In Touch',
  subtitle = 'Send us a message and we\'ll respond within 24-48 hours',
  showPhone = true,
  onSuccess,
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    full_name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [focused, setFocused] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const validateForm = (): boolean => {
    const validation = validateContactForm(formData)
    setErrors(validation.errors)
    return validation.valid
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))

    if (touched[name]) {
      validateField(name, value)
    }
  }

  const handleBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setTouched(prev => ({
      ...prev,
      [name]: true,
    }))
    validateField(name, value)
  }

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors }

    switch (name) {
      case 'full_name': {
        const result = validateFullName(value)
        if (!result.valid && result.error) {
          newErrors.full_name = result.error
        } else {
          delete newErrors.full_name
        }
        break
      }
      case 'email': {
        const result = validateEmail(value)
        if (!result.valid && result.error) {
          newErrors.email = result.error
        } else {
          delete newErrors.email
        }
        break
      }
      case 'phone': {
        if (value.trim()) {
          const result = validatePhone(value)
          if (!result.valid && result.error) {
            newErrors.phone = result.error
          } else {
            delete newErrors.phone
          }
        } else {
          delete newErrors.phone
        }
        break
      }
      case 'message': {
        const result = validateMessage(value)
        if (!result.valid && result.error) {
          newErrors.message = result.error
        } else {
          delete newErrors.message
        }
        break
      }
      default:
        break
    }

    setErrors(newErrors)
  }

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false)
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          message: '',
        })
        setTouched({})
        setErrors({})
        setSubmitError(null)
      }, 60000)

      return () => clearTimeout(timer)
    }
  }, [showSuccess])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        onSuccess?.()
        setShowSuccess(true)
        setIsLoading(false)
      } else {
        const error = await response.json()
        setSubmitError(error.error || 'Failed to send message')
        setIsLoading(false)
      }
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.')
      setIsLoading(false)
    }
  }

  const handleRetry = () => {
    setSubmitError(null)
  }

  const isFormValid = (): boolean => {
    const validation = validateContactForm(formData)
    return validation.valid && Object.keys(errors).length === 0
  }

  const hasErrors = Object.keys(errors).length > 0
  const isButtonDisabled = !isFormValid() || isLoading

  return (
    <div className={`${colors.background.white} ${spacing.padding.lg} ${radius.lg} border-2 border-gray-200 text-center md:text-left relative`}>
      {/* Success State */}
      {showSuccess && (
        <div className={`flex flex-col items-center justify-center ${spacing.gap.md} py-16`}>
          <div className={`text-6xl ${colors.success}`}>✓</div>
          <Heading level="h3" size="lg" color="primary" className="text-center">
            Thank You!
          </Heading>
          <Text className={`${paragraph.light.base} text-center ${colors.neutral[600]} max-w-md`}>
            Your message has been received. We'll get back to you as soon as possible.
          </Text>
        </div>
      )}


      {/* Header */}
      {!showSuccess && (
        <>
          <div className="mb-8">
            <Heading
              level="h2"
              size="2xl"
              color="primary"
              className="mb-2 text-center md:text-left"
            >
              {title}
            </Heading>
            <Text className={`${paragraph.light.base} text-center md:text-left`}>
              {subtitle}
            </Text>
          </div>

          {/* Form with Loading Overlay */}
          <div className="relative" style={{ opacity: isLoading ? 0.5 : 1, pointerEvents: isLoading ? 'none' : 'auto' }}>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-40">
                <Loading size="md" message="Sending your message..." />
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="full_name" className="block font-semibold text-gray-900 mb-2 text-center md:text-left">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            onBlur={(e) => {
              setFocused(null)
              handleBlur(e)
            }}
            onFocus={() => setFocused('full_name')}
            className="w-full px-4 py-3 border-2 bg-white text-black font-bold rounded-lg outline-none placeholder-gray-600 transition-all duration-200"
            style={{
              borderWidth: '2px',
              borderColor: focused === 'full_name' ? '#d97706' : errors.full_name ? '#dc2626' : '#6b7280',
              boxShadow: focused === 'full_name' ? '0 0 0 3px rgba(217, 119, 6, 0.15)' : 'none',
            }}
            placeholder="Your full name"
            aria-invalid={!!errors.full_name}
            aria-describedby={errors.full_name ? 'full_name-error' : undefined}
          />
          {errors.full_name && (
            <p id="full_name-error" className="text-red-600 text-sm mt-1">{errors.full_name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-semibold text-gray-900 mb-2">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={(e) => {
              setFocused(null)
              handleBlur(e)
            }}
            onFocus={() => setFocused('email')}
            className="w-full px-4 py-3 border-2 bg-white text-black font-bold rounded-lg outline-none placeholder-gray-600 transition-all duration-200"
            style={{
              borderWidth: '2px',
              borderColor: focused === 'email' ? '#d97706' : errors.email ? '#dc2626' : '#6b7280',
              boxShadow: focused === 'email' ? '0 0 0 3px rgba(217, 119, 6, 0.15)' : 'none',
            }}
            placeholder="your.email@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone (Optional) */}
        {showPhone && (
          <div>
            <label htmlFor="phone" className="block font-semibold text-gray-900 mb-2">
              Phone <span className="text-gray-500 text-sm">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={() => setFocused(null)}
              onFocus={() => setFocused('phone')}
              className="w-full px-4 py-3 border-2 bg-white text-black font-bold rounded-lg outline-none placeholder-gray-600 transition-all duration-200"
              style={{
                borderWidth: '2px',
                borderColor: focused === 'phone' ? '#d97706' : '#6b7280',
                boxShadow: focused === 'phone' ? '0 0 0 3px rgba(217, 119, 6, 0.15)' : 'none',
              }}
              placeholder="(646) 492-9700"
            />
          </div>
        )}

        {/* Message */}
        <div>
          <label htmlFor="message" className="block font-semibold text-gray-900 mb-2">
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={(e) => {
              setFocused(null)
              handleBlur(e)
            }}
            onFocus={() => setFocused('message')}
            rows={6}
            className="w-full px-4 py-3 border-2 bg-white text-black font-bold rounded-lg outline-none placeholder-gray-600 transition-all duration-200 resize-none"
            style={{
              borderWidth: '2px',
              borderColor: focused === 'message' ? '#d97706' : errors.message ? '#dc2626' : '#6b7280',
              boxShadow: focused === 'message' ? '0 0 0 3px rgba(217, 119, 6, 0.15)' : 'none',
            }}
            placeholder="Tell us about your legal needs..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-red-600 text-sm mt-1">{errors.message}</p>
          )}
        </div>

              {/* Error Message */}
              {submitError && !showSuccess && (
                <div className={`${spacing.padding.md} bg-red-50 border-2 border-red-600 rounded-lg mb-6`}>
                  <div className={`flex items-start ${spacing.gap.sm}`}>
                    <span className={`text-2xl ${colors.error}`}>⚠</span>
                    <div>
                      <p className={`${colors.error} font-semibold`}>{submitError}</p>
                      <p className={`${colors.error} text-sm mt-2`}>Your message and information have been preserved.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit or Try Again Button */}
              {submitError ? (
                <Button
                  type="button"
                  onClick={handleRetry}
                  variant="accent"
                  size="lg"
                  className="w-full"
                >
                  Try Again
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  disabled={isButtonDisabled || isLoading}
                  className="w-full"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              )}

              <p className="text-sm text-gray-600 text-center">
                We respect your privacy. Your information will never be shared.
              </p>
            </form>
          </div>
        </>
      )}
    </div>
  )
}

export default ContactForm
