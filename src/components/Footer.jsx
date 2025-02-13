/**
 * @copyright 2025 Siva Kishore Reddy
 * @license Apache-2.0
 */


/**
 * Components
 */
import { ButtonPrimary } from "./Button";


const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Projects',
    href: '#projects'
  },
  {
    label: 'Reviews',
    href: '#reviews'
  },
  {
    label: 'Blog',
    href: '#blog'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://bit.ly/3PO6WiZ'
  },
  {
    label: 'LinkedIn',
    href: 'https://bit.ly/3CkPI9X'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/sivakishore_in'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/sivakishorereddy.in/'
  },
  {
    label: 'CodePen',
    href: 'https://codepen.io/sivakishorereddy'
  }
];


const Footer = () => {
  return (
    <footer className="section">
      <div className="container">

        <div className="lg:grid lg:grid-cols-2">

          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>

            <ButtonPrimary
              href="mailto:sivakishore.work@gmail.com"
              label="Start project"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">

            <div>
              <p className="mb-2 reveal-up">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Socials</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a
            href="/"
            className="logo reveal-up"
          >
            <img
              src="/assets/mine/logo.svg"
              width={40}
              height={40}
              alt="Logo"
            />
          </a>

          <a href="#" target="_top" rel="noopener noreferrer" className="text-zinc-200 hover:text-zinc-400">
            <p className="text-zinc-500 text-sm reveal-up">
              &copy; 2025 Siva Kishore Reddy | All rights reserved
            </p>
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer