import Link from 'next/link'

interface FooterSectionProps {
  logo: string
  companyName: string
  phone: string
  email: string
  address: string
  copyright: string
  socialLinks: Record<string, string>
}

export function FooterSection({
  logo,
  companyName,
  phone,
  email,
  address,
  copyright,
  socialLinks = {},
}: FooterSectionProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-slate-950 text-gray-300 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              {logo && <span className="text-3xl">{logo}</span>}
              <div>
                <p className="text-sm text-blue-400 font-semibold">LAW OFFICE</p>
                <p className="text-white font-bold text-lg">{companyName}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Expert criminal defense for federal and international cases. Available 24/7.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm mb-1">Phone</p>
                <a
                  href={`tel:${phone}`}
                  className="text-white hover:text-blue-400 transition-colors font-semibold"
                >
                  {phone}
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="text-white hover:text-blue-400 transition-colors break-all"
                >
                  {email}
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Address</p>
                <p className="text-white text-sm">{address}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <div className="space-y-3">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Practice Areas
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                About Attorney
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                FAQ
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-lg mb-6">Follow Us</h4>
            <div className="flex items-center gap-4">
              {Object.entries(socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-blue-400 hover:bg-blue-600/40 hover:text-blue-300 transition-all duration-300"
                  title={platform}
                >
                  <span className="text-lg">
                    {platform === 'facebook' && '📘'}
                    {platform === 'linkedin' && '💼'}
                    {platform === 'twitter' && '𝕏'}
                    {platform === 'instagram' && '📷'}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>{copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
