import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Ambassadors", href: "/ambassadors" },
  { label: "FAQ", href: "/#faq" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-[#F5F5F5] sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] flex items-center justify-between h-[75px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="/logo.png" alt="PituPi Logo" className="w-[88px] h-[23px]" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            link.href.startsWith("/#") ? (
              <a
                key={link.label}
                href={link.href}
                className="text-[#111111] text-base font-medium hover:text-pitupu-purple-500 transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="text-[#111111] text-base font-medium hover:text-pitupu-purple-500 transition-colors"
              >
                {link.label}
              </Link>
            )
          ))}

          <a
            href="#"
            className="bg-pitupi-gold-500 text-violet-800 font-medium text-base h-[48px] px-6 rounded-[12px] flex items-center gap-2 hover:brightness-105 transition-all shadow-sm"
          >
            <MessageCircle size={18} />
            <span>Message PituPi</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-violet-800 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#F5F5F5] border-t border-gray-200 px-6 pb-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            link.href.startsWith("/#") ? (
              <a
                key={link.label}
                href={link.href}
                className="text-[#111111] text-base font-medium py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="text-[#111111] text-base font-medium py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          ))}
          <a
            href="#"
            className="bg-pitupi-gold-500 text-violet-800 font-semibold text-base h-[48px] px-6 rounded-[12px] flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            <span>Message PituPi</span>
          </a>
        </div>
      )}
    </nav>
  );
}
