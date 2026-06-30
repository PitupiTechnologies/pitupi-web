import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full bg-[#F8F5FF]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] py-16">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 w-[275px] shrink-0">
            <Link to="/">
              <img
                src="/logo.png"
                alt="PituPi Logo"
                className="w-[88px] h-[23px]"
              />
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
                
                <a  href="#"
                  className="text-violet-500 hover:text-violet-800 transition-colors"
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3333 10.0003C18.3333 5.40033 14.6 1.66699 9.99996 1.66699C5.39996 1.66699 1.66663 5.40033 1.66663 10.0003C1.66663 14.0337 4.53329 17.392 8.33329 18.167V12.5003H6.66663V10.0003H8.33329V7.91699C8.33329 6.30866 9.64163 5.00033 11.25 5.00033H13.3333V7.50033H11.6666C11.2083 7.50033 10.8333 7.87533 10.8333 8.33366V10.0003H13.3333V12.5003H10.8333V18.292C15.0416 17.8753 18.3333 14.3253 18.3333 10.0003Z" fill="#3C003D"/>
                  </svg>
                </a>
                
                <a  href="#"
                  className="text-violet-500 hover:text-violet-800 transition-colors"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8567 1.66699C11.7942 1.66949 12.27 1.67449 12.6808 1.68616L12.8425 1.69199C13.0292 1.69866 13.2133 1.70699 13.4358 1.71699C14.3225 1.75866 14.9275 1.89866 15.4583 2.10449C16.0083 2.31616 16.4717 2.60283 16.935 3.06533C17.3589 3.48177 17.6868 3.98572 17.8958 4.54199C18.1017 5.07283 18.2417 5.67782 18.2833 6.56533C18.2933 6.78699 18.3017 6.97116 18.3083 7.15866L18.3133 7.32033C18.3258 7.73033 18.3308 8.20616 18.3325 9.14366L18.3333 9.76533V10.857C18.3354 11.4648 18.329 12.0727 18.3142 12.6803L18.3092 12.842C18.3025 13.0295 18.2942 13.2137 18.2842 13.4353C18.2425 14.3228 18.1008 14.927 17.8958 15.4587C17.6868 16.0149 17.3589 16.5189 16.935 16.9353C16.5186 17.3592 16.0146 17.6871 15.4583 17.8962C14.9275 18.102 14.3225 18.242 13.4358 18.2837L12.8425 18.3087L12.6808 18.3137C12.27 18.3253 11.7942 18.3312 10.8567 18.3328L10.235 18.3337H9.14417C8.53606 18.3358 7.92794 18.3294 7.32001 18.3145L7.15834 18.3095C6.96051 18.302 6.76273 18.2934 6.56501 18.2837C5.67834 18.242 5.07334 18.102 4.54167 17.8962C3.9857 17.687 3.48204 17.3591 3.06584 16.9353C2.64163 16.519 2.31343 16.015 2.10417 15.4587C1.89834 14.9278 1.75834 14.3228 1.71667 13.4353L1.69167 12.842L1.68751 12.6803C1.67214 12.0727 1.6652 11.4648 1.66667 10.857V9.14366C1.66437 8.53583 1.67048 7.92799 1.68501 7.32033L1.69084 7.15866C1.69751 6.97116 1.70584 6.78699 1.71584 6.56533C1.75751 5.67782 1.89751 5.07366 2.10334 4.54199C2.31308 3.98549 2.64186 3.48152 3.06667 3.06533C3.48263 2.64162 3.986 2.31372 4.54167 2.10449C5.07334 1.89866 5.67751 1.75866 6.56501 1.71699C6.78667 1.70699 6.97167 1.69866 7.15834 1.69199L7.32001 1.68699C7.92767 1.67219 8.5355 1.6658 9.14334 1.66783L10.8567 1.66699ZM10 5.83366C8.89494 5.83366 7.83513 6.27265 7.05373 7.05405C6.27233 7.83545 5.83334 8.89526 5.83334 10.0003C5.83334 11.1054 6.27233 12.1652 7.05373 12.9466C7.83513 13.728 8.89494 14.167 10 14.167C11.1051 14.167 12.1649 13.728 12.9463 12.9466C13.7277 12.1652 14.1667 11.1054 14.1667 10.0003C14.1667 8.89526 13.7277 7.83545 12.9463 7.05405C12.1649 6.27265 11.1051 5.83366 10 5.83366ZM10 7.50033C10.3283 7.50027 10.6534 7.56488 10.9567 7.69047C11.2601 7.81605 11.5357 8.00016 11.7679 8.23226C12.0001 8.46437 12.1843 8.73994 12.31 9.04323C12.4356 9.34653 12.5004 9.6716 12.5004 9.99991C12.5005 10.3282 12.4359 10.6533 12.3103 10.9566C12.1847 11.26 12.0006 11.5356 11.7685 11.7678C11.5364 12 11.2608 12.1842 10.9575 12.3099C10.6542 12.4356 10.3291 12.5003 10.0008 12.5003C9.3378 12.5003 8.70191 12.2369 8.23307 11.7681C7.76423 11.2993 7.50084 10.6634 7.50084 10.0003C7.50084 9.33728 7.76423 8.7014 8.23307 8.23256C8.70191 7.76372 9.3378 7.50033 10.0008 7.50033M14.3758 4.58366C14.0996 4.58366 13.8346 4.69341 13.6393 4.88876C13.4439 5.08411 13.3342 5.34906 13.3342 5.62533C13.3342 5.90159 13.4439 6.16654 13.6393 6.3619C13.8346 6.55725 14.0996 6.66699 14.3758 6.66699C14.6521 6.66699 14.9171 6.55725 15.1124 6.3619C15.3078 6.16654 15.4175 5.90159 15.4175 5.62533C15.4175 5.34906 15.3078 5.08411 15.1124 4.88876C14.9171 4.69341 14.6521 4.58366 14.3758 4.58366Z" fill="#3C003D"/>
                  </svg>
                </a>
                
                <a  href="#"
                  className="text-violet-500 hover:text-violet-800 transition-colors"
                  aria-label="Twitter"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_218_5446)">
                      <mask id="mask0_218_5446" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                        <path d="M0 0H20V20H0V0Z" fill="white"/>
                      </mask>
                      <g mask="url(#mask0_218_5446)">
                        <path d="M15.75 0.937012H18.8171L12.1171 8.61416L20 19.0627H13.8286L8.99143 12.727L3.46286 19.0627H0.392857L7.55857 10.8484L0 0.93844H6.32857L10.6943 6.72844L15.75 0.937012ZM14.6714 17.2227H16.3714L5.4 2.6813H3.57714L14.6714 17.2227Z" fill="#3C003D"/>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_218_5446">
                        <rect width="20" height="20" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
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