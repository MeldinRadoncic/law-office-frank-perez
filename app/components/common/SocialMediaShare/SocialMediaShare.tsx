'use client'

import { useState } from 'react'
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  EmailShareButton,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  EmailIcon,
} from 'react-share'
import { Copy, Check } from 'lucide-react'
import { Text, Heading } from '@/app/components/common'
import { paragraph } from '@/lib/design-tokens'

interface SocialMediaShareProps {
  url: string
  title: string
  description?: string
  variant?: 'horizontal' | 'vertical'
}

export function SocialMediaShare({
  url,
  title,
  description = '',
  variant = 'horizontal',
}: SocialMediaShareProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const shareButtonClass = variant === 'horizontal' ? 'flex-row' : 'flex-col'
  const containerClass = variant === 'horizontal' ? 'space-y-3' : 'space-y-4'

  return (
    <div className={containerClass}>
      {/* Header */}
      <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
        <Heading level="h4" size="sm" className="text-amber-600 uppercase tracking-wider">
          Share This Article
        </Heading>
      </div>

      {/* Social Share Buttons */}
      <div className={`flex ${shareButtonClass} flex-wrap gap-3 justify-center md:justify-start`}>
        {/* X (Twitter) */}
        <div className="group relative">
          <TwitterShareButton
            url={url}
            title={title}
            className="transition-transform duration-300 hover:scale-110"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md hover:shadow-lg"
              style={{ backgroundColor: '#000000' }}
              title="Share on X"
            >
              𝕏
            </div>
          </TwitterShareButton>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
            Share on X
          </div>
        </div>

        {/* Facebook */}
        <div className="group relative">
          <FacebookShareButton
            url={url}
            className="transition-transform duration-300 hover:scale-110"
          >
            <FacebookIcon
              size={40}
              round
              bgStyle={{ fill: '#1877F2' }}
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
              }}
            />
          </FacebookShareButton>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
            Share on Facebook
          </div>
        </div>

        {/* LinkedIn */}
        <div className="group relative">
          <LinkedinShareButton
            url={url}
            title={title}
            summary={description}
            className="transition-transform duration-300 hover:scale-110"
          >
            <LinkedinIcon
              size={40}
              round
              bgStyle={{ fill: '#0A66C2' }}
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
              }}
            />
          </LinkedinShareButton>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
            Share on LinkedIn
          </div>
        </div>

        {/* Email */}
        <div className="group relative">
          <EmailShareButton
            url={url}
            subject={title}
            body={description}
            className="transition-transform duration-300 hover:scale-110"
          >
            <EmailIcon
              size={40}
              round
              bgStyle={{ fill: '#EA4335' }}
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
              }}
            />
          </EmailShareButton>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
            Share via Email
          </div>
        </div>

        {/* Copy Link */}
        <div className="group relative">
          <button
            onClick={handleCopyUrl}
            className="transition-transform duration-300 hover:scale-110"
            title="Copy URL to clipboard"
            aria-label="Copy URL to clipboard"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md hover:shadow-lg transition-all duration-300"
              style={{
                backgroundColor: copied ? '#22c55e' : '#d97706',
              }}
            >
              {copied ? (
                <Check size={20} className="animate-pulse" />
              ) : (
                <Copy size={20} />
              )}
            </div>
          </button>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
            {copied ? 'Copied!' : 'Copy Link'}
          </div>
        </div>
      </div>

      {/* Helper text */}
      <Text className={`${paragraph.light.base} text-xs text-gray-600 mt-4 text-center md:text-left`}>
        Share this article with your network
      </Text>
    </div>
  )
}

export default SocialMediaShare
