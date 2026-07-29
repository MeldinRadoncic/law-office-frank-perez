'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

export interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  width?: string
}

export function Drawer({
  isOpen,
  onClose,
  children,
  width = 'w-3/5',
}: DrawerProps) {
  // Close drawer on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={`fixed right-0 top-0 ${width} h-screen bg-slate-950 z-50 md:hidden overflow-y-auto`}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Drawer
