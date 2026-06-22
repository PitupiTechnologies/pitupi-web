import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#F8F5FF]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-16">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 w-[275px] shrink-0">
            <Link to="/">
              <img src="/logo.png" alt="PituPi Logo" className="w-[88px] h-[23px]" />
            </Link>
            <p className="text-lg text-violet-500 leading-[1.45]">
              Accessibility, Effortless
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-10 lg:gap-6 w-full lg:w-auto">
            {/* Resources */}
            <div className="flex flex-col gap-4 lg:min-w-[140px]">
              <h4 className="text-sm font-semibold text-violet-500">
                Resources
              </h4>
              <div className="flex flex-col gap-1">
                <Link
                  to="/#features"
                  className="text-sm text-violet-500 hover:text-violet-800 transition-colors py-0.5"
                >
                  Features
                </Link>
                <Link
                  to="/#faq"
                  className="text-sm text-violet-500 hover:text-violet-800 transition-colors py-0.5"
                >
                  FAQ
                </Link>
                <Link
                  to="/#how-it-works"
                  className="text-sm text-violet-500 hover:text-violet-800 transition-colors py-0.5"
                >
                  How It Works
                </Link>
                <Link
                  to="/ambassadors"
                  className="text-sm text-violet-500 hover:text-violet-800 transition-colors py-0.5"
                >
                  Ambassadors
                </Link>
              </div>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4 lg:min-w-[140px]">
              <h4 className="text-sm font-semibold text-violet-500">Legal</h4>
              <div className="flex flex-col gap-1">
                <Link
                  to="/privacy"
                  className="text-sm text-violet-500 hover:text-violet-800 transition-colors py-0.5"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-sm text-violet-500 hover:text-violet-800 transition-colors py-0.5"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-violet-500">Socials</h4>
              <div className="flex gap-5">
                <a
                  href="#"
                  className="text-violet-500 hover:text-violet-800 transition-colors"
                  aria-label="Facebook"
                >
                  <Globe size={20} />
                </a>
                <a
                  href="#"
                  className="text-violet-500 hover:text-violet-800 transition-colors"
                  aria-label="Instagram"
                >
                  <Globe size={20} />
                </a>
                <a
                  href="#"
                  className="text-violet-500 hover:text-violet-800 transition-colors"
                  aria-label="Twitter"
                >
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider + copyright */}
        <div className="border-t border-violet-500/20 mt-8 pt-8">
          <p className="text-lg font-medium text-violet-500 text-center">
            © 2026 PituPi. All rights reserved. Built for Africa, secured for
            you.
          </p>
        </div>
      </div>
    </footer>
  );
}
