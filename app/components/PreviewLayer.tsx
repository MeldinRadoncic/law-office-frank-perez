'use client'

import { useEffect, useState } from 'react'

export function PreviewLayer() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Setup overlay protection with aggressive monitoring
    const setupProtection = () => {
      // Disable scrolling on entire page
      const applyLockdown = () => {
        document.documentElement.style.overflow = '!important hidden'
        document.documentElement.style.height = '100%'
        document.documentElement.style.width = '100%'
        document.documentElement.style.margin = '0'
        document.documentElement.style.padding = '0'
        document.documentElement.style.position = 'fixed'

        document.body.style.overflow = '!important hidden'
        document.body.style.height = '100%'
        document.body.style.width = '100%'
        document.body.style.margin = '0'
        document.body.style.padding = '0'
        document.body.style.position = 'fixed'
        document.body.style.top = '0'
        document.body.style.left = '0'
      }

      applyLockdown()

      // MutationObserver to detect any DOM changes
      const observer = new MutationObserver(() => {
        const layer = document.getElementById('preview-overlay-layer')
        if (!layer) {
          location.reload()
        }
        applyLockdown()
      })

      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class'],
      })

      // Check every 50ms for tampering
      const protectionInterval = setInterval(() => {
        const layer = document.getElementById('preview-overlay-layer')
        if (!layer || layer.style.display === 'none' || layer.style.visibility === 'hidden') {
          location.reload()
        }

        // Reapply lockdown
        applyLockdown()

        // Ensure z-index is highest
        if (layer) {
          layer.style.zIndex = '2147483647'
        }
      }, 50)

      // Prevent scrolling with wheel
      const preventWheel = (e: WheelEvent) => {
        e.preventDefault()
        e.stopPropagation()
        e.stopImmediatePropagation()
        return false
      }

      // Prevent scrolling with touch
      const preventTouch = (e: TouchEvent) => {
        e.preventDefault()
        e.stopPropagation()
        e.stopImmediatePropagation()
        return false
      }

      // Prevent keyboard scrolling
      const preventKeyboard = (e: KeyboardEvent) => {
        // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
        if (
          e.key === 'F12' ||
          (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))
        ) {
          e.preventDefault()
          e.stopPropagation()
          e.stopImmediatePropagation()
          return false
        }

        // Arrow keys, page up/down, spacebar
        if (
          e.key === 'ArrowUp' ||
          e.key === 'ArrowDown' ||
          e.key === 'PageUp' ||
          e.key === 'PageDown' ||
          e.key === ' '
        ) {
          e.preventDefault()
          e.stopPropagation()
          e.stopImmediatePropagation()
          return false
        }
      }

      // Prevent right-click context menu
      const preventContextMenu = (e: MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        e.stopImmediatePropagation()
        return false
      }

      document.addEventListener('wheel', preventWheel, { passive: false, capture: true })
      document.addEventListener('touchmove', preventTouch, { passive: false, capture: true })
      document.addEventListener('keydown', preventKeyboard, { capture: true })
      document.addEventListener('contextmenu', preventContextMenu, { capture: true })
      window.addEventListener('scroll', () => {
        window.scrollTo(0, 0)
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      }, { passive: false, capture: true })

      return () => {
        clearInterval(protectionInterval)
        observer.disconnect()
        document.removeEventListener('wheel', preventWheel, true)
        document.removeEventListener('touchmove', preventTouch, true)
        document.removeEventListener('keydown', preventKeyboard, true)
        document.removeEventListener('contextmenu', preventContextMenu, true)
        window.removeEventListener('scroll', () => {})
      }
    }

    return setupProtection()
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div
      id="preview-overlay-layer"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2147483647,
        pointerEvents: 'auto',
        margin: 0,
        padding: 0,
      }}
    >
      {/* Inner content box */}
      <div
        style={{
          textAlign: 'center',
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '32px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          maxWidth: '448px',
          pointerEvents: 'auto',
        }}
      >
        <h1 style={{
          fontSize: '30px',
          fontWeight: 'bold',
          color: '#1e3a8a',
          marginBottom: '16px',
        }}>
          Preview Deactivated
        </h1>

        <p style={{
          fontSize: '20px',
          color: '#374151',
          marginBottom: '24px',
        }}>
          Preview is not active. Please contact App Wizard.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '18px' }}>
          <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '16px' }}>
            <p style={{ color: '#4b5563', marginBottom: '8px' }}>Email:</p>
            <a
              href="mailto:contact@appwizardpro.co"
              style={{
                color: '#d97706',
                fontWeight: '600',
                textDecoration: 'none',
                wordBreak: 'break-all',
              }}
            >
              contact@appwizardpro.co
            </a>
          </div>

          <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '16px' }}>
            <p style={{ color: '#4b5563', marginBottom: '8px' }}>Phone:</p>
            <a
              href="tel:+16462474321"
              style={{
                color: '#d97706',
                fontWeight: '600',
                textDecoration: 'none',
              }}
            >
              +1 (646) 247-4321
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
